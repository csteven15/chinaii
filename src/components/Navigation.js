import React, { useState } from 'react';
import { Link, withRouter, useLocation } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledAlert
} from 'reactstrap';
import Footer from './Footer.js';

function Navigation(props) {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const paths = [
    {
      path: '/',
      name: 'Home'
    },
    {
      path: '/menu',
      name: 'Menu'
    },
    {
      path: '/gallery',
      name: 'Gallery'
    },
    {
      path: '/contact',
      name: 'Contact'
    }
  ];

  const location = useLocation();

  return (
    <div>
      <nav className="bg-dark text-light sticky-top">
        <Navbar dark expand="md">
          <NavbarBrand href="/"><strong>New China II</strong></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {
                paths.map(pages => (
                  <NavItem key={pages.name}>
                    <NavLink style={{ fontSize: '1.4em' }} tag={Link} to={pages.path} active={location.pathname === pages.path} onClick={() => toggle()}>{pages.name}</NavLink>
                  </NavItem>
                ))
              }
            </Nav>
          </Collapse>
        </Navbar>
        <UncontrolledAlert color="light" className="mb-0" style={{ textAlign: "center", fontSize: "1em" }}>
          <a href="https://maps.google.com/maps?ll=28.812757,-81.353215&z=16&t=m&hl=en&gl=US&mapclient=embed&daddr=China%20II%205228%20FL-46%20Sanford%2C%20FL%2032771@28.8127566,-81.3532146" className="font-weight-bold" target="_blank" rel="noopener noreferrer">5228 W SR 46 Sanford, FL, 32771</a> Call us to order for take out: <a href="tel:4076888998" target="_blank" rel="noopener noreferrer" className="font-weight-bold">407 688 8998</a>
        </UncontrolledAlert>
      </nav>
      <main>
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default withRouter(Navigation);