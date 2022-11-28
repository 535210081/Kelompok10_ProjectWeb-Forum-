import express from "express";
import { deleteComment, getComment, getCommentById, saveComment, updateComment } from "../controller/comentController.js";
import { getUser, login, register } from "../controller/userController.js";

const router = express();

router.get('/homepage', (req, res) => {
    res.render('pages/homepage')
});

//User Routing
router.get('/user', getUser);
router.post('/register', register);
router.post('/login', login);

//Comment Routing
router.get('/comment', getComment);
router.get('/comment/:id', getCommentById);
router.post('/comment', saveComment);
router.patch('/comment/:id', updateComment);
router.delete('/comment/:id', deleteComment);


export default router;