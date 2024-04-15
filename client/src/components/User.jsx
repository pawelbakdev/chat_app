function User({ user, index, isUserActive }) {
  const { username } = user;

  function renderActiveIndicator() {
    if (!isUserActive) return null;

    return <div className="active-user-indicator" />;
  }

  return (
    <li>
      <div className="user">
        <div className="user-avatar">{username[0].toUpperCase()}</div>
        <span>{username}</span>
        {renderActiveIndicator()}
      </div>
    </li>
  );
}

export default User;
