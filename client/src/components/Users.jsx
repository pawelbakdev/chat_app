import React, { useEffect, useState } from 'react';
import UserRepo from '../repository/UserRepo.js';
import User from './User.jsx';
import * as socket from '../services/SocketService.js';

const userRepo = new UserRepo();

function Users() {
  const [users, setUsers] = useState([]);
  const [activeUsers, setActiveUsers] = useState([]);

  function isUserActive(user) {
    return activeUsers.find((activeUser) => activeUser._id === user._id);
  }

  useEffect(() => {
    fetchUsers();

    function onUsersActiveStatus(value) {
      setActiveUsers(value);
    }

    socket.onUserActiveStatus(onUsersActiveStatus);

    return () => {
      socket.offUserActiveStatus(onUsersActiveStatus);
    };
  }, []);

  async function fetchUsers() {
    try {
      const { users } = await userRepo.getUsers();

      setUsers(users);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <ul>
      {users.map((user, index) => (
        <User
          user={user}
          index={index}
          key={index}
          isUserActive={isUserActive(user)}
        />
      ))}
    </ul>
  );
}

export default Users;
