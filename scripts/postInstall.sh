#!/usr/bin/env bash

set -eux

if [ "${NODE_ENV:-dev}" = "production" ]; then
  # Compile Typescript
  pnpm compile

  # Build client
  pnpm build:client
else
  # Generate schema types + Sync DB
  pnpm db:sync:dev

  # Compile Typescript
  pnpm compile

  # Seed DB
  pnpm db:seed
fi
