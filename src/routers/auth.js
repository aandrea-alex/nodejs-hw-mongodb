import { Router } from 'express';
import {
  registerUserCtrl,
  loginUserCtrl,
  refreshUserSessionCtrl,
  logoutUserCtrl,
} from '../controllers/auth.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { registerUserSchema, loginUserSchema } from '../validation/auth.js';

const router = Router();

router.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserCtrl),
);

router.post(
  '/login',
  validateBody(loginUserSchema),
  ctrlWrapper(loginUserCtrl),
);

router.post('/refresh', ctrlWrapper(refreshUserSessionCtrl));

router.post('/logout', ctrlWrapper(logoutUserCtrl));

export default router;
