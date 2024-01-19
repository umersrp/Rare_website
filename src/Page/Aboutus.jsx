import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

import Nav from '../Components/Navigation';
import Footer from '../Components/Footer';
import aboutimg1 from '../asset/about-img 1.png';
import checkbox from '../asset/checkbox.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faHouse, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import rectangle258 from '../asset/Rectangle 258 (1).png'
import client from '../asset/client.png'





const Aboutus = () => {
  const [activePanel, setActivePanel] = useState(null);
  const [counter, setCounter] = useState(1);

  const toggleAccordion = (index) => {
    setActivePanel((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter < 300) {
        setCounter(counter + 1);
      } else {
        clearInterval(interval); // Stop the counter when it reaches 300
      }
    }, 20); // Update the counter every 100 milliseconds (adjust this value for the desired speed)

    return () => {
      clearInterval(interval); // Cleanup the interval when the component unmounts
    };
  }, [counter]);

  // Replace this with your actual data for the accordion
  const data = [
    { title: 'Sed ut perspiciatis unde omnis ?', content: 'Content for Title 1' },
    { title: 'Sed ut perspiciatis unde omnis ?', content: 'Content for Title 2' },
    { title: 'Sed ut perspiciatis unde omnis ?', content: 'Content for Title 3' },
  ];
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

 
  return (
    <div>
      <div className='about-container mb-6'>
        <Nav />
        <div className='flex justify-center text-center lg:pr-[150px] pr-0'>
            <h1 className='text-5xl  lg:text-6xl font-bold text-white mt-12 md:mt-16 lg:mt-20 '>
            About Us</h1>
            </div>
      </div>

      <div className='flex items-center justify-center lg:justify-start lg:pl-[210px] pr-[0px]'>
        <h1 className='text-[40px] md:text-[40px] font-normal '>ABOUT US</h1>
      </div>

      <div className='flex flex-col md:flex-row justify-center gap-x-4 mb-7'>
        <div className='lg:w-1/3 md:w-1/3 mb-4 md:mb-0'>
          <div className='border border-gray-400 rounded-3xl shadow-lg lg:pt-[10px] pt-[0px] lg:h-[480px]'>
            <img src={aboutimg1} alt="" className='lg:w-[95%] lg:h-[510px] shadow-lg object-cover rounded-3xl ' />
          </div>
        </div>
        <div className='lg:w-1/3 md:w-2/3'>
          <h1 className='lg:text-[40px] text-[30px] font-normal mb-2 lg:p-[0px] p-[10px]'>Who we are</h1>
          <div className='w-full md:max-w-[642px] leading-6 mb-4 lg:p-[0px] p-[10px]'>
            <span className='text-sm font-normal textt'>
              Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis
              est eligendi optio cumque nihil impedit.
            </span><br />
            <span className='text-sm font-normal textt leading-normal'>
              Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium,
              totam rem aperiam, eaque ipsa quae.
            </span>
          </div>
          <div className='lg:p-[0px] p-[10px]'>
            {data.map((item, index) => (
              <div key={index} className='mb-5'>
                <div className='flex items-center mb-5 border border-gray-300 p-[15px] rounded-xl'>
                  <FontAwesomeIcon icon={faCheckSquare} size='2x' style={{ color: "#02060d" }} className='items-center' />
                  <button className={`accordion ${activePanel === index ? 'active' : 'font-semibold'}`} >
                    {item.title}
                  </button>
                  <FontAwesomeIcon icon={faAngleDown} className='cursor-pointer' onClick={() => toggleAccordion(index)} />
                </div>
                <div className={`panel ${activePanel === index ? 'show' : ''}`}>
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between countar bg-black gap-4 md:gap-8 mb-6">
        <div className="bg-white text-black rounded-lg shadow-md p-4 m-4 text-center w-[90%] md:w-1/2 lg:w-1/4">
          <FontAwesomeIcon icon={faCrown} size='2x' style={{ color: "#95895d" }} />
          <div className="text-[38px] mt-2 font-semibold">10.7k</div>
          <div className="mt-2 font-semibold">Premium Property</div>
        </div>

        <div className="bg-white text-black rounded-lg shadow-md p-4 m-4 text-center w-[90%] md:w-1/2 lg:w-1/4">
          <FontAwesomeIcon icon={faFaceSmile} size='2x' style={{ color: "#95895d" }} />
          <div className="text-[38px] mt-2 font-semibold">{counter}+</div>
          <div className="mt-2 font-semibold">Happy Customer</div>
        </div>

        <div className="bg-white text-black rounded-lg shadow-md p-4 m-4 text-center w-[90%] md:w-1/2 lg:w-1/4">
          <FontAwesomeIcon icon={faTrophy} size='2x' style={{ color: "#95895d" }} />
          <div className="text-[38px] mt-2 font-semibold">300</div>
          <div className="mt-2 font-semibold">Award Wining</div>
        </div>

        <div className="bg-white text-black rounded-lg shadow-md p-4 m-4 text-center w-[90%] md:w-1/2 lg:w-1/4">
          <FontAwesomeIcon icon={faHouse} size='2x' style={{ color: "#95895d" }} />
          <div className="text-[38px] mt-2 font-semibold">7</div>
          <div className="mt-2 font-semibold ">Year Experience</div>
        </div>
      </div>
      <div className='w-full'>
        <iframe
          width='100%'
          height="315"
          src="https://www.youtube.com/embed/TlMUknHQYLU?"
          title="YouTube video player"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <div className='flex justify-center background p-[30px] mb-6'>
        <div className='w-full md:w-1/2 text-center'>
          <h1 className='lg:text-[40px] text-[30px] font-bold text-white'>Find Best Place For Living</h1>
          <span className='text-white text-[16px] items-center block md:inline'>Find Best Place For Living</span>
        </div>
        <div className='w-full md:w-1/2 flex justify-center '>
          <button className='bg-white h-[50px] md:w-[120px] p-[10px] font-bold text-[12px] text-center rounded-lg border-color flex items-center justify-center'>GET IN TOUCH </button>
        </div>
      </div>
      <div className='p-[15px]'>
        <h1 className='text-[40px] font-bold'>What Our Client Says</h1>
      </div>
      <div className='flex flex-wrap justify-around mb-6'>
        <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
          <div className="w-80 mx-auto bg-black shadow-lg rounded-lg overflow-hidden">
            <img src={client} alt="" />
            <div className="px-4 py-2">
              <h3 className="text-[14px] text-white">Aenean vulputate eleifend tellus. Aenean leo ligula,
                porttitor eu, consequat vitae, eleifend ac, enim.
                Aliquam lorem ante, dapibus in, viverra quis.</h3>
              <div className="w-full col-span-3">
                <div className="borderBottom"></div>
              </div>
              <p className="text-white mt-2">Derrick P. Boudreaux</p>
              <p className="text-gray-400 mt-2">Web Developer</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
          <div className="w-80 mx-auto bg-black shadow-lg rounded-lg overflow-hidden">
            <img src={client} alt="" />
            <div className="px-4 py-2">
              <h3 className="text-[14px] text-white">Aenean vulputate eleifend tellus. Aenean leo ligula,
                porttitor eu, consequat vitae, eleifend ac, enim.
                Aliquam lorem ante, dapibus in, viverra quis.</h3>
              <div className="w-full col-span-3">
                <div className="borderBottom"></div>
              </div>
              <p className="text-white mt-2">Derrick P. Boudreaux</p>
              <p className="text-gray-400 mt-2">Web Developer</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
          <div className="w-80 mx-auto bg-black shadow-lg rounded-lg overflow-hidden">
            <img src={client} alt="" />
            <div className="px-4 py-2">
              <h3 className="text-[14px] text-white">Aenean vulputate eleifend tellus. Aenean leo ligula,
                porttitor eu, consequat vitae, eleifend ac, enim.
                Aliquam lorem ante, dapibus in, viverra quis.</h3>
              <div className="w-full col-span-3">
                <div className="borderBottom"></div>
              </div>
              <p className="text-white mt-2">Derrick P. Boudreaux</p>
              <p className="text-gray-400 mt-2">Web Developer</p>
            </div>
          </div>
        </div>

        {/* Repeat the above block for each client testimonial */}
      </div>

      <div className="w-full col-span-3">
        <div className="borderBottom"></div>
      </div>

      <Footer />
    </div>
  );
};

export default Aboutus;
