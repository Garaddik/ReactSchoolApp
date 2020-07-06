import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Container, Grid, Header, Menu, Responsive, Segment, Sidebar, Visibility } from 'semantic-ui-react'
import WebAppCarousel from './WebAppCarousel'
import StaffAppCarousel from './StaffAppCarousel'
import StudentCarousel from './StudentCarousel'
import './Home.css';

const getWidth = () => {
  const isSSR = typeof window === 'undefined'
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>

    <div className="tantrix-background-image">

    </div>

    <Header
      className="welcome-title"
      as='h1'
      content='Welcome to Shaala'
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '2em',
      }}
    />
    <Header
      as='h2'
      content='One stop solution for all your school needs'
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1em',
      }}
    />
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <HomepageHeading />
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Segment
          textAlign='center'
          style={{ minHeight: 350, padding: '1em 0em' }}
          vertical
        >
          <Container>
            <Menu pointing secondary size='large'>
            </Menu>
          </Container>
          <HomepageHeading mobile />
        </Segment>

        {children}
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row style={{ textAlign: '-webkit-center' }}>
          <Header as='h3' style={{ fontSize: '2em' }}>
            Say hello to the brand new Shaala app
            </Header>

          <div class="ui grid ui-box-container">
            <div class="two column row box-container shadow">
              <div class="column column1">
                <p style={{ fontSize: '1.33em', textAlign: 'left' }}>
                  <ul>
                    <li>
                      Manage every activity within your school from one single point.
                    </li>
                    <li>
                      Retrieve your students data, staff data, bus tracking or your exam scheduling at a click
                    </li>
                    <li>
                      The shaala app has been developed with prrime focus on the ease of use
                    </li>
                    <li>
                      The web platform requires no installations and no extra work from your end
                    </li>
                    <li>
                      You will have unlimited storage space for all your data and media
                    </li>
                    <li>
                      Access it anywhere anytime with the security of google
                    </li>
                  </ul>
                </p>
              </div>
              <div class="column column2 color-container">
                <WebAppCarousel />
              </div>
            </div>
          </div>
        </Grid.Row>

        <Grid.Row className="row2-container" style={{ textAlign: '-webkit-center' }}>
          <Header as='h3' style={{ fontSize: '2em' }}>
            Hello Teachers! presenting a revolutionary way which will change how you work
            </Header>

          <div class="ui grid ui-box-container">
            <div class="two column row box-container shadow">

              <div class="column column2 color-container">
                <StaffAppCarousel />
              </div>

              <div class="column column1 color-green">
                <p style={{ fontSize: '1.33em', textAlign: 'left' }}>
                  <ul>
                    <li>
                      The staff app is loaded with irresistible features
                    </li>
                    <li>
                      Take attendance, notify parents of the absentees communicate home work, timetable and tracking your bus
                    </li>
                    <li>
                      Everything is packaged beautifully with an eye on ease of use
                    </li>
                    <li>
                      No more maintainig fussy registers
                    </li>
                    <li>
                      Send out information anytime you want and the information is delivered safely and surely the selected students or the entire class
                    </li>
                    <li>
                      No signups and account creation needed, just add in your registered mobile number with the school and get going
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </Grid.Row>

        <Grid.Row className="row2-container last-container" style={{ textAlign: '-webkit-center' }}>
          <Header as='h3' style={{ fontSize: '2em' }}>
            Dear Parents, know your kids' activities at a single tap
            </Header>

          <div class="ui grid ui-box-container">
            <div class="two column row box-container shadow">
              <div class="column column1 color-purple">

                <p style={{ fontSize: '1.33em', textAlign: 'left' }}>
                  <ul>
                    <li>
                      Know your kids' attendance, results, progress instantly and securely
                    </li>
                    <li>
                      Track your school bus as you track an ola or uber ride
                    </li>
                    <li>
                      Get instant notification from the school in case of emergency
                    </li>
                    <li>
                      Its amazingly simple to use and has everything that a parent would want
                    </li>
                    <li>
                      We know how much one hates creating an account, so you dont have to create an account here
                    </li>
                    <li>
                      Just login with your registered mobile number in the school and get going
                    </li>
                  </ul>
                </p>
              </div>
              <div class="column column2 color-container">
                <StudentCarousel />
              </div>
            </div>
          </div>
        </Grid.Row>
      </Grid>
    </Segment>
  </ResponsiveContainer>
)
export default HomepageLayout