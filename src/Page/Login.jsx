import React, { useState } from 'react'
import shape from '../asset/shape (2).png'
import img from '../asset/img.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import google from '../asset/google.png'
import facebok from '../asset/facebok.png'
import { Link } from 'react-router-dom';
import holidayhomes from '../asset/holiday-homes-logo.png';




function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Add your login logic here (e.g., send data to server)
      console.log('Username:', username);
      console.log('Password:', password);
      // You can replace the console.log with your actual login logic
    };
    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
      };
    
  return (
    <div className='flex flex-col md:flex-row'>
    <div className='w-full md:w-1/2 relative'>
      <div>
        <img src={shape} alt="" className='background absolute w-full h-full object-cover' />
      </div>
      <div className='flex justify-center relative px-8 pt-6 pb-8 mb-4'>
        <img src={img} alt="" className='w-[50%]' />
      </div>
      <div className='relative flex justify-center text-center'>
        <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-white max-w-[535px]'>Find Your Perfect Place With RARE</h1>
      </div>
    </div>
    <div className='w-full md:w-1/2'>
      <div className='flex items-center justify-center h-screen'>
        <div className='bg-white rounded px-8 lg:pt-6 sm:pt-64 pt-0 pb-8 mb-4 w-full md:w-96'>
        <div className="flex justify-center items-center">
  <Link to="/">
    <img src={holidayhomes} alt="" className="lg:w-[127px] w-[120px]" />
  </Link>
</div>
          <h1 className='text-2xl mb-6 text-center font-bold'>Welcome to RARE</h1>
          <p className='text-center text-sm md:text-base mb-5'>Welcome back! login with your data that you entered during registration.</p>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label className='block text-black text-sm font-bold mb-2' htmlFor='username'>
                Email Address
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='username'
                type='text'
                placeholder='Username'
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>
            <div className='mb-6'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                Password
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='password'
                type='password'
                placeholder='Password'
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className='mb-4 flex items-center justify-between'>
              <label className='block text-sm md:text-base text-black font-bold' htmlFor='rememberMe'>
                <input
                  type='checkbox'
                  id='rememberMe'
                  className='mr-1 leading-tight textt'
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                Remember me
              </label>
              <a href='#' className='textt text-sm md:text-base hover:underline'>
                Forgot your password?
              </a>
            </div>
            <div className='flex items-center justify-center mb-5'>
              <button
                className='background hover:bg-zinc-800 text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Login
              </button>
            </div>
            <div className='flex gap-2 justify-center'>
              <div className='mb-4'>
                <button
                  className='bg-transparent hover:bg-gray-400 lg:text-[11px] text-[10px]  lg:gap-x-1 gap-x-[8px] text-black font-bold lg:p-[10px] p-[10px] border border-gray-300 rounded-2xl focus:outline-none focus:shadow-outline flex items-center'
                  type='button'
                >
                  <img src={facebok} alt='' className='lg:w-[20px] md:w-[18px]' />
                  Login with Facebook
                </button>
              </div>
              <div className='mb-6'>
                <button
                  className='bg-transparent hover:bg-gray-400 text-black lg:text-[11px] text-[10px]  lg:gap-x-1 gap-x-[8px] font-bold lg:p-[10px] p-[10px] border rounded-2xl focus:outline-none focus:shadow-outline flex items-center border-gray-300'
                  type='button'
                >
                  <img src={google} alt='' className='lg:w-[20px] md:w-[18px]' />
                  Login with Google
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login