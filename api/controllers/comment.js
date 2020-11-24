const express = require('express');
const router = express.Router();
const db = require('../models');
const auth = require('../middleware/auth');


router.post('/', auth, async (req, res) => {
    try {
        const user = await db.User.findById(req.user.id)
        const newComment = new db.Comment({
        text: req.body.text,
        name: `${user.firstName} ${user.lastName}`,
        user: user.id
        })
        await newComment.save();
        console.log('newcomment', newComment)
            const post = await db.Post.findById(req.body.id);
            await post.comments.push(newComment._id)
            await post.save();

            console.log('foundPost', post)
            res.json({post, newComment});

    } catch (err) {
        console.log(err);
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