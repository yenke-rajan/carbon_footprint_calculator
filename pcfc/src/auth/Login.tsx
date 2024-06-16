import React, { useState, useContext, ChangeEvent, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import axios from 'axios';

const LoginPage: React.FC = () => {
  const { setIsAuthenticated } = useContext(AuthContext)!;
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'email') {
      setEmail(event.target.value);
    } else if (event.target.name === 'password') {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    console.log("hello")
    e.preventDefault();

    try {
      const response = await axios.create({ credentials: 'include', withCredentials: true }).post('http://localhost:5000/auth/login', {
        email,
        password,
      });

      console.log(response.headers);

      const { token, user } = response.data;
      console.log(response.data);

      localStorage.setItem('token', token);
      localStorage.setItem('_id', user._id);

      setIsAuthenticated(true);
      navigate('/');
    } catch (error) {
      console.error('Login error:', (error as Error).message);
      navigate('/')
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Log In</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <span className="text-sm">Don't have an account? </span>
          <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
