import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
  userIds: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'User',
    require: true,
  },
  name: {
    type: String,
  },
  isPublic: {
    type: Boolean,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Room', roomSchema);
