function Message({ message }) {
  const { user, content, date } = message;

  function getDateString() {
    return new Date(date).toLocaleTimeString();
  }

  return (
    <div className="message">
      <div>
        <span className="message-author">{user.username}</span>
        <span className="message-content">{content}</span>
      </div>
      <span className="message-date">{getDateString()}</span>
    </div>
  );
}

export default Message;
