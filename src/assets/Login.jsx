import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Maincontext } from './Pages/Context';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const Login = () => {
  const { userHandler } = useContext(Maincontext);
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const item = { email, password };

    try {
      const result = await fetch(
        'https://trackme-api.onrender.com/api/v1/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
          },
          body: JSON.stringify(item),
        },
      );

      const data = await result.json();
      if (!result.ok) {
        throw new Error(data.message || 'Login failed');
      }

      userHandler(data);
      localStorage.setItem('user', JSON.stringify(data));

      const name = data?.data?.user?.name;
      navigate('/', { state: { name } });
    } catch (err) {
      console.error('Login Error:', err.message);
      setErrorMessage(err.message);
    }
  };

  const handleGoogleSuccess = (credentialResponse) => {
    console.log('Google login success:', credentialResponse);
  };

  const handleGoogleError = () => {
    console.log('Google login failed');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Welcome to TrackMe
        </h2>
        <p className="text-center mb-4">Sign in to your account to continue</p>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>

        <div className="mt-4 flex justify-center">
          <GoogleOAuthProvider clientId="1037279978173-r5puq66g5eieqp9s7im21jfjnkm9r4s6.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
            />
          </GoogleOAuthProvider>
        </div>

        {errorMessage && (
          <p className="text-red-500 mt-4 text-center">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default Login;
