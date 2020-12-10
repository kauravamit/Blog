const UserModel = require('./../model/user-model')
const express = require('express')
const router = express.Router()
const { Promise } = require('mongoose');

router.post('/checkinas', (req, res) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = req.body
            console.log(data)
            // data.sports = JSON.parse(data.sports)
            return UserModel.findOne({ 'email': data.email }).then(found => {
                if (found) {
                    res.send({ userId:found._id})
                } else {
                   
                        var user = new UserModel({
                            email: data.email,
                            created_at: Date.now()
                        })
                    
                    return user.save().then(result => {
                        res.send({
                            _userId: result._id
                        })
                    }).catch(err => {
                        res.send({
                            message: err.message
                        })
                    });
                }
            })
        } catch (err) { console.log(err) }
    })
})

router.get('/ping', (req, res) => {
	res.status(200).end('Application running!');
});

module.exports = router;