import React from 'react'
import Nav from '../Components/Navigation';
import Footer from '../Components/Footer';
import rectangle8 from '../asset/Rectangle 8.png'
import phone from '../asset/phone.png'
import message from '../asset/message.png'
import maplocation from '../asset/map-location.png'

 function Contactus() {
  return (
    <div>
       <div className='contact-container'>
  <Nav />
  <div className='flex justify-center mb-8 lg:pr-[150px] pr-0'>
    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-12 md:mt-16 lg:mt-20 '>
      Contact Us
    </h1>
  </div>
</div>

<div className='flex flex-col justify-center items-center mb-5 p-4 md:p-8 lg:p-12'>
  <h1 className='text-xl md:text-2xl lg:text-3xl font-bold textt '>Contact us</h1>
  <p className='text-sm md:text-base lg:text-lg font-semibold'>
    We’re open for any suggestion or just to have a chat
  </p>
</div>

<div className='flex flex-col md:flex-row justify-center mb-7 gap-x-2'>
  <div className='lg:w-1/3 md:w-2/3'>
    {/* Left section content */}
    <form className='form p-4 md:p-[15px] lg:p-[10px] border border-color  md:h-[auto] lg:h-[600px] rounded-2xl'>
      <h1 className='text-lg md:text-xl lg:text-2xl font-bold mb-4'>Contact Us</h1>
            <div>
            <label className='textt font-bold' htmlFor="">Full Name</label>
            <input
              type='text'
              name='name'
        
            
              placeholder='Your Name'
              className='input-fild mb-2 p-2 w-[417px] border-color rounded-lg'
            />
            </div>
            <div className='flex flex-col'>
                <label className='textt font-bold' htmlFor="">Email</label>
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              className='input-fild mb-2 p-2 w-[417px] border-color rounded-lg'
            />
            </div>
             <div>
                <label className='textt font-bold' htmlFor="">Phone no</label>
            <input
              type='tel'
              name='phoneNumber'
              placeholder='Your Phone Number'
              className='input-fild mb-2 p-2 w-[417px] border-color rounded-lg'
            />
            </div>
             <div>
                <label className='textt font-bold' htmlFor="">Your message</label>
            <textarea
              name='message'
              placeholder='Your Message'
              className='input-fild mb-2 p-2 w-[417px] border-color rounded-lg'
            ></textarea>
            </div>
            <div className='flex justify-center '>
            <button type='submit' className=' text-gray-600 border border-gray-500 py-2 px-8 rounded-lg'>Send Message
            </button></div>
          </form>
          </div>
          <div className='lg:w-[50%] md:w-full'>
          {/* Right section content */}
        <div className='w-[100%]'>
            <img src={rectangle8} alt="" className='w-full h-[600px]'/>
        </div>
        </div>
        </div>
        <div className='flex flex-col md:flex-row justify-around items-center'>
  <div className='flex flex-col justify-center items-center mb-4 md:mb-0'>
    <img src={maplocation} alt='' className='w-8 mb-2 md:w-10 lg:w-12 lg:mb-4' />
    <span className='text-sm md:text-base lg:text-lg font-bold w-40 md:w-[160px]'>
      198 West 21th Street, Suite 721 New York NY 10016
    </span>
  </div>
  <div className='flex flex-col justify-center items-center mb-4 md:mb-0'>
    <img src={message} alt='' className='w-8 mb-2 md:w-10 lg:w-12 lg:mb-4' />
    <span className='text-sm md:text-base lg:text-lg font-bold'>info@gmail.com</span>
  </div>
  <div className='flex flex-col justify-center items-center'>
    <img src={phone} alt='' className='w-8 mb-2 md:w-10 lg:w-12 lg:mb-4' />
    <span className='text-sm md:text-base lg:text-lg font-bold'>+921444899</span>
  </div>
</div>

<div className='w-full col-span-3'>
  <div className='border-b'></div>
</div>

<Footer/>
    </div>
  )
}
export default Contactus;