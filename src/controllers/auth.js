import { registerUser,
    loginUser,
 } from '../services/auth.js';
 import { ONE_MONTH } from '../constants/index.js';

 export const setupSession = (res, session) => {
    res.cookie('refreshToken', session.refreshToken, {
      httpOnly: true,
      expires: new Date(Date.now() + ONE_MONTH),
    });
    res.cookie('sessionId', session._id, {
      httpOnly: true,
      expires: new Date(Date.now() + ONE_MONTH),
    });
  };

export const registerUserCtrl = async (req, res) => {
  const user = await registerUser(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully registered a user!',
    data: user,
  });
};

export const loginUserCtrl = async (req, res) => {
    const session = await loginUser(req.body);
  
    setupSession(res, session);
  
    res.json({
      status: 200,
      message: 'Successfully logged in an user!',
      data: {
        accessToken: session.accessToken,
      },
    });
  };
