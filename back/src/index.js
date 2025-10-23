import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());//ENALBE CORS POLICY
app.use(express.json());//WE'LL BE PASSING DATA IN JSON FORMAT
//MIDLDLWARE TO PARSE JSON DATA

//response to our get request
app.get('/' , (req, res)=> {
    res.send("Hello from backend");
});

app.listen(port, () => {
    console.log("Listening on port 3000" );
});

