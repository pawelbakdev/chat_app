const LocalStorageService = {
  getItem(key) {
    return localStorage.getItem(key);
  },

  setItem(key, value) {
    localStorage.setItem(key, value);
  },

  removeItem(key) {
    localStorage.removeItem(key);
  },

  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  },
};

export default LocalStorageService;
