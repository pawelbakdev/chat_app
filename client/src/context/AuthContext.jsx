import { useState, createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LocalStorageService from '../services/LocalStorageService.js';
import AuthRepo from '../repository/AuthRepo.js';
import * as socket from '../services/SocketService.js';

const authRepo = new AuthRepo();
const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const localStorageUser = LocalStorageService.getUser();
  const [user, setUser] = useState(localStorageUser);

  async function signin(username) {
    try {
      const user = await authRepo.login(username);
      LocalStorageService.setItem('user', JSON.stringify(user));
      setUser(user);
      socket.authenticate(user);
      navigate('/');
    } catch (error) {
      throw error;
    }
  }

  function signout() {
    setUser(null);
    LocalStorageService.removeItem('user');
  }

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
