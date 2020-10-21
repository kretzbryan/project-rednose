const express = require('express');
const router = express.Router();
const path = require('path');
const crypto = require('crypto');
const Grid = require('gridfs-stream');
const db = require('../models');
const mongo = require('mongodb')
const mongoose = require('mongoose');
const auth = require('../middleware/auth')


const mongoURI = 'mongodb://localhost:27017/circusnetwork';
const conn = mongoose.createConnection(mongoURI);





// User Home Page
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




router.put('/edit-profile/:id', (req, res) => {
    db.User.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedUser) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/home');
        }
    })
})






module.exports = router;