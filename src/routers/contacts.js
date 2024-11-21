import { Router } from 'express';
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
router.post('/', ctrlWrapper(createContactCtrl));
router.patch('/:id', ctrlWrapper(patchContactCtrl));
router.delete('/:id', ctrlWrapper(deleteContactCtrl));

export default router;
