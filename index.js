const express = require('express');
const app = express();

const port = process.env.PORT || 80;

const server = app.listen(port);

server.timeout = 1000 * 60 * 10; 
app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
});

app.post('/bfhl', (req, res) => {

    // console.log(req.query.data);
    var data=req.query.data;
    var numbers=[];
    var alphabets=[];
    for(var i=0;i<data.length;i++)
    {
        var ch=data[i];

        if(ch>="A"&&ch<="z")
        {
            alphabets.push(ch);
        }
        else
        {
            numbers.push(ch)
        }
    }

    // console.log(numbers);
    // console.log(alphabets);

    res.send(JSON.stringify({

            "is_success": true,
            "user_id": "chirag_1911981023",
            "email" : "chiragarora.cse19@chitkarauniversity.edu.in",
            "roll_number":"1911981023",
            "numbers": numbers,
            "alphabets" :alphabets
    })); 
})
