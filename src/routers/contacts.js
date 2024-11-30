import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody.js';
import { createContactSchema, updateContactSchema } from '../validation/contacts.js';
import {
  getContactsCtrl,
  getContactByIdCtrl,
  createContactCtrl,
  deleteContactCtrl,
  patchContactCtrl,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/', ctrlWrapper(getContactsCtrl));
router.get('/:id', ctrlWrapper(getContactByIdCtrl));
router.post('/', validateBody(createContactSchema), ctrlWrapper(createContactCtrl));
router.patch('/:id', validateBody(updateContactSchema), ctrlWrapper(patchContactCtrl));
router.delete('/:id', ctrlWrapper(deleteContactCtrl));

export default router;
