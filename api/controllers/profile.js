const express = require('express');
const router = express.Router();
const path = require('path');
const crypto = require('crypto');
const Grid = require('gridfs-stream');
const db = require('../models');
const mongo = require('mongodb')
const mongoose = require('mongoose');
const auth = require('../middleware/auth')


// Shows all profiles with the exception of the current User
router.get('/all', auth, async (req, res) => {
    try {
        const profiles = await db.User.find().select('-password') 
        const user = req.user.id
        res.json({ profiles, user })
    } catch(err) {
        res.status(500).send({ msg: 'An error occured.' })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const foundProfile = await db.User.findById(req.params.id).populate('posts').populate('gigs');
        res.status(200).json({ profile: foundProfile})
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