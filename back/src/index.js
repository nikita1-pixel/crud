import express from 'express';
import cors from 'cors';
import clientRoutes from './routes/clientRoute.js';

const app = express();
const port = 3000;

app.use(cors());//ENALBE CORS POLICY
app.use(express.json());//WE'LL BE PASSING DATA IN JSON FORMAT
//MIDLDLWARE TO PARSE JSON DATA

app.use('/api', clientRoutes);//ALL ROUTES RELATED TO CLIENTS WILL BE HANDLED IN clientRoutes

app.listen(port, () => {
    console.log("Listening on port 3000" );
});

// nodemon src/index.js
//http://localhost:3000/api/clients for postman
