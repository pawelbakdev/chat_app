import './Main.css';
import { useAuth } from '../context/AuthContext.jsx';
import Users from '../components/Users.jsx';
import ChatRoom from '../components/ChatRoom.jsx';

function Main() {
  const auth = useAuth();

  return (
    <div className="main-wrapper">
      <header>
        <button onClick={auth.signout}>Log Out</button>
      </header>
      <main>
        <section className="users">
          <h3>Users</h3>
          <Users />
        </section>
        <section className="chat">
          <ChatRoom />
        </section>
      </main>
    </div>
  );
}

export default Main;
