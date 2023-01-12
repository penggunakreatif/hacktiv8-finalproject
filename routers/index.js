const router = require('express').Router();
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const noteController = require("../controllers/noteController");
const authentication = require('../middlewares/authentication');


router.post('/register', authController.register);
router.post('/login', authController.login);

router.get('/notes',authentication, noteController.getAllNote);
router.post('/notes',authentication, noteController.createNote);

router.get('/notes/:id',authentication, noteController.getOneNoteByID);

// const routes = (app) => {
//     app.route('/notes')
//         .get(authentication,NoteController.getAllNote)
//         .post(authentication,NoteController.createNote);
//     app.route('/notes/:noteId')
//         .put(authentication,NoteController.updateNote)
//         .get(authentication,NoteController.getOneNoteByID)
//         .delete(authentication, NoteController.deleteNote)
// }

module.exports = router;

