const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    id: {
        type : Number,
        required : true,
        unique : true
    },
   title : {
       type : String,
       required : true,
       minlength : 3,
   },
   author : {
       type : String,
       required : true,
   },
   price : {
       type : Number,
       required : true,
       min : 0
   },
   isbn : {
       type : String,
       required : true,
       unique : true
   },
   published : {
       type : Date,
       default : Date.now
   }
});

module.exports = mongoose.model('Book', bookSchema); // create model from schema

/*

// NOTES
- mongoose.model() creates a Model from schema.
- First argument 'Book' = Model name (will become collection name books in MongoDB).
- Second argument = schema definition.

// What

Schema = structure of document.
Model = class to interact with MongoDB collection.

// Why

Ensures data consistency → you can’t insert invalid data.
Adds validations (like required, unique, min).
Lets you interact with MongoDB using clean JS methods.

// How

Define schema with new mongoose.Schema({ ... }).
Add validations like required, minlength, unique.
Create model with mongoose.model('Name', schema).
Use model for CRUD:

    Book.create({...})
    Book.find()
    Book.findByIdAndUpdate()
    Book.deleteOne()

*/