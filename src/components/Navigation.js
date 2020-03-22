import React, { useState } from 'react';
import { Link, withRouter, useLocation } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
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
                  <NavLink tag={Link} to={pages.path} active={location.pathname === pages.path} onClick={() => toggle()}>{pages.name}</NavLink>
                </NavItem>
              ))
            }
          </Nav>
        </Collapse>
      </Navbar>
      </nav>
      <main>
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default withRouter(Navigation);