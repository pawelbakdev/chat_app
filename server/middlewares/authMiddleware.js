import User from '../models/User.js';
import UnauthorizedError from '../utils/UnauthorizedError.js';

async function authMiddleware(req, res, next) {
  const { user_id } = req.headers;

  if (!user_id) {
    next(new UnauthorizedError('user_id is missing in headers'));
  }

  try {
    const user = await User.findById(user_id);

    if (!user) {
      next(new UnauthorizedError('Invalid username'));
    }

    req.user = user;

    next();
  } catch (err) {
    next(err);
  }
}

export default authMiddleware;
