const express = require('express');
const router = express.Router();
const db = require('../models');
const auth = require('../middleware/auth');




router.put('/:id', auth, async (req, res) => {
    try {
        const comment = await db.Comment.findOneAndUpdate({_id: req.params.id}, {text: req.body.text}, {new: true});
        res.json(comment);
    } catch (err) {
        console.log(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const comment = await db.Comment.findById(req.params.id);
        const post = await db.Post.findById(comment.post);
        await post.comments.remove(comment);
        await post.save();
        await comment.remove();
        const posts = db.Post.find({});

        res.json(posts)
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;