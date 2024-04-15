import Message from '../models/Message.js';

export async function getMessage(req, res, next) {
  const { roomId } = req.params;

  try {
    const messages = await Message.find({ room_id: roomId })
      .populate('userId')
      .sort({ createdAt: -1 })
      .limit(10);

    const formattedMessage = messages
      .map((message) => ({
        date: message.createdAt,
        content: message.content,
        user: {
          id: message.userId._id,
          username: message.userId.username,
        },
      }))
      .reverse();

    res.status(200).json(formattedMessage);
  } catch (err) {
    next(err);
  }
}
