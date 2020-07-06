import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Icon, Popup, Grid } from 'semantic-ui-react'
import './HomeHeader.css'
import { TOKEN } from '../../../../actions/actionType'
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login'
import { USER_LOGOUT } from '../../../../actions/actionType'
import {googleClientId} from '../../../../config'

class HomeHeader extends Component {
    constructor(props) {
        super(props)
        this.onFailure = this.onFailure.bind(this)
        this.onSucces = this.onSucces.bind(this)
        this.state = {
            redirect: false,
            path: ''
        }
        this.logout = this.logout.bind(this)
    }

    dashboard() {
        window.location.href = '/dashboard/template'
    }

    logout() {
        window.location.replace("/")
        const { dispatch } = this.props
        const logoutAction = {
            type: USER_LOGOUT
        }
        dispatch(logoutAction)
    }

    onSucces(response) {
        const { actions, dispatch } = this.props
        var profileInfo = {
            firstName: response.profileObj.givenName,
            lastName: response.profileObj.familyName,
            email: response.profileObj.email,
            saId: response.profileObj.googleId,
            idToken: response.Zi.id_token
        }
        const logoutAction = {
            type: TOKEN,
            token: {
                id_token: response.Zi.id_token
            }
        }
        dispatch(logoutAction)
        let responseObj = actions.loginSuccess(profileInfo)
        responseObj.then(function (responseObj) {
            if (responseObj) {
                this.setState({
                    redirect: true,
                    path: '/redirect/' + responseObj.school.schoolId + "/" + responseObj.isFirstTime
                })
            }
        }.bind(this))
    }
    
    onFailure(response) {
        console.log("Unable to login!")
    }


    render() {
        const { school } = this.props
        const { redirect, path } = this.state
        return (
            <div className="ui top fixed menu header-content">
                {
                    redirect &&
                    <Redirect to={path} />
                }
                <a href="/" className="ui primary"> Taantrix </a>
                {
                    school.schoolAdmins ?
                        <Popup trigger={<Button className="ui right floated primary simple-button">
                            {school.schoolAdmins[0].firstName}
                            <Icon className="icon-css" name="caret down"></Icon>
                        </Button>
                        } on='click'>
                            <Grid divided columns='equal'>
                                <Grid.Row>
                                    <GoogleLogout
                                        render={renderProps => (
                                            <Button className="ui right floated primary simple-button" onClick={this.logout}>Log out<Icon className="right" name="log out"></Icon></Button>
                                        )}
                                        buttonText="Logout"
                                        onLogoutSuccess={this.logout}
                                    >
                                    </GoogleLogout>
                                </Grid.Row>
                                <Grid.Row>
                                    <Button className="ui right floated primary simple-button" onClick={this.dashboard}>Dashboard</Button>
                                </Grid.Row>
                            </Grid>
                        </Popup>
                        :
                        <GoogleLogin
                            clientId={googleClientId}
                            render={renderProps => (
                                <Button className="ui primary simple-button"
                                    onClick={renderProps.onClick}>Log In / Sign Up
                        <Icon className="sign in alternate icon right"></Icon>
                                </Button>
                            )}
                            buttonText="Login"
                            onSuccess={this.onSucces}
                            onFailure={this.onFailure}
                        />
                }
            </div>
        )
    }
}

export default HomeHeader