if [ "$NODE_ENV" = "production" ]; then
  # Sync DB
  npm run db:sync:prod

  # Compile Typescript
  npm run compile

  # Seed DB
  npm run db:seed

  # Build client
  npm run build --workspace=client
else
  # Generate schema types + Sync DB
  npm run db:sync:dev

  # Compile Typescript
  npm run compile

  # Seed DB
  npm run db:seed
fi