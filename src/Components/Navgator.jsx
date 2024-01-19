import React from 'react'
import Nav from 'react-bootstrap/Nav';

function Navgator() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home" className='mb-6'>
        <Nav.Item >
          <Nav.Link href="/home" className='text-[20px] font-semibold nav-action hover:border-none' >Dubai</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" className='text-[20px]  font-semibold nav-action hover:border-none'>Ajman</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link eventKey="link-1" className='text-[20px]  font-semibold nav-action hover:border-none'>Sharja</Nav.Link>

        </Nav.Item>
        <Nav.Item>
        <Nav.Link eventKey="link-1" className='text-[20px]  font-semibold nav-action hover:border-none'>Abu Dhabi</Nav.Link>

        </Nav.Item>
        <Nav.Item>
        <Nav.Link eventKey="link-1" className='text-[20px]  font-semibold nav-action hover:border-none'>Dera</Nav.Link>

        </Nav.Item>
      </Nav>
  )
}

export default Navgator;