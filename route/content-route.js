

const ContentModel = require('./../model/content-model')
const express = require('express')
const router = express.Router()
const { Promise } = require('mongoose');
const { post } = require('./user-route');
const {
    ObjectId
} = require('mongoose').Types;



router.post('/postcontent', (req, res) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = req.body
            console.log(data)
            var content = new ContentModel({
                content: data.content,
                type: data.type,
                children: [],
                userId: ObjectId(req.body.userId)
            })
            return content.save().then(result => {
                if (data.type != 'post')
                    ContentModel.findByIdAndUpdate({ _id: req.body.parent_id }, {
                        $push: { children: result._id }
                    }, { new: true }).then(posted => {
                res.send(posted)
            }).catch(err => {
                console.log(err)
            })
                else
            res.send({
                postId: result._id
            })
        }).catch(err => {
            res.send({
                message: err.message
            })
        });
} catch (err) { console.log(err) }
    })
})


router.post('/getcontent', (req, res) => {
    return new Promise(async (resolve, reject) => {
        console.log(req.body)
        ContentModel.aggregate([
            { $match: { _id: ObjectId(req.body.parentId) } },
            {
                $lookup:
                {
                    from: "contents",
                    let: {
                        "id": "$children"
                    },
                    pipeline: [{
                        $match: {
                            "$expr": {
                                "$in": ["$_id", "$$id"]
                            }
                        }
                    },
                    {
                        $project: {
                            content: 1,
                            type: 1,
                            children: 1
                        }
                    }
                    ],
                    as: "comments"
                }
            }
        ]).then(posts => {
            res.send(posts)
        })
    })
})



router.get('/getbloglist', (req, res) => {
    return new Promise(async (resolve, reject) => {
        ContentModel.find({type:"post"}).then(posts => {
            res.send(posts)
        })
    })
})



module.exports = router;