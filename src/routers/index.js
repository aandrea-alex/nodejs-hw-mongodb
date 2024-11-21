import express from 'express';
import contactRouters from './contacts.js';

const routers = express.Router();

routers.use('/contacts', contactRouters);

export default routers;
