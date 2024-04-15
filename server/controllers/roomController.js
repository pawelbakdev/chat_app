import Room from '../models/Room.js';
import User from '../models/User.js';

export async function getRooms(req, res, next) {
  const { username } = req.headers;

  try {
    const user = await User.findOne({ username });
    const rooms = await Room.find({
      $or: [{ isPublic: true }, { userIds: { $in: [user._id] } }],
    });

    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
}

export async function createRoom(req, res, next) {
  try {
    const messages = await Message.find().sort({ createdAt: -1 }).limit(10);
    res.status(200).json(messages);
  } catch (err) {
    next(err);
  }
}
