import express from 'express';

const app = express();
const port = 3000;


//response to our get request
app.get('/' , (req, res)=> {
    res.send("Hello from backend");
});

app.listen(port, () => {
    console.log("Listening on port 3000" );
});

