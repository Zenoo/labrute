# LaBrute

- Consult [engineering docs](docs/engineering/README.md) only when relevant; source/configs take precedence.
- Follow nearby patterns and workspace lint rules; preserve unrelated changes.
- Core/server relative imports use `.js`; client imports omit extensions.
- Edit `server/prisma/schema.prisma`; root `prisma/` is generated. Preserve persisted numeric IDs.
- Root `pnpm compile` excludes client; check it separately. Compile before server fight tests.
- Run focused checks; verify animation changes in-browser. Report verification limits.
- Update relevant docs when changing lasting conventions or workflows.
