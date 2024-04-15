import User from '../models/User.js';

export async function getUsers(req, res, next) {
  try {
    let users = await User.find();

    res.status(200).json({ users });
  } catch (err) {
    next(err);
  }
}
