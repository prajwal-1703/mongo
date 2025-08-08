const mongoose = require('mongoose');


const schema = mongoose.Schema

const user = new schema({
    userName: String,
    password: String,
    name: string
})

const todo = new schema({
    title: String,
    done: Boolean,
    userId: ObjectId
})


/* hello this is comment */
