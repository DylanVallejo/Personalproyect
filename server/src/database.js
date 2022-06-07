//if we see useFindandModify: true, are deprecated we need to use it 

import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:/techdevicesdb",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log("Connected to MongoDB"))
    .catch(error => console.log(error));