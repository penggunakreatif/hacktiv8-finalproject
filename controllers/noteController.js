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
      const authenticatedUser = res.locals.user;
      const query = await Note.create(
        {
            name : payload.name,
            description : payload.description,
            userId: authenticatedUser.id
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
    Note.update(data, {
        where: {
          id,
        },
        returning: true,
        plain: true
      }).then(function (result) {
        const response = { name:"NoteUpdate", message: "Note was updated Successfully!", data: result[1].dataValues };
        res.status(200).json(response);

      });
    //   console.log(query);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async deleteNote(req, res) {
    try {
      const { id } = req.params;
      Note.destroy({
        where: {
          id,
        },
        returning: true,
        plain: true
      }).then(function (result) {
        if(result == true){
            const response = { name:"NoteDelete", message: "Note was deleted!" };
            res.status(200).json(response);
        }else{
            res.status(500).json(err);            
        }
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async getNoteByUserId(req, res) {
    try {
        const authenticatedUser = res.locals.user;
        const userInfo = await Note.findAll({
            where: {
                userId: authenticatedUser.id
            },
        });
        res.status(200).json(userInfo);
      } catch (err) {
          console.log(err);
        res.status(500).json(err);
      }
  }
}

module.exports = NoteController;
