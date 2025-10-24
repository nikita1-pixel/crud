//GETTING ALL THE RULES TO CONNECT TO DATABASE

import { query } from '../db.js';

export const getClients = async () => {
    const{rows} = await query('SELECT * FROM cleint_tb');
    return rows;
}