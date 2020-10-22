const express = require('express');
const router = express.Router();
const db = require('../models');

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
router.post('/', (req, res) => {
    db.Post.create(req.body, (err, addedPost) => {
        if (err) {
            console.log(err);
        } else {
            db.User.findById(req.session.currentUser.id, (err, foundUser) => {
                if(err) {
                    console.log(err);
                } else {
                    foundUser.posts.push(addedPost.id);
                    foundUser.save();
                    res.redirect('/home')
                }
            })
        }
    })
})



router.put('/:id', (req, res) => {
    db.Post.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedPost) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/home');
        }
    })
})



router.delete('/:id', (req, res) => {
    db.Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
        if(err) {
            console.log(err)
        } else {
            db.User.findById(deletedPost.author, (err, foundUser) => {
                if(err) {
                    console.log(err);
                } else {
                    foundUser.posts.remove(deletedPost)
                    foundUser.save();
                    res.redirect('/home');
                }
            })
        }
    })
})

module.exports = router;
