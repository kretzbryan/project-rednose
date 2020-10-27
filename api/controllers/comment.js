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
        if(req.body.postId) {
            const post = await db.Post.findById(req.body.postId);
            console.log('foundPost', post)
            await post.comments.push(newComment._id)
            await post.save();
            res.json(newComment);
        }

        if(req.body.gigId) {
            const gig = await db.Gig.findById(req.body.postId);
            await gig.comments.push(newComment._id)
            await gig.save();
            res.json(newComment);
        }
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;