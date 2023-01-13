const router = require('express').Router();
// const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const noteController = require("../controllers/noteController");
const authentication = require('../middlewares/authentication');


router.post('/register', authController.register);
router.post('/login', authController.login);

router.get('/notes/byUser',authentication, noteController.getNoteByUserId);

router.get('/notes',authentication, noteController.getAllNote);
router.post('/notes',authentication, noteController.createNote);

router.get('/notes/:id',authentication, noteController.getOneNoteByID);
router.put('/notes/:id',authentication, noteController.updateNote);
router.delete('/notes/:id',authentication, noteController.deleteNote);

module.exports = router;

