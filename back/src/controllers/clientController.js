import * as clientServices from '../services/clientServices.js';

export const getClients =  async (req, res) => {
    try {
        //catch error if any
        const clients = await clientServices.getClients();          
        res.status(200).json(clients);
    }
    catch (err) {
        console.log('Error fectghing clients:', error);
        res.status(500).json({error: 'Internal Server Error'});
    }
};

export const createClient =  async (req, res) => {
    try {
        
       const  clientData = req.body; 
       const newClient = await clientServices.createClient(clientData);
         res.status(200).json(newClient);
    }
    catch (err) {
        console.log('Error fectghing clients:', error);
        res.status(500).json({error: 'Internal Server Error'});
    }
};