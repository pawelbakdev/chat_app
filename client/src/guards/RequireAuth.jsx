import { useAuth } from '../context/AuthContext.jsx';
import { Navigate } from 'react-router-dom';

function RequireAuth({ children }) {
  let auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default RequireAuth;
