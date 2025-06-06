# API Portfolio - Vercel Version

Este projeto foi adaptado para rodar como funções serverless na Vercel.

## Rotas disponíveis

- `GET /api/users`
- `POST /api/users`
- `GET /api/users/:id`
- `PUT /api/users/:id`
- `DELETE /api/users/:id`

Configure a variável de ambiente `DATABASE_URL` com sua conexão PostgreSQL no painel da Vercel.

Rodar localmente:

```bash
npm install
npx prisma generate
vercel dev
```
