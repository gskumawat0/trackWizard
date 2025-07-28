import React, { useContext, useState } from 'react';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { Maincontext } from './Pages/Context';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
const Register = () => {
  // const [errorMessage, setErrorMessage] = useState('');

  const { userHandler } = useContext(Maincontext);
  const nevigate = useNavigate();

  const [email, Setemail] = useState('');
  const [password, Setpassword] = useState('');
  const [name, setname] = useState('');

  const registerHandler = (e) => {
    e.preventDefault();
    // const email = e.target.email.value;
    // const password = e.target.password.value;

    // const auth = getAuth();
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed up
    //     const user = userCredential.user;
    //     userHandler(user.toJSON());
    //     nevigate('/', { state: { name } });
    //     // ...
    //   })

    //   .catch((error) => {
    //     if (error.code === 'auth/email-already-in-use') {
    //       setErrorMessage('This email is already registered.');
    //     } else if (error.code === 'auth/weak-password') {
    //       setErrorMessage('Password should be at least 6 characters.');
    //     } else {
    //       setErrorMessage('Registration failed: ' + error.message);
    //     }
    //   });
  };
  const handlersucess = (credentialResponse) => {
    console.log('handlersucess h', credentialResponse);
    const decode = jwtDecode(credentialResponse?.credential);
    const userData = {
      name: decode.name,
      email: decode.email,
    };

    userHandler(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    console.log(decode);
    console.log(userData);
    nevigate('/');
  };

  const handleerror = () => {
    console.log('google error');
  };

  async function login() {
    console.log(email, password);
    let item = { email, password, name };
    let result = await fetch(
      'https://trackme-api.onrender.com/api/v1/auth/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
        body: JSON.stringify(item),
      },
    );
    const resulta = await result.json();
    userHandler(resulta.data.user);
    // const userName = resulta.data.user.name;
    // console.log(resulta.data.user.name);
    // console.log(userName);

    nevigate('/', { state: { name: resulta.data.user.name } });
  }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Create Account
        </h2>
        <form onSubmit={registerHandler} className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              onChange={(e) => setname(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
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
              onChange={(e) => Setemail(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
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
              onChange={(e) => Setpassword(e.target.value)}
              name="password"
              required
              className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
            >
              Register
            </button>
          </div>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Log in
          </a>
        </p>
        <GoogleOAuthProvider clientId="1037279978173-r5puq66g5eieqp9s7im21jfjnkm9r4s6.apps.googleusercontent.com">
          <GoogleLogin onSuccess={handlersucess} onError={handleerror} />
        </GoogleOAuthProvider>
        {/* ;<div className="text-red-500 mt-4 text-center">{errorMessage}</div> */}
        <button
          onClick={login}
          className="w-full p-2 bg-blue-600 text-white cursor-pointer    "
        >
          console.log //{' '}
        </button>
      </div>
    </div>
  );
};

export default Register;
