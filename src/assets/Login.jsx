import React, { useContext, useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

import { Link, useNavigate } from 'react-router-dom';

import { Maincontext } from './Pages/Context';

const Login = () => {
  const { userHandler } = useContext(Maincontext);
  const [errom, Seterrorm] = useState('');
  const navigate = useNavigate();

  const registerHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        userHandler(user);
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/');
      })
      .catch((error) => {
        console.error('Login Error:', error.code, error.message);
        Seterrorm('Login failed: ' + error.message);
      });
  };
  const handlersucess = (credentialResponse) => {
    console.log('handlersucess h', credentialResponse);
  };
  const handleerror = () => {
    console.log('google error');
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Welcome to Trackme
        </h2>
        <p className="text-center mb-4">Sign in to your account to continue</p>
        <form onSubmit={registerHandler} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              id="password"
              name="password"
              required
              className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-semibold py-2 px-4 rounded-md transition duration-300"
            >
              Login
            </button>
          </div>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Didn't have an account?{' '}
          <Link
            to="/register"
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Register
          </Link>
        </p>
        <GoogleOAuthProvider clientId="1037279978173-qo3j66t1uq7d9f2ed63rf2e83i1lhrkl.apps.googleusercontent.com">
          <GoogleLogin onSuccess={handlersucess} onError={handleerror} />
        </GoogleOAuthProvider>
        ;<p className="text-red-500 mt-4 text-center">{errom}</p>
      </div>
    </div>
  );
};

export default Login;
