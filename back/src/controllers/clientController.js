import * as clientServices from '../services/clientServices.js';

export const getClients =  async (req, res) => {
    try {
        //catch error if any
        const clients = await clientServices.getClients();          
        res.status(200).json(clients);
    }
    catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};