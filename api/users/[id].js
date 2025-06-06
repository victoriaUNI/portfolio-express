import prisma from '../../../lib/prisma';

export async function GET(req, { params }) {
  const id = parseInt(params.id);
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) {
      return new Response(JSON.stringify({ error: 'Usuário não encontrado.' }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response(JSON.stringify(user), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Erro GET /api/users/:id:", error);
    return new Response("Erro interno", { status: 500 });
  }
}

export async function PUT(req, { params }) {
  const id = parseInt(params.id);
  try {
    const data = await req.json();
    const user = await prisma.user.update({ where: { id }, data });
    return new Response(JSON.stringify(user), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Erro PUT /api/users/:id:", error);
    return new Response(JSON.stringify({ error: 'Erro ao atualizar usuário.' }), {
      status: 404,
      headers: { "Content-Type": "application/json" }
    });
  }
}

export async function DELETE(req, { params }) {
  const id = parseInt(params.id);
  try {
    await prisma.user.delete({ where: { id } });
    return new Response(JSON.stringify({ message: 'Usuário deletado com sucesso.' }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Erro DELETE /api/users/:id:", error);
    return new Response(JSON.stringify({ error: 'Erro ao deletar usuário.' }), {
      status: 404,
      headers: { "Content-Type": "application/json" }
    });
  }
}
