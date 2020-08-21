const express = require('express');
const router = express.Router();
const path = require('path');
const crypto = require('crypto');
const Grid = require('gridfs-stream');
const db = require('../models');
const mongo = require('mongodb')
const mongoose = require('mongoose');


const mongoURI = 'mongodb://localhost:27017/circusnetwork';
const conn = mongoose.createConnection(mongoURI);





// User Home Page
router.get('/', async (req, res) => {
    if (req.session.currentUser) {
        try {
            const currentUser = await db.User.findById(req.session.currentUser.id);
            const allPosts = await db.Post.find({}).populate('author');
            const allGigs = await db.Gig.find({}).populate('author');
            // res.status(200).json({gigs: allGigs, posts: allPosts})
            res.status(200).json({ currentUser: currentUser, posts: allPosts, gigs: allGigs })
        } catch (err) {
            if(err) {
                res.status(500).json({message: 'An error occurred. Please try again.'})
            }
        }
        
    } else {
        res.redirect('/')
    }
})



// Creates a post with author id, adds post id to User.posts
router.post('/add-post', (req, res) => {
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


// Creates gig with author Id, adds gig id to user.Gigs
router.post('/add-gig', (req, res) => {
    db.Gig.create(req.body, (err, addedGig) => {
        if (err) {
            console.log(err);
        } else {
            db.User.findById(req.session.currentUser.id, (err, foundUser) => {
                if(err) {
                    console.log(err);
                } else {
                    foundUser.gigs.push(addedGig.id);
                    foundUser.save();
                    res.redirect('/home')
                }
            })
        }
    })
})


router.put('/edit-profile/:id', (req, res) => {
    db.User.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedUser) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/home');
        }
    })
})

router.put('/edit-gig/:id', (req, res) => {
    db.Gig.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedGig) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/home');
        }
    })
})

router.put('/edit-post/:id', (req, res) => {
    db.Post.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedPost) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/home');
        }
    })
})



// Delete Gig
router.delete('/delete-gig/:id', (req, res) => {
    db.Gig.findByIdAndDelete(req.params.id, (err, deletedGig) => {
        if(err) {
            console.log(err)
        } else {
            db.User.findById(deletedGig.author, (err, foundUser) => {
                if(err) {
                    console.log(err);
                } else {
                    foundUser.gigs.remove(deletedGig)
                    foundUser.save();
                    res.redirect('/home');
                }
            })
        }
    })
})

router.delete('/delete-post/:id', (req, res) => {
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