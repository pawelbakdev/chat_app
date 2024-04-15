import MessageForm from './MessageForm.jsx';
import { useEffect, useState } from 'react';
import * as socket from '../services/SocketService.js';
import Message from './Message.jsx';
import MessageRepo from '../repository/MessageRepo.js';

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [odlMessageFetched, setOdlMessageFetched] = useState(false);
  const messageRepo = new MessageRepo();

  useEffect(() => {
    function onMessage(message) {
      setMessages((prevState) => [...prevState, message]);
    }

    socket.onMessage(onMessage);

    return () => {
      socket.offMessage(onMessage);
    };
  }, []);

  async function getOldMessages() {
    try {
      const messages = await messageRepo.getMessages('1');
      setOdlMessageFetched(true);
      setMessages((prevState) => [...messages, ...prevState]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="chat-room">
      <div className="messages">
        <button
          className="messages-get-old-button"
          onClick={getOldMessages}
          disabled={odlMessageFetched}
        >
          Fetch old messages
        </button>
        {messages.map((message, index) => (
          <Message message={message} key={index} />
        ))}
      </div>
      <MessageForm />
    </div>
  );
}

export default ChatRoom;
