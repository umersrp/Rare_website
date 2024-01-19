import React from 'react';
import Nav from '../Components/Navigation';
import group1629 from '../asset/Group 1629.png'
import group1632 from '../asset/Group 1632.png'
import build3 from '../asset/build3.jpg'
import location from '../asset/location.png'
import Footer from '../Components/Footer';




function Ownerview() {
  return (
    <div>
      <div className='owner-container'>
        <Nav />
        <div className='flex lg:justify-end p-[10px] md:p-[10px]'>
        
          <div className="lg:w-[30%] md:w-[100%] lg:justify-start md:justify-center p-9 md:p-[18px]  bg-white border border-black rounded-3xl">
  <h1 className='lg:text-[30px] md:text-[24px] '>Find out if your property meets our criteria</h1>
  <form className='flex flex-col w-full sm:w-[100%] '>
    <div className="mb-4 flex items-center "> 
      <input type="text" id="name" name="name" placeholder='Name' className="textt w-full border border-stone-400 rounded-3xl lg:py-[10px] md:py-0 px-3 lg:text-[20px] md:text-[10px]" />
    </div>

    <div className="mb-4 flex items-center"> 
      <input type="email" id="email" name="email" placeholder='Email' className="textt w-full border border-stone-400 rounded-3xl lg:py-[10px] md:py-0 px-3 lg:text-[20px] md:text-[10px]" />
    </div>
    
    <div className="mb-4 flex items-center"> 
      <input type="email" id="phone" name="phone" placeholder='Phone' className="textt w-full border border-stone-400 rounded-3xl lg:py-[10px] md:py-0 px-3 lg:text-[20px] md:text-[10px]" />
    </div>
    
    <div className="mb-4 flex items-center"> 
      <input type="text" id="agent" name="agent" placeholder='Referral Agent' className="textt w-full border border-stone-400 rounded-3xl lg:py-[10px] md:py-0 px-3 lg:text-[20px] md:text-[10px]" />
    </div>
    
    <h1 className='lg:text-[30px] text-[20px] md:text-[24px]'>Property Details</h1>
    
    <div className="mb-4 flex items-center"> 
      <input type="text" id="city" name="city" placeholder='City' className="textt w-full border border-stone-400 rounded-3xl lg:py-[10px] md:py-0 px-3 lg:text-[20px] md:text-[10px]" />
    </div>
    
    <div className="mb-4 flex items-center"> 
    <input type="text" id="area" name="area" placeholder='Area' className="textt w-full border border-stone-400 rounded-3xl lg:py-[10px] md:py-0 px-3 lg:text-[20px] md:text-[10px]" />
    </div>
    
    <div className="mb-4 flex items-center"> 
      <input type="text" id="bedrooms" name="bedrooms" placeholder='No of Bedrooms' className="textt w-full border border-stone-400 rounded-3xl lg:py-[10px] md:py-0 px-3 lg:text-[20px] md:text-[10px]" />
    </div>
    
    <button type="submit" className="button-x hover:bg-blue-700 text-white font-bold py-5 px-4 rounded-xl">
      Submit
    </button>
  </form>
</div>


        </div>
      </div>
      <div className='w-full'>
  <div className="lg:py-16 py-44 px-6 w-full md:w-[50%]">
    <div className='flex flex-col py-4 lg:pt-0 sm:pt-[11rem]  pt-[0rem] mb-4'>
      <h1 className='text-[2rem] font-bold text-center md:text-left'>Owner App</h1>
      <p className='lg:text-[24px] md:text-[18px] font-normal text-center md:text-left'>
        Embark on your Rare adventure and access your property statistics while on the move.
      </p>
    </div>
    <div className='text-center md:text-left'>
      <button className="button-x mt-4 md:mt-0 text-white px-[10px] py-[10px] md:px-[30px] md:py-[25px] rounded-xl lg:text-[18px] md:text-2xl font-semibold transition-transform transform hover:scale-105 hover:bg-yellow-800">
        Get started
      </button>
    </div>
  </div>

 
</div>

<div className='mb-4 p-5 md:px-16'>
  <div className='flex items-center lg:p-[40px]'>
    <img src={group1629} alt="" className='w-full' />
  </div>
</div>

     <div className='flex flex-col items-center justify-center'>
  <div className='mb-6'>
    <h1 className='text-[24px] font-bold text-center md:text-left'>Convert your property investment into a profitable holiday</h1>
  </div>
  <div className='mb-6 flex justify-center'>
    <div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  </div>
</div>

      <div className='flex flex-col items-center'>
        <div className='mb-6'> 
            <h1 className='text-[14px] flex justify-center font-bold lg:text-center text-center '>Here’s just a few of the properties that we’ve designed,furnished & rented through our leasing partnerships
        </h1>
        </div>
        <div className='lg:flex md:flex flex-wrap justify-center gap-x-3'>
    <div className="lg:w-[20%] sm:w-[50%] md:w-[20%] ml-[0px] h-[20%] md:ml-0 mb-4 border border-stone-300">
      <img src={build3} alt='' className="w-full h-[200px] p-2" />
      <div className="px-6 py-4">
        <div className="font-bold text-[14px] mb-2 flex justify-between">
            <h1>The stable Apartment</h1>
            <p className='text-base text-gray-500 font-normal'>Id:1234</p>
        </div>
        
      </div>
      
      <div className="px-6 py-4 flex justify-between">
        <span className=" flex gap-1 px-3 py-1 text-sm font-semibold text-gray-400 "><img src={location} alt="" className='h-[20px]' />Dubai ajman city
          
        </span>
        
        
      </div>
    </div>
    <div className="lg:w-[20%] sm:w-[50%] md:w-[20%] ml-[0px] h-[20%] mb-4 border border-stone-300">
      <img src={build3} alt='' className="w-full h-[200px] p-2" />
      <div className="px-6 py-4">
        <div className="font-bold text-[14px] mb-2 flex justify-between">
            <h1>The stable Apartment</h1>
            <p className='text-base text-gray-500 font-normal'>Id:1234</p>
        </div>
        
      </div>
      
      <div className="px-6 py-4 flex justify-between">
        <span className=" flex gap-1 px-3 py-1 text-sm font-semibold text-gray-400 "><img src={location} alt="" className='h-[20px]'/>Dubai ajman city
          
        </span>
        
        
      </div>
    </div>
    <div className="lg:w-[20%] sm:w-[50%] md:w-[20%] ml-[0px] h-[20%] mb-4 border border-stone-300">
      <img src={build3} alt='' className="w-full h-[200px] p-2" />
      <div className="px-6 py-4">
        <div className="font-bold text-[14px] mb-2 flex justify-between">
            <h1>The stable Apartment</h1>
            <p className='text-base text-gray-500 font-normal'>Id:1234</p>
        </div>
        
      </div>
      
      <div className="px-6 py-4 flex justify-between">
        <span className=" flex gap-1 px-3 py-1 text-sm font-semibold text-gray-400 "><img src={location} alt="" className='h-[20px]' />Dubai ajman city
          
        </span>
        
        
      </div>
    </div>
    <div className="lg:w-[20%] sm:w-[50%] md:w-[20%] ml-[0px] mb-4 border border-stone-300">
      <img src={build3} alt='' className="w-full h-[200px] p-2" />
      <div className="px-6 py-4">
        <div className="font-bold text-[14px] mb-2 flex justify-between">
            <h1>The stable Apartment</h1>
            <p className='text-base text-gray-500 font-normal'>Id:1234</p>
        </div>
        
      </div>
      
      <div className="px-6 py-4 flex justify-between">
        <span className=" flex gap-1 px-3 py-1 text-sm font-semibold text-gray-400 "><img src={location} alt="" className='h-[20px]' />Dubai ajman city
          
        </span>
        
        
      </div>
    </div>

        </div>

      </div>
      <div className="w-[100%] col-span-3">
                                    <div className="borderBottom"></div>
                                </div>
      <Footer/>
    </div>
  );
}

export default Ownerview;
