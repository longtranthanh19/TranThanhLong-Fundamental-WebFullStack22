const express = require('express');

const app = express();

//Router


app.get('/about', (request, respone) => {
    console.log(__dirname);
    respone.sendFile(__dirname + "/myself.html");
});

app.get("/about/bio.css", function(request, response){
    response.sendFile(__dirname + "/bio.css")
})


const port = 6969;

// http://localhost:6969
app.listen(port, function(err) {
    if(err) console.log(err)
    else console.log("Server Starts Success");
});