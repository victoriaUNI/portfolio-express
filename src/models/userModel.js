const db = require('../config/db');

class User {
  static async create(nome, bio, email, github, linkedin) {
    const query = `
      INSERT INTO users (nome, bio, email, github, linkedin)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const values = [nome, bio, email, github, linkedin];
    const { rows } = await db.query(query, values);
    return rows[0];
  }

  static async findAll() {
    const { rows } = await db.query('SELECT * FROM users;');
    return rows;
  }

  static async findById(id) {
    const { rows } = await db.query('SELECT * FROM users WHERE id = $1;', [id]);
    return rows[0];
  }

  static async update(id, nome, bio, email, github, linkedin) {
    const query = `
      UPDATE users
      SET nome = $1, bio = $2, email = $3, github = $4, linkedin = $5
      WHERE id = $6
      RETURNING *;
    `;
    const values = [nome, bio, email, github, linkedin, id];
    const { rows } = await db.query(query, values);
    return rows[0];
  }

  static async delete(id) {
    const { rows } = await db.query('DELETE FROM users WHERE id = $1 RETURNING *;', [id]);
    return rows[0];
  }
}

module.exports = User;