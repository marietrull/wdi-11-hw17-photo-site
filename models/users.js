const mongoose = require('mongoose');

//how all of the objects in the collection will look
const userSchema = new mongoose.Schema({
	userName: String
});

//Creating the collection --> author will be the name of the collection
module.exports = mongoose.model('User', userSchema);