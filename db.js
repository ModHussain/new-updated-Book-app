var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bookapp')

exports.mongoose=mongoose;


var BookSchema = mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  genre:{
    type: String,
    required: true
  },
  description:{
    type: String
  },
  author:{
    type: String,
    required: true
  },
  publisher:{
    type: String
  },
  pages:{
    type: String
  },
  createDate: {
    type: Date,
    default: Date.now
  }
},
{strict:false}
)

exports.Book = mongoose.model('Books',BookSchema,'Books');

var userSchema = mongoose.Schema({
  name:String,
  email:String,
  password:String,
  createDate: {
    type: Date,
    default: Date.now
  }
})

exports.User = mongoose.model('User',userSchema,'users');