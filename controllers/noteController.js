const { Note, User } = require('../models');

class NoteController {
  static async getAllNote(req, res) {
    try {
        console.log(User);
      const query = await Note.findAll({
        include: User,
      });
      res.status(200).json(query);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async getOneNoteByID(req, res) {
    try {
      const { id } = req.params;
      console.log(id);
      const query = await Note.findByPk(id);
      res.status(200).json(query);
    } catch (err) {
        console.log(err);
      res.status(500).json(err);
    }
  }

  static async createNote(req, res) {
    try {
      const payload = req.body;
      console.log(payload);
      const authenticatedUser = res.locals.user;
      console.log(authenticatedUser.id);
      const query = await Note.create(
        {
            name : payload.name,
            description : payload.description,
            user_id: authenticatedUser.id
        });
      res.status(200).json(query);
    } catch (err) {
        console.log(err);
      res.status(500).json(err);
    }
  }

  static async updateNote(req, res) {
    try {
      const { id } = req.params;
      const { name, description } = req.body;
      const data = {
        name,
        description
      };
      const query = Note.update(data, {
        where: {
          id,
        },
        returning: true,
      });
      res.status(200).json(query);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async deleteNote(req, res) {
    try {
      const { id } = req.params;
      const query = Note.destroy({
        where: {
          id,
        },
      });
      res.status(200).json(query);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = NoteController;
