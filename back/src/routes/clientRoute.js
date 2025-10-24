import express from 'express';

import *  as clientController from '../controllers/clientController.js';

const router = express.Router();

//ROUTE TO GET ALL CLIENTS
router.get('/clients', clientController.getClients);

export default router;