const express = required('express'), mongoose = required('mongoose');

const app = express();

mongoose.connect("localhost:27017", {useUnifiedTopology: true, useNewUrlParser: true});

app.get("/",(req, res)=> {
    res.send("")
})