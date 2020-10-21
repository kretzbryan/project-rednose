const express = require('express');
const router = express.Router();
const path = require('path');
const crypto = require('crypto');
const Grid = require('gridfs-stream');
const db = require('../models');
const mongo = require('mongodb')
const mongoose = require('mongoose');
const auth = require('../middleware/auth')

router.get('/', async (req, res) => {
    try {
        const currentUser = await db.User.findById(req.user.id).select('-password');
        const allPosts = await db.Post.find({}).populate('author');
        const allGigs = await db.Gig.find({}).populate('author');
        // res.status(200).json({gigs: allGigs, posts: allPosts})
        res.json({ currentUser: currentUser, posts: allPosts, gigs: allGigs })
    } catch (err) {
        if(err) {
            res.status(500).json({message: 'An error occurred. Please try again .'})
        }
    }
    
})

// Shows all profiles with the exception of the current User
router.get('/all', auth, async (req, res) => {
    try {
        const profiles = await db.User.find({}).select('-password') 
        res.json({ profiles })
    } catch(err) {
        res.status(500).send({ msg: 'An error occured.' })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const foundProfile = await db.User.findById(req.params.id).populate('posts').populate('gigs');
        const currentUser = await db.User.findById(req.session.currentUser.id)
        res.status(200).json({currentUser: currentUser, profile: foundProfile})
    } catch(err) {
        console.log(err)
}
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

router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedUser = await db.User.findByIdAndDelete(req.params.id);
        const deletedPosts = await db.Post.remove({ author: deletedUser._id });
        const deletedGigs = await db.Gig.remove({ author: deletedUser._id });
    } catch (err) {
        console.log(err);
    }

})

module.exports = router;