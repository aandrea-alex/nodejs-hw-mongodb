import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody.js';
import { isValidId } from '../middlewares/isValidId.js';
import { createContactSchema, updateContactSchema } from '../validation/contacts.js';
import {
  getContactsCtrl,
  getContactByIdCtrl,
  createContactCtrl,
  deleteContactCtrl,
  patchContactCtrl,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();
router.use(authenticate);

router.get('/', ctrlWrapper(getContactsCtrl));
router.get('/:id', isValidId, ctrlWrapper(getContactByIdCtrl));
router.post('/', validateBody(createContactSchema), ctrlWrapper(createContactCtrl));
router.patch('/:id', isValidId, validateBody(updateContactSchema), ctrlWrapper(patchContactCtrl));
router.delete('/:id', isValidId, ctrlWrapper(deleteContactCtrl));

export default router;
