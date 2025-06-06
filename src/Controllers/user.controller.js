const prisma = require("../prisma/client");

exports.getAll = async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
};

exports.getById = async (req, res) => {
  const id = parseInt(req.params.id);
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) return res.status(404).json({ error: "Usuário não encontrado." });
  res.json(user);
};

exports.create = async (req, res) => {
  const { nome, bio, email, github, linkedin } = req.body;
  try {
    const user = await prisma.user.create({
      data: { nome, bio, email, github, linkedin },
    });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Erro ao criar usuário." });
  }
};

exports.update = async (req, res) => {
  const id = parseInt(req.params.id);
  const { nome, bio, email, github, linkedin } = req.body;
  try {
    const user = await prisma.user.update({
      where: { id },
      data: { nome, bio, email, github, linkedin },
    });
    res.json(user);
  } catch (error) {
    res.status(404).json({ error: "Usuário não encontrado." });
  }
};

exports.remove = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await prisma.user.delete({ where: { id } });
    res.json({ message: "Usuário deletado com sucesso." });
  } catch (error) {
    res.status(404).json({ error: "Usuário não encontrado." });
  }
};
