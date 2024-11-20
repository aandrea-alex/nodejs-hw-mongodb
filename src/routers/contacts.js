import { Router } from 'express';
import {
  getContactsCtrl,
  getContactByIdCtrl,
  createContactCtrl,
  deleteContactCtrl,
  upsertContactCtrl,
  patchContactCtrl,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const contactsRouter = Router();

contactsRouter.get('/contacts', ctrlWrapper(getContactsCtrl));
contactsRouter.get('/contacts/:id', ctrlWrapper(getContactByIdCtrl));
contactsRouter.post('/contacts', ctrlWrapper(createContactCtrl));
contactsRouter.delete('/contacts/:id', ctrlWrapper(deleteContactCtrl));
contactsRouter.put('/contacts/:id', ctrlWrapper(upsertContactCtrl));
contactsRouter.patch('/contacts/:id', ctrlWrapper(patchContactCtrl));

export default contactsRouter;
