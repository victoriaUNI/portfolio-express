import prisma from '../../../lib/prisma';

export async function GET(req) {
  const users = await prisma.user.findMany();
  return Response.json(users);
}

export async function POST(req) {
  const data = await req.json();
  try {
    const user = await prisma.user.create({ data });
    return new Response(JSON.stringify(user), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Erro ao criar usuário.' }), { status: 400 });
  }
}
