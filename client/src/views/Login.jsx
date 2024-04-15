import './Login.css';
import LoginForm from '../components/LoginForm';

function Login() {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h1>Login page</h1>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
