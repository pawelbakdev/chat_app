import { Server } from 'socket.io';
import Message from '../models/Message.js';
import Room from '../models/Room.js';

let io = undefined;
let connectedUsers = [];
const GENERAL_ROOM_ID = '1';

function init(server) {
  io = new Server(server, {
    cors: {
      origin: 'http://localhost:7070',
    },
  });

  io.on('connection', (socket) => {
    userActiveStatus();

    socket.join(GENERAL_ROOM_ID);

    socket.on('disconnect', () => {
      userActiveStatus();
    });

    socket.on('authenticate', (user) => {
      socket.handshake.headers['user'] = JSON.stringify(user);
      userActiveStatus();
    });

    socket.on('message', async (message) => {
      await saveNewMessage(message, socket, GENERAL_ROOM_ID);
      sendMessage(message, socket);
    });
  });
}

function userActiveStatus() {
  const userArr = [];

  for (const [_, value] of io.sockets.sockets.entries()) {
    const user = value.handshake.headers.user
      ? JSON.parse(value.handshake.headers.user)
      : null;

    if (user) {
      userArr.push(user);
    }
  }

  connectedUsers = [...userArr];

  io.emit('user-active-status', connectedUsers);
}

function sendMessage(message, socket) {
  io.to(GENERAL_ROOM_ID).emit('message', {
    content: message,
    date: Date.now(),
    user: JSON.parse(socket.handshake.headers.user) || null,
  });
}

async function saveNewMessage(message, socket, room) {
  const { _id: userId } = JSON.parse(socket.handshake.headers.user);

  try {
    const room = await Room.findOne({ isPublic: true });

    const newMessage = new Message({
      roomId: room._id,
      userId: userId,
      content: message,
    });

    await newMessage.save();
  } catch (error) {
    console.log(error);
  }
}

export default init;
