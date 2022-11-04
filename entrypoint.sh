#!/bin/bash
set -e

yarn prisma migrate deploy

exec "$@"
