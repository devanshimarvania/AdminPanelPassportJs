const mongoose = require('mongoose');
const path = require('path');
const multer = require('multer');

const imagePath = '/assets/images/avatars';

const AdminSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    pwd: {
        type: String
    },
    gender: {
        type: String
    },
    dob: {
        type: String
    },
    role: {
        type: String,
    },
    city: {
        type: String
    },
    avtar: {
        type: String
    }
}, {
    timestamps: true
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '..', 'public', imagePath));
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

AdminSchema.statics.uploadImage = multer({
    storage: storage
}).single('avtar');

AdminSchema.statics.imagePath = imagePath;

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;