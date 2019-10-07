import React, { useState } from "react";
import {
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Dropdown
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { withRouter, useLocation } from "react-router-dom";
import PageHeadings from "./PageHeadings";
import Footer from "./Footer";

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const navigationMenu = [
  {
    path: '/menu',
    pathname: 'Menu',
    subMenu: [
      {
        path: '/menu-main',
        pathname: 'Main Menu',
      },
      {
        path: '/menu-lunch',
        pathname: 'Lunch',
      },
      {
        path: '/menu-combo',
        pathname: 'Special Combinations',
      },
      {
        path: '/menu-specials',
        pathname: 'China II Specials',
      },
      {
        path: '/menu-specialties',
        pathname: 'Specialties',
      },
      {
        path: '/menu-diet',
        pathname: 'Diet',
      }
    ]
  },
  {
    path: '/gallery',
    pathname: 'Gallery'
  },
  {
    path: '/contact',
    pathname: 'Contact'
  }
];

function DesktopContainer(props) {
  const path = props.location.pathname;
  const children = React.Children.map(props.children, child => {
    return React.cloneElement(child, {
      mobile: false,
    })
  });

  let location = useLocation();
  console.log(location)


  return (
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <Segment
        inverted
        textAlign="center"
        style={{
          padding: "1em 0em",
        }}
        vertical
      >
        <Menu
          fixed="top"
          inverted
          secondary
          pointing
          size="large"
          style={{ color: "#ffffff", backgroundColor: "#1b1c1d", fontSize: '1.2em' }}
        >
          <Menu.Menu position="left">
            <Menu.Item as={Link} to="/">
              China II
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position="right">
              {
                navigationMenu.map((menu) => (
                  menu.pathname === 'Menu' ? 
                  <Dropdown item text='Menu' className='link item' key={menu.pathname}>
                    <Dropdown.Menu>
                      {
                        navigationMenu[0].subMenu.map((subMenu) => (
                          <Dropdown.Item
                            key={subMenu.pathname}
                            as={Link}
                            to={subMenu.path}
                            active={props.location.pathname === subMenu.path}
                          >
                            {subMenu.pathname}
                          </Dropdown.Item>
                        ))
                      }
                    </Dropdown.Menu>
                  </Dropdown>
                  :
                  <Menu.Item
                    key={menu.pathname}
                    as={Link}
                    to={menu.path}
                    active={props.location.pathname === menu.path}
                  >
                    {menu.pathname === 'Menu' ? null : menu.pathname}
                  </Menu.Item>
                ))
              }
          </Menu.Menu>
        </Menu>
      </Segment>
      <PageHeadings path={path} mobile={false} />
      {children}
      <Footer />
    </Responsive>
  );
}

const Desktop = withRouter(DesktopContainer);

function MobileContainer(props) {
  const [sidebarOpened, setSidebarOpened] = useState(false)
  const path = props.location.pathname
  const children = React.Children.map(props.children, child => {
    return React.cloneElement(child, {
      mobile: true,
    })
  })

  return (
    <Responsive
      as={Sidebar.Pushable}
      getWidth={getWidth}
      maxWidth={Responsive.onlyMobile.maxWidth}
      style={{ transform: "none" }}
    >
      <Sidebar
        as={Menu}
        animation="overlay"
        inverted
        onHide={() => setSidebarOpened(false)}
        vertical
        visible={sidebarOpened}
        style={{ position: "fixed" }}
      >
        <Menu.Item as={Link} to="/" onClick={() => setSidebarOpened(false)}>
          China II
        </Menu.Item>
        {
          navigationMenu.map((menu) => (
            menu.pathname === 'Menu' ?
            <Menu.Item
              key={menu.pathname}
            >
              <Menu.Header>Menu</Menu.Header>
              <Menu.Menu>
                {
                  menu.subMenu.map((subMenu) => (
                    <Menu.Item
                      key={subMenu.pathname}
                      as={Link}
                      active={props.location.pathname === subMenu.path}
                      to={subMenu.path}
                    >
                      {subMenu.pathname}
                    </Menu.Item>
                  ))
                }
              </Menu.Menu>
            </Menu.Item>
            :
            <Menu.Item
              key={menu.pathname}
              as={Link}
              active={props.location.pathname === menu.path}
              to={menu.path}
            >
              {menu.pathname}
            </Menu.Item>
          ))
        }
      </Sidebar>
      <Sidebar.Pusher dimmed={sidebarOpened}>
        <Segment
          inverted
          textAlign="center"
          style={{
            padding: "1em 0em",
          }}
          vertical
        >
          <Container text>
            <Menu
              text
              fixed="top"
              size="large"
              style={{ backgroundColor: "#1b1c1d" }}
            >
              <Menu.Item onClick={() => setSidebarOpened(true)}>
                <Icon name="sidebar" inverted />
              </Menu.Item>
              <Menu.Item style={{ color: "#ffffff" }}>China II</Menu.Item>
            </Menu>
          </Container>
        </Segment>
        <PageHeadings path={path} mobile={true} />
        {children}
        <Footer />
      </Sidebar.Pusher>
    </Responsive>
  );
}

const Mobile = withRouter(MobileContainer);

const ResponsiveContainer = ({ children }) => (
  <div>
    <Desktop>{children}</Desktop>
    <Mobile>{children}</Mobile>
  </div>
);

const Navigation = ({ children }) => (
  <ResponsiveContainer>{children}</ResponsiveContainer>
);
export default Navigation;