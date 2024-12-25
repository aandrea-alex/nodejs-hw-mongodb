import { Router } from 'express';
import {
  registerUserCtrl,
  loginUserCtrl,
  refreshUserSessionCtrl,
  logoutUserCtrl,
  requestResetEmailCtrl,
  resetPasswordCtrl,
  getGoogleOAuthUrlCtrl,
  loginWithGoogleCtrl,
} from '../controllers/auth.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  registerUserSchema,
  loginUserSchema,
  requestResetEmailSchema,
  resetPasswordSchema,
  loginWithGoogleOAuthSchema,
} from '../validation/auth.js';

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

router.post(
  '/send-reset-email',
  validateBody(requestResetEmailSchema),
  ctrlWrapper(requestResetEmailCtrl),
);

router.post(
  '/reset-pwd',
  validateBody(resetPasswordSchema),
  ctrlWrapper(resetPasswordCtrl),
);

router.get('/get-oauth-url', ctrlWrapper(getGoogleOAuthUrlCtrl));

router.post(
  '/confirm-oauth',
  validateBody(loginWithGoogleOAuthSchema),
  ctrlWrapper(loginWithGoogleCtrl),
);

export default router;
