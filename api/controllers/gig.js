const express = require('express');
const router = express.Router();
const db = require('../models');
const auth = require('../middleware/auth')

router.get('/', async (req, res) => {
    try {
        const gigs = await db.Gig.find();
        res.json( gigs )
    } catch (err) {

    }
})

// Creates gig with author Id, adds gig id to user.Gigs
router.post('/', auth, async (req, res) => {
    try {
        const gig = new db.Gig({
            title: req.body.title,
            location: req.body.location,
            text: req.body.text,
            name: `${req.user.firstName} ${req.user.lastName}`,
            user: req.user.id
        })
        await gig.save();
        const user = await db.User.findById(req.user.id);
        await user.gigs.push(gig._id);
        await user.save();
        res.json(gig);
    } catch(err) {
        console.log(err)
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