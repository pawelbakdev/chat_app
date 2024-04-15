import { Routes, Route } from 'react-router-dom';
import Main from './views/Main.jsx';
import Login from './views/Login.jsx';
import RequireAuth from './guards/RequireAuth.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Main />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
