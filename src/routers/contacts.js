import { Router } from 'express';
import {
  getContactsCtrl,
  getContactByIdCtrl,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const contactsRouter = Router();

contactsRouter.get('/contacts', ctrlWrapper(getContactsCtrl));
contactsRouter.get('/contacts/:id', ctrlWrapper(getContactByIdCtrl));

export default contactsRouter;
