import React from 'react';
import { Link } from 'react-router-dom';
import holidayhomeslogo from '../asset/holiday-homes-logo.png';
import Container from 'react-bootstrap/Container';
import BootstrapNav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import profile from '../asset/admin.png';
import Dropdown from 'react-bootstrap/Dropdown';



function Navigation() {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  // const closeSidebar = () => {
  //   setIsSidebarOpen(false);
  // };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-white lg:h-[80px]">
      <Container>
        <Navbar.Brand href="#home"> <img
              src={holidayhomeslogo}
              
              className="d-inline-block align-top w-[135px] h-[120px]"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <BootstrapNav className="me-auto">
            
           
           
          </BootstrapNav>
          <BootstrapNav>
         
            <BootstrapNav.Link href="#deets" className='font-semibold'>Your Experience</BootstrapNav.Link>
            <BootstrapNav.Link eventKey={2} href="#memes" className='font-semibold'>
            For Owners
            </BootstrapNav.Link>
            <BootstrapNav.Link eventKey={2} href="#memes" className='font-semibold ' >
              For Guest

            </BootstrapNav.Link>
            <div className='ml-4 mr-4 border-r-[1px] h-8 border-gray-500'></div>

            
            <BootstrapNav.Link>
              
            <div className='flex'>
              
            <img src={profile} alt="" className='h-[20px]'/>

            <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='text-black border-none hover:bg-gray-400'>
      
      </Dropdown.Toggle>

      <Dropdown.Menu className=''>
        <Dropdown.Item href="#/action-1">Log out</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Sign out</Dropdown.Item>
        <Dropdown.Item href="#/action-3"></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
           </div>
           </BootstrapNav.Link>
         
          </BootstrapNav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
