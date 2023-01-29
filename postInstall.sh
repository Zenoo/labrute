#!/usr/bin/env bash

set -eux

if [ "${NODE_ENV:-dev}" = "production" ]; then
  # Sync DB
  yarn run db:sync:prod

  # Compile Typescript
  yarn run compile

  # Seed DB
  yarn run db:seed

  # Build client
  yarn run build:client
else
  # Generate schema types + Sync DB
  yarn run db:sync:dev

  # Compile Typescript
  yarn run compile

  # Seed DB
  yarn run db:seed
fi
