const express = require('express');
const router = express.Router();
const db = require('../models');





// Shows all profiles with the exception of the current User
router.get('/', (req, res) => {
        db.User.find({}, (err, profiles) => {
            if (err) {
                res.status(500).json({ message: 'Internal Server Error' })
            } else {
                res.status(200).json({profiles});
            }
        })
            
})

module.exports = router;

