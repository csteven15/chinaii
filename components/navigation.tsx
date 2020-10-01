import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Alert
} from 'reactstrap'
import Footer from './footer'

export default function Navigation(props) {

  const [isOpen, setIsOpen] = useState(false)

  const [visible, setVisible] = useState(true)

  const onDismiss = () => setVisible(false)

  const toggle = () => setIsOpen(!isOpen)

  const router = useRouter()

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
  ]

  return (
    <>
      <nav className="bg-dark text-light sticky-top">
        <Navbar dark expand="md">
          <NavbarBrand onClick={() => router.push('/')} style={{ cursor: "pointer", fontSize: "26px" }} className="font-weight-bold">New China II</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {
                paths.map(pages => (
                  <NavItem key={pages.name} style={{ cursor: "pointer" }}>
                    <Link href={pages.path}><NavLink style={{ fontSize: '22px' }} href={pages.path} active={router.pathname === pages.path} onClick={() => isOpen && toggle()}>{pages.name}</NavLink></Link>
                  </NavItem>
                ))
              }
            </Nav>
          </Collapse>
        </Navbar>
        <Alert color="light" isOpen={visible} toggle={onDismiss} className="mb-0" style={{ textAlign: "center", fontSize: "1em" }}>
          <a href="https://maps.google.com/maps?ll=28.812757,-81.353215&z=16&t=m&hl=en&gl=US&mapclient=embed&daddr=China%20II%205228%20FL-46%20Sanford%2C%20FL%2032771@28.8127566,-81.3532146" className="font-weight-bold" target="_blank" rel="noopener noreferrer">5228 W SR 46 Sanford, FL, 32771</a> Call us to order for take out: <a href="tel:4076888998" target="_blank" rel="noopener noreferrer" className="font-weight-bold">407 688 8998</a>
        </Alert>
      </nav>
      <main>
        {props.children}
      </main>
      <Footer />
    </>
  )
}