import User from '../models/User.js';
import ValidationError from '../utils/ValidationError.js';

export async function loginUser(req, res, next) {
  try {
    const { username } = req.body;

    if (!username || !username.trim()) {
      next(new ValidationError('Username is required'));
    }

    let user = await User.findOne({ username });

    if (!user) {
      const newUser = new User({
        username,
      });

      user = await newUser.save();
    }

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
}
