const mongoose = require('mongoose');

let contentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
   liked: [],
   userId: {type:mongoose.Schema.ObjectId},
   hasChildren:{type:Boolean, default:false},
   children:[],
   postId: {type:mongoose.Schema.ObjectId}
});

const ContentModel = mongoose.model('Content', contentSchema);
module.exports = ContentModel;