#!/bin/sh
set -e

yarn prisma migrate deploy

exec "$@"
