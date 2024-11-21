import { Router } from 'express';
import {
  getContactsCtrl,
  getContactByIdCtrl,
  createContactCtrl,
  deleteContactCtrl,
  patchContactCtrl,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const contactsRouter = Router();

contactsRouter.get('/contacts', ctrlWrapper(getContactsCtrl));
contactsRouter.get('/contacts/:id', ctrlWrapper(getContactByIdCtrl));
contactsRouter.post('/contacts', ctrlWrapper(createContactCtrl));
contactsRouter.patch('/contacts/:id', ctrlWrapper(patchContactCtrl));
contactsRouter.delete('/contacts/:id', ctrlWrapper(deleteContactCtrl));

export default contactsRouter;
