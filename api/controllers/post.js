const express = require('express');
const router = express.Router();
const db = require('../models');
const auth = require('../middleware/auth')

router.get('/', async (req, res) => {
    try {
        const posts = await db.Post.find()
        .populate({
            path: 'comments',
            populate: {
                path: 'user',
                model: 'User'
            }
        })
        console.log('allposts', posts)
        res.status(200).json(posts)
    } catch (err) {
        res.status(400)
    }

    
})

router.get('/:id', auth, async (req, res ) => {
    try {
        const post = await db.Post.findById(req.params.id);
        console.log(post)
        res.json(post);
    } catch (err) {
        console.log(err);
    }
})

router.get('/user/:id', auth, async (req, res) => {
    try {
        const posts = db.Post.find({user : req.params.id})
        .populate({
            path: 'comments',
            populate: {
                path: 'user',
                model: 'User'
            }
        });
        res.json(posts)
    } catch (err) {
        console.log(err);
    }
})


// Creates a post with author id, adds post id to User.posts


router.post('/', auth, async (req, res) => {
    try {
        const user = await db.User.findById(req.user.id);
        const newPost = new db.Post({
            text: req.body.text,
            name: `${user.firstName} ${user.lastName}`,
            comments: req.body.comments,
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



router.put('/:id', async (req, res) => {
    try {
        const post = await db.Post.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(post)
    } catch (err) {
        console.log(err)
    }
})




router.delete('/:id', auth, async (req, res) => {
    try {
        const post = await db.Post.findById(req.params.id);

        if(post.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not Authorized' })
        }
        
        const user = await db.User.findById(req.user.id);
        await user.posts.remove(post);
        await user.save();
        const deletedPost = await post.remove();
        res.json(deletedPost);

    } catch (err) {
        console.log(err)
    }
})

module.exports = router;
