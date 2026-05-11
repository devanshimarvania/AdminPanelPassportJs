const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/adminPanel')
.then(() => {
    console.log("successfully connected");
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;