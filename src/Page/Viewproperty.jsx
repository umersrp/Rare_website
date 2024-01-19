import React, { useState,useEffect } from 'react';
import Nav from '../Components/Navigation';
import property1 from '../asset/property1.png'
import property2 from '../asset/property2.png'
import property3 from '../asset/property3.png'
import property4 from '../asset/property4.png'
import property5 from '../asset/property5.png'
import saveinstagram from '../asset/save-instagram.png'
import share1 from '../asset/share (1).png'
import location from '../asset/location.png'
import stair from '../asset/stair.png'
import leave from '../asset/leave.png'
import rest from '../asset/rest.png'
import dinner from '../asset/dinner.png'
import wine from '../asset/wine.png'
import fit from '../asset/fit.png'
import client from '../asset/client.png'
import { DateRangePicker, Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import rectangle8 from '../asset/Rectangle 8.png'
import build3 from '../asset/build3.jpg'
import singlebed from '../asset/single-bed.png'
import angle from '../asset/angle.png'
import bathroom from '../asset/bathroom.png'
import Footer from '../Components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
     <div className="image-slider">
      <div className='relative'>
        <button className="slider-btn left" onClick={prevSlide}>{'<'}</button>
        <img src={images[currentIndex]} alt={`Property Image ${currentIndex + 1}`} className="slider-image w-[625px]" />
        <button className="slider-btn right" onClick={nextSlide}>{'>'}</button>
       
      </div>
    </div>
  );
};





function Viewproperty() {

 

  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  const handleSelect = (ranges) => {
    // setSelectionRange(ranges.selection);
    console.log(ranges, "Ranges");
  };
  const [isModalOpen, setModalOpen] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const propertyImages = [property2, property5, property3, property4];

  return (
    <div>
      <Nav />
      <div class='flex flex-col lg:flex-row lg:justify-between justify-center lg:items-start items-center'>
      <div className='lg:p-[30px] p-[16px] lg:items-start items-center '>
      <h1 className='lg:text-[34px] text-[24px]'>Lorem ipsm Premier</h1>
    <p class='text-lg md:text-xl textt flex items-center'>
      <img src={location} alt='' class='mr-2' /> Dubai, Ajman City
    </p>
  </div>
  <div class='flex lg:justify-normal justify-center gap-2 p-[30px]'>
    <div class='flex flex-col items-center p-2 mb-2 md:mb-0'>
      <img
        src={saveinstagram}
        alt=''
        class='border border-black rounded-md p-2 w-8 h-8 lg:w-10 lg:h-10 mb-2 transition-transform transform hover:scale-105 hover:bg-gray-400'
      />
    </div>
    <div class='flex flex-col items-center p-2 mb-2 md:mb-0'>
      <img
        src={share1}
        alt=''
        class='border border-black rounded-md p-2 w-8 h-8 lg:w-10 lg:h-10 mb-2 transition-transform transform hover:scale-105 hover:bg-gray-400'
      />
    </div>
  </div>
</div>

<div className="flex flex-col lg:flex-row items-center gap-2 lg:p-[30px] p-4 relative">
<div className="flex flex-wrap flex-row justify-between w-[51%]">
        <div className="flex gap-y-4">
          <img
            src={property1}
            alt="Large Property Image"
            className="lg:w-[835px] w-full lg:h-[545px] h-auto lg:rounded-none rounded-2xl"
                    onClick={() => openModal(0)}
          />
        </div>
      </div>

      <div className="flex flex-wrap flex-row justify-between w-[49%]">
        <div className='small-img flex-wrap'>
          {propertyImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Small Property Image ${index + 2}`}
              className={`lg:w-[49.5%] w-full lg:h-[265px] h-auto lg:mb-2 mb-2 lg:rounded-none rounded-2xl cursor-pointer`}
              onClick={() => openModal(index + 1)}
            />
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn right-2" onClick={closeModal}><FontAwesomeIcon icon={faTimes} /></span>
            <ImageSlider
              images={[property1, ...propertyImages]}
              currentIndex={currentIndex}
              onPrev={() => setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0))}
              onNext={() => setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, propertyImages.length))}
            />
          </div>
        </div>
      )}
    </div>
      <div className='p-4 lg:p-[30px]'>
  <div className='flex flex-col md:flex-row gap-7'>
    <div className="flex flex-col border-b md:border-b-0 border-black md:border-r-2 md:pr-2 mb-2 md:mb-0 hover:underline cursor-pointer">
      <span className="font-semibold text-[14px] ">Floor plan</span>
    </div>
    <div className="flex flex-col border-b md:border-b-0 border-black md:border-r-2 md:pr-2 mb-2 md:mb-0 hover:underline cursor-pointer">
      <span className="font-semibold text-[14px] ">Map street</span>
    </div>
    <div className="flex flex-col md:pr-2 mb-2 md:mb-0 hover:underline cursor-pointer">
      <span className="font-semibold text-[14px] ">Street view</span>
    </div>
  </div>
  <div className="w-full md:col-span-3 items-center mt-4 md:mt-0">
    <div className="borderBottom"></div>
  </div>
</div>

<div className='flex flex-col p-4 lg:flex-row lg:justify-end'>
  <div className='w-full'>
    <div className="px-6 w-full">
      <div className='flex flex-col py-4 mb-4'>
        <h1 className='text-2xl font-bold text-center lg:text-left'>Overview</h1>
              <p className='lg:text-[14px] md:text-[18px] font-medium text-center md:text-left'>

                lorem is coveted for offering a luxury lifestyle, sunny climate, and a plethora of international business opportunities. Hosting expats from all corners of the world, as well as movers and shakers in the Gulf region, life in loremi is often described as boundless and living that feels non-stop vacation. Whether you’re relocating to loremi for a temporary work assignment omulti-year contract, you get to look forward to all the lorem has to offer -- e.g., world-class shopping, sandy stretches of beach, waterside havens, skyline residences, killer views, and the most beautiful move-in ready apartments in lorem i courtesy of rare
                Furnished apartment rentals in loremi. Moving to loremi starts with spotting the ideal place to stay. Lucky for you, Blueground is the perfect partner in hospitality offering everything from studio apartments to three-bedroom homes in the best towers around Dulorem -- all easily searchable with our seamless, online booking process. From flexible stay apartments in lorem to monthly apartment rentals in Downtown loremi, simply filter and sort by dates, must have amenities and price through our user-friendly search site. Our properties are sanitized to the highest standard before every new check-in, while we offer contactless support with the guest’s safety in mind always.      </p>
            </div>

          </div>
          <div className="text-start p-8 lg:flex flex-col">
  <h2 className="text-2xl font-bold mb-4 p-[6px]">Amenities</h2>
  <div className="flex flex-col lg:flex-row lg:gap-x-14 items-start">
    <div className="flex items-start mb-2 md:mb-0">
      <div className="flex flex-col items-center p-2">
        <img
          src={stair}
          alt=""
          className="border border-black rounded-md p-2 lg:w-8 md:w-8 mb-2 transition-transform transform hover:scale-105 hover:bg-gray-400"
        />
      </div>
      <p className="mt-2">Outdoor pool</p>
    </div>
    <div className="flex items-start mb-2 md:mb-0">
      <div className="flex flex-col items-center p-2">
        <img
          src={fit}
          alt=""
          className="border border-black rounded-md p-2 lg:w-8 md:w-8 mb-2 transition-transform transform hover:scale-105 hover:bg-gray-400"
        />
      </div>
      <p className="mt-2">Fitness center</p>
    </div>
  </div>
  <div className="flex flex-col lg:flex-row lg:gap-x-14 items-start">
    <div className="flex items-start mb-2 md:mb-0">
      <div className="flex flex-col items-center p-2">
        <img
          src={stair}
          alt=""
          className="border border-black rounded-md p-2 lg:w-8 md:w-8 mb-2 transition-transform transform hover:scale-105 hover:bg-gray-400"
        />
      </div>
      <p className="mt-2">Outdoor pool</p>
    </div>
    <div className="flex items-start mb-2 md:mb-0">
      <div className="flex flex-col items-center p-2">
        <img
          src={wine}
          alt=""
          className="border border-black rounded-md p-2 lg:w-8 md:w-8 mb-2 transition-transform transform hover:scale-105 hover:bg-gray-400"
        />
      </div>
      <p className="mt-2">Bar/Lounge</p>
    </div>
  </div>
  <div className="flex flex-col items-start">
    <div className="flex items-start mb-2 md:mb-0">
      <div className="flex flex-col items-center p-2">
        <img
          src={leave}
          alt=""
          className="border border-black rounded-md p-2 lg:w-8 md:w-8 mb-2 transition-transform transform hover:scale-105 hover:bg-gray-400"
        />
      </div>
      <p className="mt-2">Spa and wellness</p>
    </div>
  </div>
  <div className="flex flex-col items-start">
    <div className="flex items-start mb-2 md:mb-0">
      <div className="flex flex-col items-center p-2">
        <img
          src={rest}
          alt=""
          className="border border-black rounded-md p-2 lg:w-8 md:w-8 mb-2 transition-transform transform hover:scale-105 hover:bg-gray-400"
        />
      </div>
      <p className="mt-2">Restaurant</p>
    </div>
  </div>
  <div className="flex flex-col items-start">
    <div className="flex items-start mb-2 md:mb-0">
      <div className="flex flex-col items-center p-2">
        <img
          src={dinner}
          alt=""
          className="border border-black rounded-md p-2 lg:w-8 md:w-8 mb-2 transition-transform transform hover:scale-105 hover:bg-gray-400"
        />
      </div>
      <p className="mt-2">Room service</p>
    </div>
  </div>
</div>

<div className="text-start p-8 lg:flex flex-col">
  <h2 className="text-2xl font-bold mb-4 p-[6px]">Property detail</h2>
  <div className="flex flex-col lg:flex-row lg:gap-x-14 items-start">
    <div className="flex items-start mb-2 md:mb-0">
      <div className="flex flex-col items-center p-2">
        <img
          src={stair}
          alt=""
          className="border border-black rounded-md p-2 lg:w-8 md:w-8 mb-2 transition-transform transform hover:scale-105 hover:bg-gray-400"
        />
      </div>
      <p className="mt-2">Outdoor pool</p>
    </div>
    <div className="flex items-start mb-2 md:mb-0">
      <div className="flex flex-col items-center p-2">
        <img
          src={fit}
          alt=""
          className="border border-black rounded-md p-2 lg:w-8 md:w-8 mb-2 transition-transform transform hover:scale-105 hover:bg-gray-400"
        />
      </div>
      <p className="mt-2">Fitness center</p>
    </div>
  </div>
  <div className="flex flex-col lg:flex-row lg:gap-x-14 items-start">
    <div className="flex items-start mb-2 md:mb-0">
      <div className="flex flex-col items-center p-2">
        <img
          src={stair}
          alt=""
          className="border border-black rounded-md p-2 lg:w-8 md:w-8 mb-2 transition-transform transform hover:scale-105 hover:bg-gray-400"
        />
      </div>
      <p className="mt-2">Outdoor pool</p>
    </div>
    <div className="flex items-start mb-2 md:mb-0">
      <div className="flex flex-col items-center p-2">
        <img
          src={wine}
          alt=""
          className="border border-black rounded-md p-2 lg:w-8 md:w-8 mb-2 transition-transform transform hover:scale-105 hover:bg-gray-400"
        />
      </div>
      <p className="mt-2">Bar/Lounge</p>
    </div>
  </div>
</div>



        </div>


        <div className="lg:w-[40%] h-[100%] md:w-[100%] lg:justify-start md:justify-center p-9 md:p-[18px]  bg-white border border-black rounded-3xl">
          <h1 className='lg:text-[30px] md:text-[24px] '>Listing Agent</h1>
          <div className='flex gap-x-3'>
            <img src={client} alt="" />
            <div>
              <h2 className='font-semibold'> Livia Harwits</h2>
              <p> Proview, listing agent</p>
            </div>

          </div>
          <div className="w-[100%] col-span-3 items-center mb-9">
            <div className="borderBottom"></div>
          </div>
          <form className='flex flex-col w-full sm:w-[100%] '>



            <h1 className='lg:text-[24px] text-[20px] md:text-[24px] mb-9'>Contact Agent (s)</h1>

            <div className="mb-4 flex items-center">
              <input type="text" id="city" name="city" placeholder='Your name' className="textt w-full border border-stone-400 rounded-xl lg:py-[10px] md:py-0 px-3 lg:text-[20px] md:text-[10px] mb-5" />
            </div>

            <div className="mb-4 flex items-center">
              <input type="text" id="area" name="area" placeholder='Email' className="textt w-full border border-stone-400 rounded-lg lg:py-[10px] md:py-0 px-3 lg:text-[20px] md:text-[10px] mb-5" />
            </div>

            <div className="mb-4 flex items-center">
              <input type="text" id="bedrooms" name="bedrooms" placeholder='phone' className="textt w-full border border-stone-400 rounded-lg lg:py-[10px] md:py-0 px-3 lg:text-[20px] md:text-[10px] mb-5" />
            </div>

            <button type="submit" className=" hover:color color border border-color font-bold py-3 px-4 rounded-xl mb-9">
              SEND MESSAGE
            </button>
          </form>
        </div>





      </div>
      <div className="text-start p-8">
  <h2 className="text-2xl font-bold mb-4">Availability</h2>
</div>

<div className='flex flex-col gap-6 p-6 lg:flex-row lg:gap-x-11 lg:p-[30px]'>
  <div>
    <Calendar
      ranges={[selectionRange]}
      date={new Date()}
      // editableDateInputs={true}
      // showSelectionPreview={true}
      rangeColors={"black"}
      color={'black'}
      onChange={handleSelect}
    />
  </div>

  <div>
    <Calendar
      ranges={[selectionRange]}
      date={new Date()}
      editableDateInputs={true}
      // showSelectionPreview={true}
      rangeColors={"black"}
      color={'black'}
      onChange={handleSelect}
    />
  </div>

  <div className="max-w-sm mx-auto bg-white rounded-3xl border border-gray-300 overflow-hidden shadow-lg ">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 flex flex-col items-center p-4">
        <div className='flex justify-center rounded-md border gap-x-5 w-full lg:w-[220px]'>
          <div className='border-r pr-4'>
            <span className='text-[12px]'>Check-in</span>
            <p className='text-[10px]'>1/1/23</p>
          </div>
          <div>
            <span className='text-[12px]'>Check-out</span>
            <p className='text-[10px]'>1/1/23</p>
          </div>
        </div>

        <div className='w-full lg:w-[220px] border border-gray-300 rounded-md'>
          <select name="Guest" id="">

          </select>
        </div>

        <button type="submit" className="hover:color color border border-color font-bold py-3 px-16 rounded-xl mt-4">
          Reserve
        </button>
      </div>
    </div>
  </div>
</div>

      <div className="text-start p-8">
            <h2 className="text-2xl font-bold mb-4">Location</h2>
           <div>
            <img src={rectangle8} alt="" className='w-[1300px] h-[700px]' />
           </div>
            </div>
            <div className="text-start p-8">
            <h2 className="text-2xl font-bold mb-4">Recommendations</h2>
            

            <div className='flex flex-col lg:items-start items-center'>
        <div className='mb-6'> 
        </div>
        <div className='lg:flex justify-center gap-x-3'>
        <div className="w-full sm:w-[100%]  md:w-[100%] lg:w-[47%] rounded-md sm:ml-auto sm:mr-auto border border-stone-300 mb-2">
              <img src={build3} alt='' className="w-full h-[200px] p-2 rounded-2xl"  />
              <div className="px-6 py-4">
                <div className="font-bold mb-2 flex justify-between">
                  <h1 className='text-[16px]'>The Stable Apartment</h1>
                </div>
                <div className='flex items-center gap-8 mt-[15px]'>
                  <span className='flex gap-1 text-[12px] items-center '><img src={singlebed} alt="" className="h-[12px]" /> bed</span>
                  <span className='flex gap-1 text-[12px] items-center'> <img src={bathroom} alt="" className="h-[12px]" /> bath</span>
                  <span className='flex gap-1 text-[12px] items-center'><img src={angle} alt="" className="h-[12px]" /> sqft</span>
                </div>
              </div>
              <div className="px-6 py-0">
                <span className="inline-block  px-0 py-1 text-[16px] font-semibold text-black ">
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
            <div className="w-full sm:w-[100%] md:w-[100%] lg:w-[47%] rounded-md sm:ml-auto sm:mr-auto border border-stone-300 mb-2">
              <img src={build3} alt='' className="w-full h-[200px] p-2 rounded-2xl"  />
              <div className="px-6 py-4">
                <div className="font-bold mb-2 flex justify-between">
                  <h1 className='text-[16px]'>The Stable Apartment</h1>
                </div>
                <div className='flex items-center gap-8 mt-[15px]'>
                  <span className='flex gap-1 text-[12px] items-center '><img src={singlebed} alt="" className="h-[12px]" /> bed</span>
                  <span className='flex gap-1 text-[12px] items-center'> <img src={bathroom} alt="" className="h-[12px]" /> bath</span>
                  <span className='flex gap-1 text-[12px] items-center'><img src={angle} alt="" className="h-[12px]" /> sqft</span>
                </div>
              </div>
              <div className="px-6 py-0">
                <span className="inline-block  px-0 py-1 text-[16px] font-semibold text-black ">
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
            <div className="w-full md:w-[100%] lg:w-[47%] rounded-md sm:ml-auto sm:mr-auto border border-stone-300 mb-2">
              <img src={build3} alt='' className="w-full h-[200px] p-2 rounded-2xl"  />
              <div className="px-6 py-4">
                <div className="font-bold mb-2 flex justify-between">
                  <h1 className='text-[16px]'>The Stable Apartment</h1>
                </div>
                <div className='flex items-center gap-8 mt-[15px]'>
                  <span className='flex gap-1 text-[12px] items-center '><img src={singlebed} alt="" className="h-[12px]" /> bed</span>
                  <span className='flex gap-1 text-[12px] items-center'> <img src={bathroom} alt="" className="h-[12px]" /> bath</span>
                  <span className='flex gap-1 text-[12px] items-center'><img src={angle} alt="" className="h-[12px]" /> sqft</span>
                </div>
              </div>
              <div className="px-6 py-0">
                <span className="inline-block  px-0 py-1 text-[16px] font-semibold text-black ">
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
            <div className="w-full md:w-[100%] lg:w-[47%] rounded-md sm:ml-auto sm:mr-auto border border-stone-300 mb-2">
              <img src={build3} alt='' className="w-full h-[200px] p-2 rounded-2xl"  />
              <div className="px-6 py-4">
                <div className="font-bold mb-2 flex justify-between">
                  <h1 className='text-[16px]'>The Stable Apartment</h1>
                </div>
                <div className='flex items-center gap-8 mt-[15px]'>
                  <span className='flex gap-1 text-[12px] items-center '><img src={singlebed} alt="" className="h-[12px]" /> bed</span>
                  <span className='flex gap-1 text-[12px] items-center'> <img src={bathroom} alt="" className="h-[12px]" /> bath</span>
                  <span className='flex gap-1 text-[12px] items-center'><img src={angle} alt="" className="h-[12px]" /> sqft</span>
                </div>
              </div>
              <div className="px-6 py-0">
                <span className="inline-block  px-0 py-1 text-[16px] font-semibold text-black ">
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
            <div className="w-full md:w-[100%] lg:w-[47%] rounded-md sm:ml-auto sm:mr-auto border border-stone-300 mb-2">
              <img src={build3} alt='' className="w-full h-[200px] p-2 rounded-2xl"  />
              <div className="px-6 py-4">
                <div className="font-bold mb-2 flex justify-between">
                  <h1 className='text-[16px]'>The Stable Apartment</h1>
                </div>
                <div className='flex items-center gap-8 mt-[15px]'>
                  <span className='flex gap-1 text-[12px] items-center '><img src={singlebed} alt="" className="h-[12px]" /> bed</span>
                  <span className='flex gap-1 text-[12px] items-center'> <img src={bathroom} alt="" className="h-[12px]" /> bath</span>
                  <span className='flex gap-1 text-[12px] items-center'><img src={angle} alt="" className="h-[12px]" /> sqft</span>
                </div>
              </div>
              <div className="px-6 py-0">
                <span className="inline-block  px-0 py-1 text-[16px] font-semibold text-black ">
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

        </div>

      </div>
      </div>
      <div className="text-start p-8">
            <h2 className="text-2xl font-bold mb-4">5.0 . 50 reviews</h2>

      <div className='flex flex-wrap justify-around mb-6'>
        <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
          <div className="lg:w-96 w-72 mx-auto bg-black shadow-lg rounded-lg overflow-hidden">
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
          <div className="lg:w-96 w-72 mx-auto bg-black shadow-lg rounded-lg overflow-hidden">
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
          <div className="lg:w-96 w-72 mx-auto bg-black shadow-lg rounded-lg overflow-hidden">
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
      </div>
      <div className="w-full col-span-3">
        <div className="borderBottom"></div>
      </div>
      <Footer/>

    </div>
  )
}


// adding for deployment
export default Viewproperty;