import { io } from 'socket.io-client';
import LocalStorageService from '../services/LocalStorageService.js';

const URL = 'http://localhost:8080';

const socket = io(URL, {
  extraHeaders: {
    user: JSON.stringify(LocalStorageService.getUser()),
  },
});

export function connect() {
  socket.connect();
}

export function disconnect() {
  socket.disconnect();
}

export function onMessage(callback) {
  socket.on('message', callback);
}

export function sendMessage(message) {
  socket.emit('message', message);
}

export function authenticate(user) {
  socket.emit('authenticate', user);
}

export function onUserActiveStatus(callback) {
  socket.on('user-active-status', callback);
}

export function offConnected(callback) {
  socket.off('connect', callback);
}

export function offDisconnect(callback) {
  socket.off('disconnect', callback);
}

export function offMessage(callback) {
  socket.off('message', callback);
}

export function offUserActiveStatus(callback) {
  socket.off('user-active-status', callback);
}
