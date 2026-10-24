FROM node:24-slim AS base
# prisma migrate still ships a native schema engine that links against openssl
RUN apt-get update \
  && apt-get install -y --no-install-recommends openssl ca-certificates \
  && rm -rf /var/lib/apt/lists/*
WORKDIR /app

# Install dependencies
FROM base AS deps
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Build
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN yarn prisma generate
RUN yarn build

# Production image
FROM base AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
# Docker sets HOSTNAME to the container id; Next's standalone server would bind to it
ENV HOSTNAME=0.0.0.0

# The CLI for `prisma migrate deploy` at container start. Pinned to the same
# version as @prisma/client in package.json.
RUN npm install -g prisma@7.10.1 && npm cache clean --force

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma.config.ts ./prisma.config.ts
COPY prisma ./prisma/

# Standalone output traces only what the server imports, keeping the image small
# https://nextjs.org/docs/pages/api-reference/config/next-config-js/output
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["yarn", "prod"]
