import React from 'react'
import Nav from '../Components/Navigation';
import Footer from '../Components/Footer';
import profilo from '../asset/profilo.png'

 function OurAgent() {
  return (
    <div>
        <div className='agent-container'>
            <Nav/>
            <div className='flex justify-center text-center lg:pr-[150px] pr-0'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-12 md:mt-16 lg:mt-20 '>
            Our Agent</h1>
            </div>

        </div>
        <div className='flex flex-wrap justify-center gap-x-6 gap-y-6 p-4 lg:gap-x-12 lg:p-12'>
  <div className="w-full max-w-xs sm:w-1/2 md:w-1/3 lg:w-1/4 rounded overflow-hidden shadow-lg border-card">
    <div className='p-4'>
      <img src={profilo} alt='' className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">joseph</div>
        <p className="text-gray-700 text-base">Creative Designer</p>
        <p className="text-gray-700 text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ab, beatae. </p>
      </div>
    </div>
  </div>

  <div className="w-full max-w-xs sm:w-1/2 md:w-1/3 lg:w-1/4 rounded overflow-hidden shadow-lg border-card">
    <div className='p-4'>
      <img src={profilo} alt='' className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">joseph</div>
        <p className="text-gray-700 text-base">Creative Designer</p>
        <p className="text-gray-700 text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ab, beatae. </p>
      </div>
    </div>
  </div>

  <div className="w-full max-w-xs sm:w-1/2 md:w-1/3 lg:w-1/4 rounded overflow-hidden shadow-lg border-card">
    <div className='p-4'>
      <img src={profilo} alt='' className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">joseph</div>
        <p className="text-gray-700 text-base">Creative Designer</p>
        <p className="text-gray-700 text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ab, beatae. </p>
      </div>
    </div>
  </div>
</div>

<div className='flex flex-wrap justify-center gap-x-6 gap-y-6 p-4 lg:gap-x-12 lg:p-12'>
  <div className="w-full max-w-xs sm:w-1/2 md:w-1/3 lg:w-1/4 rounded overflow-hidden shadow-lg border-card">
    <div className='p-4'>
      <img src={profilo} alt='' className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">joseph</div>
        <p className="text-gray-700 text-base">Creative Designer</p>
        <p className="text-gray-700 text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ab, beatae. </p>
      </div>
    </div>
  </div>

  <div className="w-full max-w-xs sm:w-1/2 md:w-1/3 lg:w-1/4 rounded overflow-hidden shadow-lg border-card">
    <div className='p-4'>
      <img src={profilo} alt='' className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">joseph</div>
        <p className="text-gray-700 text-base">Creative Designer</p>
        <p className="text-gray-700 text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ab, beatae. </p>
      </div>
    </div>
  </div>

  <div className="w-full max-w-xs sm:w-1/2 md:w-1/3 lg:w-1/4 rounded overflow-hidden shadow-lg border-card">
    <div className='p-4'>
      <img src={profilo} alt='' className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">joseph</div>
        <p className="text-gray-700 text-base">Creative Designer</p>
        <p className="text-gray-700 text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ab, beatae. </p>
      </div>
    </div>
  </div>
</div>
<div className="w-[100%] col-span-3">
        <div className="borderBottom"></div>
      </div>

        <Footer/>
    </div>
  )
}
export default OurAgent;