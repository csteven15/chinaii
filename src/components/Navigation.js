import React, { Component } from 'react';
import {
  Header,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

function isHomePath(path) {
  if (path === '/') {
    return true;
  } else {
    return false;
  }
}

const navigationMenu = [
  {
    path: '/',
    pathname: 'Home'
  },
  {
    path: '/menu',
    pathname: 'Menu'
  },
  {
    path: '/gallery',
    pathname: 'Gallery'
  },
  {
    path: '/contact',
    pathname: 'Contact'
  }
]

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='China II'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Best New York Style Chinese Take Out in Sanford, FL.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
  </Container>
)

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{
              minHeight: isHomePath(this.props.location.pathname) ? 500 : 0,
              padding: isHomePath(this.props.location.pathname) ? '1em 0em' : 0
            }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Menu.Menu position='left'>
                <Menu.Item as={Link} to='/'>China II</Menu.Item>
              </Menu.Menu>
              <Menu.Menu position='right'>
                {
                  navigationMenu.map(nav => (
                    <Menu.Item key={nav.pathname} as={Link} to={nav.path} active={this.props.location.pathname === nav.path}>{nav.pathname}</Menu.Item>
                  ))
                }
              </Menu.Menu>
            </Menu>
            {
              isHomePath(this.props.location.pathname) ? <HomepageHeading /> : null
            }
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

const Desktop = withRouter(DesktopContainer);

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
            <Menu.Item as={Link} to='/'>China II</Menu.Item>
            {
              navigationMenu.map(nav => (
                <Menu.Item key={nav.pathname} as={Link} to={nav.path} active={this.props.location.pathname === nav.path}>{nav.pathname}</Menu.Item>
              ))
            }
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{
              minHeight: isHomePath(this.props.location.pathname) ? 500 : 0,
              padding: isHomePath(this.props.location.pathname) ? '1em 0em' : 0
            }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item>
                  China II
                </Menu.Item>
              </Menu>
            </Container>
            {
              isHomePath(this.props.location.pathname) ? <HomepageHeading mobile /> : null
            }
          </Segment>
          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

const Mobile = withRouter(MobileContainer);

const ResponsiveContainer = ({children}) => (
  <div>
    <Desktop>{children}</Desktop>
    <Mobile>{children}</Mobile>
  </div>
)

const Navigation = ({children}) => (
  <ResponsiveContainer>
    {children}
  </ResponsiveContainer>
)
export default Navigation;
