import Comment from "../models/comment.js";

export const getComment = async(req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getCommentById = async(req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        res.json(comment);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveComment = async(req, res) => {
    const comment = new Comment(req.body);
    try {
        const saveComment = await comment.save();
        res.status(201).json(saveComment);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateComment = async(req, res) => {
    const checkId = await Comment.findById(req.params.id);
    if (!checkId) return res.status(404).json({meesage: "Data not Found"});

    try {
        const updatedComment = await Comment.updateOne({_id: req.params.id},{$set: req.body});
        res.status(200).json(updatedComment);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteComment = async(req, res) => {
    const checkId = await Comment.findById(req.params.id);
    if (!checkId) return res.status(404).json({meesage: "Data not Found"});
    
    try {
        const deletedComment = await Comment.deleteOne({_id: req.params.id});
        res.status(200).json(deletedComment);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}


