const BASE_URL = 'http://localhost:8080';
import LocalStorageService from '../services/LocalStorageService.js';

class MainRepo {
  constructor(url) {
    this.baseUrl = `${BASE_URL}${url}`;
  }

  async request(method, url, payload) {
    const finalUrl = `${this.baseUrl}${url}`;

    const user = LocalStorageService.getUser();

    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (payload) {
      options.body = JSON.stringify(payload);
    }

    if (user) {
      options.headers['username'] = user.username;
      options.headers['user_id'] = user._id;
    }

    return fetch(finalUrl, options);
  }

  async get(url) {
    const response = await this.request('GET', url);
    return response.json();
  }

  async post(url, payload) {
    const response = await this.request('POST', url, payload);
    return response.json();
  }
}

export default MainRepo;
