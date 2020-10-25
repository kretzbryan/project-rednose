const express = require('express');
const router = express.Router();
const db = require('../models');
const auth = require('../middleware/auth')

router.get('/', (req, res) => {
    db.Post.find({} ,(err, posts) => {
        if (err) {
            res.status(200).json({ message: 'Internal Server Error' })
        } else {
            res.status(200).json(posts)
        }
    })
})


// Creates a post with author id, adds post id to User.posts


router.post('/', auth, async (req, res) => {
    try {
        const user = await db.User.findById(req.user.id);
        const newPost = new db.Post({
            text: req.body.text,
            name: `${user.firstName} ${user.lastName}`,
            user: user._id
        }) 
        const savedPost = await newPost.save();
        await user.posts.push(savedPost._id);
        await user.save();
        res.json(savedPost)
    } catch (err) {
        console.log(err)
    }
} )


router.put('/:id', (req, res) => {
    db.Post.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedPost) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/home');
        }
    })
})



router.delete('/:id', auth, async (req, res) => {
    try {
        const deletedPost = await db.Post.findByIdAndDelete(req.params.id);
        const updatedUser = await db.User.Update({ _id: req.user.id }, {$pull: { posts: req.params._id }})
        await updatedUser.save();
        res.json(deletedPost);

    } catch (err) {
        
    }
})

module.exports = router;
