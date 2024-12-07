import express from 'express';
import contactRouters from './contacts.js';
import authRouter from './auth.js';

const routers = express.Router();

routers.use('/contacts', contactRouters);
routers.use('/auth', authRouter);

export default routers;
