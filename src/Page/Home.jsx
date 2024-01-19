import React, { useEffect, useState } from 'react';
import Nav from "../Components/Navigation";
import logo from '../asset/logo.png'
import samsung from '../asset/samsung.png'
import social from '../asset/social.png'
import netflix from '../asset/netflix.png'
import home from '../asset/home.png'
import rental from '../asset/rental.png'
import residentail from '../asset/residential.png'
import firework from '../asset/fireworks.png'
import responsibilty from '../asset/responsibility.png'
import Accordion from 'react-bootstrap/Accordion';
import unplash from '../asset/unplash.png'
import lapd from '../asset/lapd.png'
import profile from '../asset/profile.png'
import rightarrow from '../asset/right-arrow (1).png'
import Group394 from '../asset/Group 394.png'
import Group395 from '../asset/Group 395.png'
import Group396 from '../asset/Group 396.png'
import Group397 from '../asset/Group 397.png'
import Group398 from '../asset/Group 398.png'
import Group399 from '../asset/Group 399.png'
import Group724 from '../asset/Group 724.png'
import Group725 from '../asset/Group 725.png'
import Group726 from '../asset/Group 726.png'
import Group723 from '../asset/Group 723.png'
import rectangle8 from '../asset/Rectangle 8 (1).png'
import Footer from '../Components/Footer';
import searchh from '../asset/searchh.png'
import pricetag from '../asset/price-tag.png'
// import rare2 from '../asset/rare 2.png'
import Group19 from '../asset/Group 19.png'
import Group1597 from '../asset/Group 1597.png'
import clock from '../asset/clock.png'
import vec from '../asset/vec.png'
import vector from '../asset/Vector.png'
import shape1 from '../asset/Shape (1).png'
import engineer from '../asset/engineer.png'
import group1593 from '../asset/Group 1593.png'
import ruler from '../asset/ruler.png'
import vecter from "../asset/Vecter.png"
import spotify from '../asset/spotify.png'
import chat from '../asset/chat.png'
import fame from '../asset/fame.png'
import experince from '../asset/experince.png'
import rarelogo from '../asset/rarelog.png'
import arrowright from '../asset/Arrow - Right.png'
import arrowleft from '../asset/Arrow-left.png'
import timing from '../asset/timing.png'
import Navigation from '../Components/Navigation';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import { Container, Row, Col } from 'react-bootstrap';
import bgimg from '../asset/bgimg.jpeg'
import Navgator from '../Components/Navgator';











function Home() {
  const [counter, setCounter] = useState(1);
  const [activePanel, setActivePanel] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);





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
  const toggleAccordion = (index) => {
    if (activePanel === index) {
      setActivePanel(null);
    } else {
      setActivePanel(index);
    }
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
  const para = [
    { title: 'Experienced', content: 'Our experience of 25 years of building and making achievements in the world of development', imageURL: experince },
    { title: 'Competitive price', content: 'The prices we offer you are very competitive without reducing the quality of the companys work in the slightest', imageURL: pricetag },
    { title: 'On Time', content: 'The prices we offer you arevery competitive without reducing the quality of thecompanys work in theslightest', imageURL: timing },
    { title: 'Best Materials', content: 'The prices we offer you are very competitive without reducing the quality of the companys work in the slightest', imageURL: responsibilty },

  ];
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    // Set showMessage to true after a delay to trigger the animation
    const delay = setTimeout(() => {
      setShowMessage(true);
    }, 700);

    // Clear the delay timer to prevent memory leaks
    return () => clearTimeout(delay);
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3600/home/get');
        const result = await response.json();
        if (result.status === true) {
          setData(result.data);
        }
        //console.log('result',result)
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }


  return (
    <div className='home-container overflow-x-hidden '>
      <div className='bg-gray-500'>
        <div className='bg-gray-500'></div>
      </div>
      <div className='p-[10px]'>
        <Navigation />

        <>
          <div className="hero-section">
            {/* <img src={{`http://localhost:3600${item.imageURL}`}} alt="" />{data && <h2>{item.heading */}

            <div className='pl-[80px]'>
              <Card style={{ width: '500px', height: '400px', borderBottomRightRadius: '80px', padding: '40px' }}>
                <Card.Body>
                  <Card.Title style={{ fontSize: '3.25rem', textAlign: 'left', color: 'black' }}>Feel at home
                    free to roam
                </Card.Title>
                <Card.Text style={{ fontSize: '14px', textAlign: 'left', color: 'gray', marginBottom: '30px' }}>
                Experience the home that moves with you for a month, a year, or longer with a global network of designer, furnished apartments.

                </Card.Text>
                <Dropdown data-bs-theme="dark" >
                  <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary " style={{ color: 'white', backgroundColor: '#95895d' }}>
                    Select Country
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1" active>
                      Action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Card.Body>
            </Card>
          </div>




          {/* 
          <div className='hero-content'>
            <div className='content-top'>
              <div className="flex flex-col items-center md:flex-row lg:p-[40px] lg:w-[850px] w-[300px]">
                <div className="md:w-1/2 md:text-center placeholder lg:p-[40px]">
                        {
                    data && data.length > 0 ?
                    data.map((item) => {
                      return(
                        <>
                          <h1 className="lg:text-[60px] lg:leading-none lg:p-0 p-[10px] lg:w-[583px] w-[300px] text-4xl lg:text-start text-center  text-white font-semibold my-4 md:my-8">
                            {data && <h2>{item.heading}</h2>}
                            </h1>
                            <p className={`lg:text-[18px] lg:p-0 p-[10px]  text-lg w-[300px] lg:w-[553px] lg:text-start text-center text-stone-600 mb-2 md:mb-8 ${showMessage ? "animated-hero" : ""}`}>
                              { item.paragraph}
                            </p>
                                  </>
                                )
                              })
                              :
                              <p>Not Loading</p>
                            }
                
                
                </div>
              </div>

            
            </div>
          </div> */}

          {/* Counter Section */}


        </div>
        </>
        

      </div>
      

      <div className="flex flex-col items-center text-center p-4 sm:p-8 md:p-12 lg:p-16">
        <h3 className="mb-4 text-[18px] sm:text-2xl  lg:text-[16px]">Trusted by 100+ Companies across the globe!</h3>
        <div className="flex flex-col items-center sm:flex-row sm:space-x-2 md:space-x-4 lg:space-x-8">
          <div className="mb-4 sm:mb-0">
            <img src={logo} alt="" className="w-28 sm:w-60 md:w-64 lg:w-28" />
          </div>
          <div className="mb-4 sm:mb-0">
            <img src={samsung} alt="" className="w-28 sm:w-60 md:w-64 lg:w-28" />
          </div>
          <div className="mb-4 sm:mb-0">
            <img src={social} alt="" className="w-28 sm:w-60 md:w-64 lg:w-28" />
          </div>
          <div className="mb-4 sm:mb-0">
            <img src={netflix} alt="" className="w-28 sm:w-60 md:w-64 lg:w-28" />
          </div>
          <div className="mb-4 sm:mb-0">
            <img src={spotify} alt="" className="w-28 sm:w-60 md:w-64 lg:w-28 text-black opacity-60" />
          </div>
        </div>
      </div>







      <div className="panel-section">
        <div className="bg-white gap-x-14 lg:w-full w-[70%] mx-auto p-4 flex flex-col md:flex-row justify-between items-center text-2xl rounded-2xl">

          <div className="flex flex-col items-center p-2  mb-2 md:mb-0">
            <img src={home} alt="" className="border border-black rounded-md p-2 lg:w-14 md:w-8 mb-2 transition-transform transform hover:scale-105 hover:bg-gray-400 " />
            <p className="text-[15px]">Houses</p>
          </div>

          <div className="flex flex-col items-center p-2 mb-2 md:mb-0">
            <img src={rental} alt="" className="border border-black rounded-md p-2 lg:w-14 md:w-8 mb-2 transition-transform transform hover:scale-105 hover:bg-gray-400" />
            <p className="text-[15px]">Daily Rental</p>
          </div>

          <div className="flex flex-col items-center p-2 mb-2 md:mb-0">
            <img src={residentail} alt="" className="border border-black rounded-md p-2 lg:w-14 md:w-8 mb-2 transition-transform transform hover:scale-105 hover:bg-gray-400" />
            <p className="text-[15px]">Apartment</p>
          </div>

          <div className="flex flex-col items-center p-2 mb-2 md:mb-0">
            <img src={firework} alt="" className="border border-black rounded-md p-2 lg:lg:w-14 md:w-8 mb-2 transition-transform transform hover:scale-105 hover:bg-gray-400" />
            <p className="text-[15px]">New Building</p>
          </div>

          <div className="flex flex-col items-center p-2">
            <img src={home} alt="" className="border border-black rounded-md p-2 lg:w-14 md:w-8 mb-2 transition-transform transform hover:scale-105 hover:bg-gray-400" />
            <p className="text-[15px]">Commercial</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center text-center p-4 md:p-[40px] mb-36">
        <h2 className="mb-14 lg:text-[40px] font-normal text-[30px]">How it works?</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="text-center">
            <span className="flex justify-center">
              <img src={lapd} alt="" className="border border-stone-400 p-2 lg:w-16 w-14 mb-4 transition-transform transform hover:scale-105 hover:bg-gray-400" />
            </span>
            <h3 className='text-[20px] md:text-[20px] font-normal mb-4 md:mb-[20px]'>Research Property</h3>
            <p className='text-gray-500 lg:text-[15px] text-[13px]'>Moderate children at of outweigh it. Unsatiable it considered invitation he traveling insensible.</p>
          </div>
          <div className="text-center">
            <span className="flex justify-center">
              <img src={Group19} alt="" className="p-2 lg:w-[85%] h-[40px] md:w-[100px] mb-4 md:mb-8 mx-auto" />
            </span>
          </div>
          <div className="text-center">
            <span className="flex justify-center">
              <img src={responsibilty} alt="" className="border border-stone-400 p-2 lg:w-16 w-14 mb-4 transition-transform transform hover:scale-105 hover:bg-gray-400" />      </span>
            <h3 className='text-[20px] md:text-[20px] font-normal mb-4 md:mb-[20px]'>Instant Valuation</h3>
            <p className='text-gray-500 lg:text-[15px] text-[13px]'>Conveying or northward offending admitting perfectly my Colonel gravit and moonlight.</p>
          </div>
          <div className="text-center">
            <span className="flex justify-center">
              <img src={Group19} alt="" className="p-2 lg:w-[85%] h-[40px] md:w-[100px] mb-4 md:mb-8 mx-auto" />
            </span>
          </div>
          <div className="text-center">
            <span className="flex justify-center">
              <img src={home} alt="" className="border border-stone-400 p-2 lg:w-16 w-14 mb-4 transition-transform transform hover:scale-105 hover:bg-gray-400" />
            </span>
            <h3 className='text-[20px] md:text-[20px] font-normal mb-4 md:mb-[20px]'>Track property</h3>
            <p className='text-gray-500 lg:text-[15px] text-[13px]'>Conveying or northward offending admitting perfectly my Colonel gravit and moonlight.</p>
          </div>
        </div>
      </div>





      <div className='flex flex-col md:flex-row justify-around gap-x-4 mb-7'>
        <div className='lg:w-1/3 md:w-1/3 mb-4 md:mb-0'>
          <div className='lg:pt-[10px] pt-[0px] lg:text-left text-center'>
            <h1 className='text-[50px] mb-3'>What Make Us
              Different?</h1>
            <p className='text-[20px] font-normal text-gray-500 '>Check out our best service you can possibly orders in building
              your company and don't forget to ask via our email or our
              customer service if you are interested in using our services</p>
          </div>
        </div>
        <div className='lg:w-1/3 md:w-2/3'>

          <div className='lg:p-[0px] p-[10px]'>
            {/* {para.map((item, index) => (
              <div key={index} className='mb-5'>
                <div className='flex items-center mb-5 border border-gray-300 p-[15px] rounded-xl hover:color color  border-color'>
                  <img src={item.imageURL} alt={`Image ${index}`} width='30px' height='25px'   className='items-center' />
                  <button className={`accordion ${activePanel === index ? 'active' : 'font-semibold'}textt font-semibold`} >
                    {item.title}
                  </button>
                  <FontAwesomeIcon icon={faAngleDown} className='cursor-pointer' onClick={() => toggleAccordion(index)} />
                </div>
                <div className={`panel ${activePanel === index ? 'show' : ''} border border-gray-400 rounded-xl shadow-lg text-sm text-gray-500`}>
                  {item.content}
                </div>
              </div>
            ))} */}
            <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header className='text-base gap-2'><img src={experince} /> Experince</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header><img src={pricetag} />Price</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header><img src={timing} />Time</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header><img src={responsibilty} className='h-8' />Responsibilty</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>



      {/* <div className="flex flex-col items-center text-center p-4 md:p-8">
        <div className="flex flex-col p-[50px] mb-6 md:flex-row justify-center space-y-8 md:space-y-0 space-x-0 md:space-x-32">
          <div className="lg:text-left text-center">
            <span className="flex lg:justify-start justify-center">
              <img src={verified} alt="" className="border border-black p-2 lg:w-16 w-14 mb-4 transition-transform transform hover:scale-105 hover:bg-gray-400" />
            </span>
            <h3 className="lg:text-[20px] text-2xl font-normal mb-2">Experienced</h3>
            <p className="lg:text-[15px] lg:font-extralight text-[12px]">Our prices are competitive without compromising quality.</p>
          </div>
          <div className="lg:text-left text-center">
            <span className="flex lg:justify-start justify-center">
              <img src={Group1597} alt="" srcSet="" className="border border-black p-2 lg:w-16 w-14 mb-4 transition-transform transform hover:scale-105 hover:bg-gray-400" />
            </span>
            <h3 className="lg:text-[20px] text-2xl font-normal mb-2">Competitive Price</h3>
            <p className="lg:text-[15px] lg:font-extralight text-[12px]">Our 25 years of experience in building and achieving milestones in the world of development.</p>
          </div>
          <div className="lg:text-left text-center">
            <span className="flex lg:justify-start justify-center ">
              <img src={clock} alt="" className="border border-black p-2 lg:w-16 w-14 mb-4 transition-transform transform hover:scale-105 hover:bg-gray-400" />
            </span>
            <h3 className="lg:text-[20px] text-2xl font-normal mb-2">On Time</h3>
            <p className="lg:text-[15px] lg:font-extralight text-[12px]">We offer very competitive prices without compromising the quality of our work.</p>
          </div>
          <div className="lg:text-left text-center">
            <span className="flex lg:justify-start justify-center">
              <img src={verified} alt="" className="border border-black p-2 lg:w-16 w-14 mb-4 transition-transform transform hover:scale-105 hover:bg-gray-400" />
            </span>
            <h3 className="lg:text-[20px] text-2xl font-normal mb-2">Best Material</h3>
            <p className="lg:text-[15px] lg:font-extralight text-[12px]">Our competitive prices do not reduce the quality of our work.</p>
          </div>
        </div>
      </div> */}





      <div className='p-[50px]'>
        <div className='lg:w-1/3 md:w-1/3 mb-4 md:mb-0'>
          <div className='lg:pt-[10px] pt-[0px] lg:text-left text-left mb-5'>
            <h1 className='text-[50px] mb-3'>Global Footprint</h1>
            <p className='text-[20px] font-normal text-gray-500 '>16 countries. 32 cities. More than 15,000 apartments, and counting
            </p>
          </div>
        </div>
        <Navgator />
        <div>
          <Container fluid>
            <Row className='p-[10px]'>
              <Col md={3}>
                <img src={bgimg} alt="Image 1" className="img-fluid rounded-lg" />

              </Col>
              <Col md={3}>
                <img src={bgimg} alt="Image 2" className="img-fluid rounded-lg" />
              </Col>
              <Col md={3}>
                <img src={bgimg} alt="Image 3" className="img-fluid rounded-lg" />
              </Col>
              <Col md={3}>
                <img src={bgimg} alt="Image 4" className="img-fluid rounded-lg" />
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <Container fluid>
            <Row className='p-[10px]'>
              <Col md={3}>
                <img src={bgimg} alt="Image 1" className="img-fluid rounded-lg" />
              </Col>
              <Col md={3}>
                <img src={bgimg} alt="Image 2" className="img-fluid rounded-lg" />
              </Col>
              <Col md={3}>
                <img src={bgimg} alt="Image 3" className="img-fluid rounded-lg" />
              </Col>
              <Col md={3}>
                <img src={bgimg} alt="Image 4" className="img-fluid rounded-lg" />
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <Container fluid>
            <Row className='p-[10px]'>
              <Col md={3}>
                <img src={bgimg} alt="Image 1" className="img-fluid rounded-lg" />
              </Col>
              <Col md={3}>
                <img src={bgimg} alt="Image 2" className="img-fluid rounded-lg" />
              </Col>
              <Col md={3}>
                <img src={bgimg} alt="Image 3" className="img-fluid rounded-lg" />
              </Col>
              <Col md={3}>
                <img src={bgimg} alt="Image 4" className="img-fluid rounded-lg" />
              </Col>
            </Row>
          </Container>
        </div>

      </div>


      <div className="w-full md:w-[87%] flex flex-col md:flex-row justify-between items-center mt-4 md:mt-[100px] mb-4">
        <div className="w-[80%] lg:w-[800px] relative lg:p-[40px]">
          <img src={unplash} alt="" className="lg:w-[500px] w-[390px] object-cover lg:ml-[20px] ml-0 relative" />
        </div>
        <div className="absolute lg:left-[19rem] left-[5rem] lg:pt-0 pt-[30px] flex justify-center items-center  ">
          <div className="bg-white shadow-md  p-4 lg:w-[294px] lg:h-[312px] w-[200px] h-[280px] border border-color rounded-2xl text-center">
            <div className="flex justify-center">
              <img
                src={profile}
                alt="Profile"
                className="w-24 h-24 object-cover mb-4 rounded-full"
              />
            </div>
            <div className="lg:text-2xl text-sm textt font-bold mb-2">Dianne tusel</div>
            <div className="textt lg:text-sm text-xs">More than 20 years of experience
              in the field architecture and has
              worked on project up to 100+</div>
          </div>
        </div>

        <div className="w-full md:w-[38%] p-4 mt-4 md:mt-0 text-center lg:text-left ">
          <h1 className="lg:text-2xl text-[24px] font-normal mb-4 md:mb-8">
            Meet and talk with our best architecture
          </h1>
          <p className="lg:text-lg text-[14px] text-justify mb-4 md:mb-8">
            All our teams are professional and competent in their fields. They will help you realize your dream building with excellent results.
          </p>
          <div className='flex flex-col md:flex-row items-center gap-x-12'>
            <button className="md:bottom-4 border hover:color color border-gray-300 textt lg:py-4 md:py-7 rounded-xl lg:text-[12px] text-[13px] w-[140px] h-[42px] font-semibold transition-transform transform hover:scale-105 mb-4 md:mb-0 flex items-center justify-center">
              See all team
            </button>
            <span className='text-lg md:text-[16px] text-gray-900 flex items-center'>
              How it works
              <img src={rightarrow} alt="" className='lg:w-[20px] lg:h-[15px] w-[18px] h-[12px]' />
            </span>
          </div>

        </div>
      </div>


      <div>

        <div className='p-[50px]'>

          <div className='lg:text-start text-center m-6 md:m-[44px]'>
            <button className="md:bottom-4 md:right-4 border border-gray-300 textt px-8 md:px-16 py-4 md:py-3 rounded-xl lg:text-xl text-[16px] font-semibold md:mr-40 ">
              OUR ADVANTAGE
            </button>

            <h1 className="lg:text-[3rem] font-normal mb-8 text-[2rem] ">Giving you peace of mind</h1>
          </div>
          <div className="flex flex-col mb-6 lg:p-[40px] md:flex-row justify-center space-y-8 md:space-y-0 space-x-0 md:space-x-32">
            <div class="transition-transform transform hover:shadow-lg hover:border border-gray-500 mb-6 md:mb-0 rounded-2xl lg:p-10 p-5 text-center">
              <div class="flex justify-center">
                <img src={Group394} alt="" className=" p-2 w-[80px] mb-3 hover:flip" />
              </div>
              <h4 class="lg:text-[20px] text-[20px] font-normal mt-4">Comfortable</h4>
              <p class="text-gray-600 lg:text-[15px] text-[12px]">You can connect with potential tenants without having to share your phone number. We also require all users to register to validate their legitimacy.</p>
            </div>
            <div class="transition-transform transform hover:shadow-lg hover:border border-gray-500 mb-6 md:mb-0 rounded-2xl lg:p-10 p-5 text-center">
              <div class="flex justify-center">
                <img src={Group395} alt="" className=" p-2 w-[80px] mb-3 hover:flip" />
              </div>
              <h4 class="lg:text-[20px] text-[20px] font-normal mt-4">Extra security</h4>
              <p class="text-gray-600 lg:text-[15px] text-[12px]">You can connect with potential tenants without having to share your phone number. We also require all users to register to validate their legitimacy.</p>
            </div>
            <div class="transition-transform transform hover:shadow-lg hover:border border-gray-500 mb-6 md:mb-0 rounded-2xl lg:p-10 p-5 text-center">
              <div class="flex justify-center">
                <img src={Group396} alt="" className=" p-2 w-[80px] mb-3 hover:flip" />
              </div>
              <h4 class="lg:text-[20px] text-[20px] font-normal mt-4">Luxury</h4>
              <p class="text-gray-600 lg:text-[15px] text-[12px]">You can connect with potential tenants without having to share your phone number. We also require all users to register to validate their legitimacy.</p>
            </div>

          </div>
          <div className="flex flex-col lg:p-[40px] md:flex-row justify-center md:justify-center space-y-8 md:space-y-0 space-x-0 md:space-x-32 mb-24">
            <div class="transition-transform transform hover:shadow-lg hover:border border-gray-500 mb-6 md:mb-0 rounded-2xl lg:p-10 p-5 text-center">
              <div class="flex justify-center">
                <img src={Group397} alt="" className=" p-2 w-[80px] mb-3 hover:flip" />
              </div>
              <h4 class="lg:text-[20px] text-[20px] font-normal mt-4">Best price</h4>
              <p class="text-gray-600 lg:text-[15px] text-[12px]">You can connect with potential tenants without having to share your phone number. We also require all users to register to validate their legitimacy.</p>
            </div>
            <div class="transition-transform transform hover:shadow-lg hover:border border-gray-500 mb-6 md:mb-0 rounded-2xl lg:p-10 p-5 text-center">
              <div class="flex justify-center">
                <img src={Group398} alt="" className=" p-2 w-[80px] mb-3 hover:flip" />
              </div>
              <h4 class="lg:text-[20px] text-[20px] font-normal mt-4">Strategic location</h4>
              <p class="text-gray-600 lg:text-[15px] text-[12px]">You can connect with potential tenants without having to share your phone number. We also require all users to register to validate their legitimacy.</p>
            </div>
            <div class="transition-transform transform hover:shadow-lg hover:border border-gray-500 mb-6 md:mb-0 rounded-2xl lg:p-10 p-5 text-center">
              <div class="flex justify-center">
                <img src={Group399} alt="" className=" p-2 w-[80px] mb-3 hover:flip" />
              </div>
              <h4 class="lg:text-[20px] text-[20px] font-normal mt-4">Efficient</h4>
              <p class="text-gray-600 lg:text-[15px] text-[12px]">You can connect with potential tenants without having to share your phone number. We also require all users to register to validate their legitimacy.</p>
            </div>
          </div>
          {/* <div className="flex flex-col md:flex-row justify-start md:justify-center space-y-8 md:space-y-0 space-x-0 md:space-x-32">
    <div className="text-center">
      <span className="flex justify-center">
        <img src={Group397} alt="" srcset="" className=" p-2 w-[150px] mb-8" />
      </span>
      <h3 className='text-4xl font-bold mb-6 md:mb-[20px] '>Security System</h3>
      <p className='text-lg md:text-[25px]'>Sagittis Nulla facilisi. In sed pretium metus. Proin pretium Turna sit amet tincidunt.</p>
    </div>
    <div className="text-center">
      <span className="flex justify-center">
        <img src={Group398} alt="" className=" p-2 w-[150px] mb-8" />
      </span>
      <h3 className='text-4xl font-normal mb-6 md:mb-[20px]'>24/7 Availability</h3>
      <p className='text-lg md:text-[25px]'>Globally incubate standards before scalable benefits.</p>
    </div>
    <div className="text-center">
      <span className="flex justify-center">
        <img src={Group399} alt="" className=" p-2 w-[150px] mb-8" />
      </span>
      <h3 className='text-4xl font-normal mb-6 md:mb-[20px]'>Service & Maintenance</h3>
      <p className='text-lg md:text-[25px]'>Sagittis Nulla facilisi. In sed pretium metus. Proin pretium Turna sit amet tincidunt.</p>
    </div>
  </div> */}
        </div>


      </div>



      <div className='second-container text-center mb-8 py-16 md:py-0 relative'>
        <span className='absolute top-0 left-0 w-[100%]'></span>
        <div className='lg:p-[20px] p-0'>
          <h2 className='text-white text-2xl md:text-1rem'>- Why Choose Us</h2>
          <h1 className='text-white text-4xl md:text-3rem'>What are you looking for?</h1>
          <h3 className='text-white text-3xl md:text-2rem'>Your Ideal Choice: Unveiling</h3>
          <span className='text-white text-3xl md:text-4xl'>
            the Benefits of Our Services
          </span>
          <div className='flex flex-col md:flex-row justify-around mt-8 lg:gap-0 gap-[15px]'>
            <div className='w-full  md:w-1/4'>

              <div className="bg-white shadow-md hover:color color border border-color p-6 lg:w-80 md:w-56 lg:h-[190px] md:h-[200px] mb-2 text-left rounded-3xl transition duration-300 ease-in-out transform hover:scale-105">
                <div className="flex flex-col justify-start  items-start ">
                  <img src={vector} alt="" className='w-[28px]' />
                  {/* Replace 'your-icon' with the class or path to your icon */}
                  <h2 className="text-lg font-semibold">Quality First</h2>
                </div>
                <p className="text-gray-600 lg:text-[12px] mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className='text-end'>
                  <button className=" text-black text-[15px] px-4 py-2 rounded  focus:outline-none focus:shadow-outline-blue">
                    Click Here
                  </button>
                </div>
              </div>
            </div>


            <div className='w-full  md:w-1/4'>

              <div className="bg-white shadow-md hover:color color border border-color p-6 lg:w-80 md:w-56 lg:h-[190px] md:h-[200px] mb-2 text-left rounded-3xl transition duration-300 ease-in-out transform hover:scale-105">
                <div className="flex flex-col justify-start  items-start">
                  <img src={fame} alt="" className='w-[30px]' />
                  {/* Replace 'your-icon' with the class or path to your icon */}
                  <h2 className="text-lg font-semibold">Families</h2>
                </div>
                <p className="text-gray-600 lg:text-[12px] mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className='text-end'>
                  <button className=" text-black text-[15px] px-4 py-2 rounded  focus:outline-none focus:shadow-outline-blue">
                    Click Here
                  </button>
                </div>
              </div>
            </div>

            <div className='w-full md:w-1/4'>
              <div className="bg-white shadow-md hover:color color border border-color p-6 lg:w-80 md:w-56 lg:h-[190px] md:h-[200px] mb-2 text-left rounded-3xl transition duration-300 ease-in-out transform hover:scale-105">
                <div className="flex flex-col justify-start  items-start ">
                  <img src={chat} alt="" className='w-[30px]' />
                  {/* Replace 'your-icon' with the class or path to your icon */}
                  <h2 className="text-lg font-semibold">Communication</h2>
                </div>
                <p className="text-gray-600 lg:text-[12px] mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className='text-end'>
                  <button className=" text-black text-[15px] px-4 py-2 rounded  focus:outline-none focus:shadow-outline-blue">
                    Click Here
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-white text-[40px] text-start md:text-[30px] mt-8">
            We are fully prepared to turn your dreams into reality.
          </div>

          <p className='text-white text-[20px] lg:w-[599px] md:w-[340px] md:text-[20px] mt-4 text-left'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem saepe modi voluptates quod.
          </p>
        </div>

      </div>

      <div className='text-center flex flex-col justify-center relative  md:py-0  mb-36'>
        <div className='mb-8 py-16 md:py-0 flex lg:justify-start justify-center lg:pl-44  pl-0'>
          <button className="bottom-7 right-4 md:right-4 border border-gray-300 textt p-[10px] rounded-xl lg:text-[18px] md:text-2xl font-semibold md:mr-40 ">
            CUSTOMER TESTIMONIAL
          </button>
        </div>
        <div className='flex flex-col md:flex-row justify-center gap-4'>

          {/* Card 1 */}
          <div className="w-full md:w-[350px] h-[300px] background flex flex-col gap-5 lg:rounded-tl-[40px] lg:rounded-bl-[40px] rounded-xl shadow-md overflow-hidden">
            <div className="md:p-6 flex-grow lg:p-[30px]">
              <div className="text-center md:text-left">
                <h2 className="text-[32px] font-normal text-white">Why do people say about us?</h2>
              </div>
            </div>
            <div className='flex justify-center items-center'>
              <img className="md:h-[100px] md:w-[240px] object-cover md:object-center" src={rarelogo} alt="Card image" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full md:w-[600px] h-[300px] background lg:rounded-tr-[40px] lg:rounded-br-[40px] rounded-lg shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:p-6 flex flex-col justify-center  items-center lg:p-[30px]">
              <div className="text-center flex items-center  mb-1">
                <h2 className="text-[24px] md:w-[326px] font-normal text-white">Dream house isn’t a dream anymore</h2>
              </div>
              <div className='flex justify-center items-center mx-auto'>
                <img src={arrowleft} alt="" />
                <img src={arrowright} alt="" />
              </div>
              <p className="text-[12px] md:w-[320px] text-black mb-3 ">
                Lorem ipsum dolor sit amet consectetur. Ante quis pellentesque nunc duis convallis.
                Viverra erat egestas cras dapibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className='flex justify-start items-start'>
                <img className="lg:h-[40px] lg:w-[48px] w-[30px] h-[30px]" src={profile} alt="Card image" />
                <div className='flex flex-col'>
                  <h1 className='text-[16px] text-white'>Jaydon Aminoff</h1>
                  <p className='text-[14px]'>CEO, Stfags Media</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='flex justify-center'>
          <img src={group1595} alt="" />
        </div> */}

      </div>


      <div className='text-center flex justify-center md:py-0 mb-12 lg:p-[50px] p-[30px]'>
        <img src={Group726} alt="" />
      </div>

      <div className='p-[50px]'>
        <div className='text-start m-6 md:m-[25px]'>
          <h1 className="lg:text-[4rem] font-normal mb-8 text-[42px] ">Our Services</h1>
        </div>
        <div className="flex flex-col mb-6 lg:p-[40px] md:flex-row justify-center space-y-8 md:space-y-0 space-x-0 md:space-x-32">
          <div class="transition-transform transform hover:shadow-lg hover:border border-gray-500 mb-6 md:mb-0 rounded-2xl lg:p-10 p-5 text-center">
            <div class="flex justify-center">
              <img src={engineer} alt="" className=" border border-stone-400 p-2 w-[80px] mb-3 hover:flip" />
            </div>
            <h4 class="lg:text-[20px] text-[20px] font-normal mt-4">General Contract</h4>
            <p class="text-gray-600 lg:text-[15px] text-[12px]">You can connect with potential tenants without having to share your phone number. We also require all users to register to validate their legitimacy.</p>
          </div>
          <div class="transition-transform transform hover:shadow-lg hover:border border-gray-500 mb-6 md:mb-0 rounded-2xl lg:p-10 p-5 text-center">
            <div class="flex justify-center">
              <img src={ruler} alt="" className=" border border-stone-400 p-2 w-[80px] mb-3 hover:flip" />
            </div>
            <h4 class="lg:text-[20px] text-[20px] font-normal mt-4">Project Planing</h4>
            <p class="text-gray-600 lg:text-[15px] text-[12px]">You can connect with potential tenants without having to share your phone number. We also require all users to register to validate their legitimacy.</p>
          </div>
          <div class="transition-transform transform hover:shadow-lg hover:border border-gray-500 mb-6 md:mb-0 rounded-2xl lg:p-10 p-5 text-center">
            <div class="flex justify-center">
              <img src={shape1} alt="" className=" border border-stone-400 p-2 w-[80px] mb-3 hover:flip" />
            </div>
            <h4 class="lg:text-[20px] text-[20px] font-normal mt-4">Refurnish</h4>
            <p class="text-gray-600 lg:text-[15px] text-[12px]">You can connect with potential tenants without having to share your phone number. We also require all users to register to validate their legitimacy.</p>
          </div>
        </div>
        <div className="flex flex-col lg:p-[40px] md:flex-row justify-text-left md:justify-text-left space-y-8 md:space-y-0 space-x-0 md:space-x-32">
          <div class="transition-transform transform hover:shadow-lg hover:border border-gray-500 mb-6 md:mb-0 rounded-2xl lg:p-10 p-5 text-center">
            <div class="flex justify-center">
              <img src={group1593} alt="" className=" border border-stone-400 p-2 w-[80px] mb-3 hover:flip" />
            </div>
            <h4 class="lg:text-[20px] text-[20px] font-normal mt-4">Security System</h4>
            <p class="text-gray-600 lg:text-[15px] text-[12px]">You can connect with potential tenants without having to share your phone number. We also require all users to register to validate their legitimacy.</p>
          </div>
          <div class="transition-transform transform hover:shadow-lg hover:border border-gray-500 mb-6 md:mb-0 rounded-2xl lg:p-10 p-5 text-center">
            <div class="flex justify-center">
              <img src={clock} alt="" className=" border border-stone-400 p-2 w-[80px] mb-3 hover:flip" />
            </div>
            <h4 class="lg:text-[20px] text-[20px] font-normal mt-4">24/7 Availability</h4>
            <p class="text-gray-600 lg:text-[15px] text-[12px]">You can connect with potential tenants without having to share your phone number. We also require all users to register to validate their legitimacy.</p>
          </div>
          <div class="transition-transform transform hover:shadow-lg hover:border border-gray-500 mb-6 md:mb-0 rounded-2xl lg:p-10 p-5 text-center">
            <div class="flex justify-center">
              <img src={vecter} alt="" className=" border border-stone-400 p-2 w-[80px] mb-3 hover:flip" />
            </div>
            <h4 class="lg:text-[20px] text-[20px] font-normal mt-4">Service & maintenance</h4>
            <p class="text-gray-600 lg:text-[15px] text-[12px]">You can connect with potential tenants without having to share your phone number. We also require all users to register to validate their legitimacy.</p>
          </div>
        </div>
        {/* <div className="flex flex-col md:flex-row justify-center md:justify-center space-y-8 md:space-y-0 space-x-0 md:space-x-32">
    <div className="text-center">
      <span className="flex justify-center">
        <img src={Group397} alt="" srcset="" className=" p-2 w-[150px] mb-8" />
      </span>
      <h3 className='text-4xl font-bold mb-6 md:mb-[20px] '>Security System</h3>
      <p className='text-lg md:text-[25px]'>Sagittis Nulla facilisi. In sed pretium metus. Proin pretium Turna sit amet tincidunt.</p>
    </div>
    <div className="text-center">
      <span className="flex justify-center">
        <img src={Group398} alt="" className=" p-2 w-[150px] mb-8" />
      </span>
      <h3 className='text-4xl font-normal mb-6 md:mb-[20px]'>24/7 Availability</h3>
      <p className='text-lg md:text-[25px]'>Globally incubate standards before scalable benefits.</p>
    </div>
    <div className="text-center">
      <span className="flex justify-center">
        <img src={Group399} alt="" className=" p-2 w-[150px] mb-8" />
      </span>
      <h3 className='text-4xl font-normal mb-6 md:mb-[20px]'>Service & Maintenance</h3>
      <p className='text-lg md:text-[25px]'>Sagittis Nulla facilisi. In sed pretium metus. Proin pretium Turna sit amet tincidunt.</p>
    </div>
  </div> */}
      </div>

      <div className="w-[100%] col-span-3">
        <div className="borderBottom"></div>
      </div>










      <Footer />

    </div>





  )
}
export default Home;
