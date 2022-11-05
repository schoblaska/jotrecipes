#!/bin/sh
set -e

echo "database url:"
echo $DATABASE_URL

yarn run prisma migrate deploy

exec "$@"
