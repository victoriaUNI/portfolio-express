import prisma from '../../../lib/prisma';

export async function GET(req, { params }) {
  const id = parseInt(params.id);
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) return new Response(JSON.stringify({ error: 'Usuário não encontrado.' }), { status: 404 });
  return Response.json(user);
}

export async function PUT(req, { params }) {
  const id = parseInt(params.id);
  const data = await req.json();
  try {
    const user = await prisma.user.update({ where: { id }, data });
    return Response.json(user);
  } catch {
    return new Response(JSON.stringify({ error: 'Usuário não encontrado.' }), { status: 404 });
  }
}

export async function DELETE(req, { params }) {
  const id = parseInt(params.id);
  try {
    await prisma.user.delete({ where: { id } });
    return Response.json({ message: 'Usuário deletado com sucesso.' });
  } catch {
    return new Response(JSON.stringify({ error: 'Usuário não encontrado.' }), { status: 404 });
  }
}
