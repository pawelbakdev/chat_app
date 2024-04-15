import React, { useState } from 'react';
import { sendMessage } from '../services/SocketService.js';

function MessageForm() {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    sendMessage(value);

    setIsLoading(false);
    setValue('');
  }

  return (
    <form onSubmit={onSubmit} className="message-form">
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="submit" disabled={isLoading}>
        Send
      </button>
    </form>
  );
}

export default MessageForm;
