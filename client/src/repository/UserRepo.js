import MainRepo from './MainRepo.js';

const GET_USERS_URL = '/users';

class UserRepo extends MainRepo {
  constructor() {
    super('/user');
  }

  async getUsers() {
    try {
      return this.get(GET_USERS_URL);
    } catch (err) {}
  }
}

export default UserRepo;
