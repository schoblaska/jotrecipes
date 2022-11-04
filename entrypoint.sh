#!/bin/sh
set -e

yarn migrate

exec "$@"
