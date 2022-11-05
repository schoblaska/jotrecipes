#!/bin/sh
set -e

echo $DATABASE_URL

yarn run prisma migrate deploy

exec "$@"
