const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
    db.Gig.find({}, (err, gigs) => {
        if(err) {
            res.status(500).json({ message: 'Internal Server Error' })
        } else {
            res.status(200).json({ gigs })
        }
    })
})

// Creates gig with author Id, adds gig id to user.Gigs
router.post('/', async (req, res) => {
    try {
        const gig = await db.Gig.create(req.body);
        const author = await db.User.findById(req.user.id);
        author.gigs.push(gig.id);
        author.save();
        gig.author = (author.id);
        gig.save();
    } catch(err) {
        res.status(500).json({ msg: 'An error occured, please try again.' })
    }

})

// Edit
router.put('/:id', (req, res) => {
    db.Gig.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedGig) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/home');
        }
    })
})


// Delete Gig
router.delete('/:id', (req, res) => {
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
module.exports = router;