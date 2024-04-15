import MainRepo from './MainRepo.js';

const LOGIN_URL = '/login';
const GET_USER_URL = '/get_user';

class AuthRepo extends MainRepo {
  constructor() {
    super('/auth');
  }

  async login(username) {
    try {
      return await this.post(LOGIN_URL, { username });
    } catch (err) {
      throw err;
    }
  }
}

export default AuthRepo;
