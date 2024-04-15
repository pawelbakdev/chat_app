import MainRepo from './MainRepo.js';

const GET_MESSAGES_URL = '/messages';

class MessageRepo extends MainRepo {
  constructor() {
    super('/message');
  }

  async getMessages(roomId) {
    try {
      return this.get(`${GET_MESSAGES_URL}?roomId=${roomId}`);
    } catch (err) {}
  }
}

export default MessageRepo;
