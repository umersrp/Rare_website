import React from 'react'
import Nav from '../Components/Navigation';
import build3 from '../asset/build3.jpg'
import singlebed from '../asset/single-bed.png'
import angle from '../asset/angle.png'
import bathroom from '../asset/bathroom.png'
import location from '../asset/location.png'
import rectangle8 from '../asset/Rectangle 8.png'
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import group726 from '../asset/Group 726.png'






function Listingtable() {
  return (
    <div className='sm:item-center'>
      <Nav />
      <div className='lg:flex lg:flex-row sm:flex-col py-0 px-[40px] gap-2 justify-center[100%] sm:gap-5 filters'>
        <div className="lg:w-1/5 sm:w-[100%] flex flex-col border border-gray-400 shadow-lg text-[12px] p-[10px] rounded-xl mb-2">
          <label htmlFor="category" className='font-bold'>PROJECT NAME</label>
          <select className='bg-gray-100'>
            <option value="all"></option>
            <option value="Category A">Category A</option>
            <option value="Category B">Category B</option>
            <option value="Category C">Category C</option>
          </select>
        </div>
        <div className="lg:w-1/5 sm:[100%] flex flex-col border border-gray-400 shadow-lg text-[12px] p-[10px]  rounded-xl mb-2">
          <label htmlFor="category" className='font-bold'>COMMUNITY NAME</label>
          <select className='bg-gray-100'>
            <option value="all"></option>
            <option value="Category A">Category A</option>
            <option value="Category B">Category B</option>
            <option value="Category C">Category C</option>
          </select>
        </div>
        <div className="lg:w-[10%] sm:[100%] flex flex-col border border-gray-400 shadow-lg text-[12px] p-[10px] rounded-xl mb-2">
          <label htmlFor="category" className='font-bold'>PRICE</label>
          <select className='bg-gray-100'>
            <option value="all"></option>
            <option value="Category A">Category A</option>
            <option value="Category B">Category B</option>
            <option value="Category C">Category C</option>
          </select>
        </div>
        <div className="lg:w-[15%] sm:[100%] flex flex-col border border-gray-400 shadow-lg text-[12px] p-[10px] rounded-xl mb-2">
          <label htmlFor="category" className='font-bold'>DATE</label>
          <select className='bg-gray-100'>
            <option value="all"></option>
            <option value="Category A">Category A</option>
            <option value="Category B">Category B</option>
            <option value="Category C">Category C</option>
          </select>
        </div>
        <div className="lg:w-[15%] sm:[100%] flex flex-col border border-gray-400 shadow-lg text-[12px] p-[10px]  rounded-xl mb-2">
          <label htmlFor="category" className='font-bold'>BED</label>
          <select className='bg-gray-100'>
            <option value="all"></option>
            <option value="Category A">Category A</option>
            <option value="Category B">Category B</option>
            <option value="Category C">Category C</option>
          </select>
        </div>
        <div className="lg:w-[15%] sm:[100%] flex flex-col border border-gray-400 shadow-lg text-[12px] p-[10px] rounded-xl mb-2">
          <label htmlFor="category" className='font-bold'>BATHS</label>
          <select className='bg-gray-100'>
            <option value="all"></option>
            <option value="Category A">Category A</option>
            <option value="Category B">Category B</option>
            <option value="Category C">Category C</option>
          </select>
        </div>
      </div>

      <div className='flex gap-2 mb-4 ml-[25px] text-[24px] p-[15px] flex-col md:flex-row'>
        <h1 className='font-bold'>Recommended</h1>
        <p className='text-gray-500'>Nearest</p>
        <p className='text-gray-500'>Popular</p>
      </div>


      <Link to='/viewproperty' className='flex flex-wrap lg:p-0 p-[30px]'>
        

        {/* Left Side */}
        <div className='mb-4 w-full sm:w-[55%] sm:mx-auto'>
          <div className='flex flex-wrap'>

            <div className="w-full sm:w-[60%] md:w-[60%] lg:w-[47%] rounded-md sm:ml-auto sm:mr-auto border border-stone-300 mb-2">
              <img src={build3} alt='' className="w-full h-[200px] p-2 rounded-2xl"  />
              <div className="px-6 py-4">
                <div className="font-bold mb-2 flex justify-between">
                  <h1 className='text-[16px]'>The Stable Apartment</h1>
                  <p className='text-lg text-gray-500 font-normal'>Id: 1234</p>
                </div>
                <div className='flex items-center gap-8 mt-[15px]'>
                  <span className='flex gap-1 text-[12px] items-center '><img src={singlebed} alt="" className="h-[12px]" /> bed</span>
                  <span className='flex gap-1 text-[12px] items-center'> <img src={bathroom} alt="" className="h-[12px]" /> bath</span>
                  <span className='flex gap-1 text-[12px] items-center'><img src={angle} alt="" className="h-[12px]" /> sqft</span>
                </div>
              </div>
              <div className="px-6 py-0">
                <span className="inline-block  px-0 py-1 text-[20px] font-semibold text-black ">
                  $2500/per day
                </span>
              </div>
              <div className="px-6 py-0 flex justify-between items-center">
                <span className="flex gap-1 px-0 py-1 text-[10px] font-semibold text-gray-400 ">
                  <img src={location} alt="" className='h-[20px]'/> Dubai Ajman City
                </span>
                <p className='text-[10px]'>Available 12-Oct-23</p>
              </div>
            </div>

            <div className="w-full sm:w-[60%] md:w-[60%] lg:w-[47%] rounded-md sm:ml-auto sm:mr-auto border border-stone-300 mb-2">
              <img src={build3} alt='' className="w-full h-[200px] p-2 rounded-2xl" />
              <div className="px-6 py-4">
                <div className="font-bold text-[16px] mb-2 flex justify-between">
                  <h1>The Stable Apartment</h1>
                  <p className='text-lg text-gray-500 font-normal'>Id: 1234</p>
                </div>
                <div className='flex items-center gap-8 mt-[15px]'>
                  <span className='flex gap-1 text-[12px] items-center '><img src={singlebed} alt="" className="h-[12px]" /> bed</span>
                  <span className='flex gap-1 text-[12px] items-center'> <img src={bathroom} alt="" className="h-[12px]" /> bath</span>
                  <span className='flex gap-1 text-[12px] items-center'><img src={angle} alt="" className="h-[12px]" /> sqft</span>
                </div>
              </div>
              <div className="px-6 py-0">
                <span className="inline-block  px-0 py-1 text-[20px] font-semibold text-black ">
                  $2500/per day
                </span>
              </div>
              <div className="px-6 py-0 flex justify-between items-center">
                <span className="flex gap-1 px-0 py-1 text-[10px] font-semibold text-gray-400 ">
                  <img src={location} alt="" className='h-[20px]' /> Dubai Ajman City
                </span>
                <p className='text-[10px]'>Available 12-Oct-23</p>
              </div>
            </div>

          </div>
        </div>

        <div id='location' className='lg:w-[44%] sm:w-[100%] sm:mx-auto flex-wrap'>
          <a target={'_blank'}>
            <img src={rectangle8} alt="" className='w-full h-[100%]' />
          </a> 
          <span className='si-distance pl-[38px]'></span>
        </div>
      </Link>


      <div className="w-[100%] col-span-3">
        <div className="borderBottom"></div>
      </div>
      <Footer />
    </div>
  )
}
export default Listingtable;
