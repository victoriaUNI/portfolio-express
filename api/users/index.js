import prisma from '../../../lib/prisma';

export async function GET(req) {
  try {
    const users = await prisma.user.findMany();
    return new Response(JSON.stringify(users), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Erro GET /api/users:", error);
    return new Response("Erro interno", { status: 500 });
  }
}

export async function POST(req) {
  try {
    const data = await req.json();
    const user = await prisma.user.create({ data });
    return new Response(JSON.stringify(user), {
      status: 201,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Erro POST /api/users:", error);
    return new Response(JSON.stringify({ error: 'Erro ao criar usuário.' }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
}
