import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import './DashboardHeader.css'
import { USER_LOGOUT } from '../../../../actions/actionType'
import { GoogleLogout } from 'react-google-login'

class DashboardHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
        this.logout = this.logout.bind(this)
    }

    logout() {

        window.location.replace("/")

        const { dispatch } = this.props
        const logoutAction = {
            type: USER_LOGOUT
        }
        dispatch(logoutAction)
    }

    render() {
        return (
            <div className="ui clearing segment header-content">
                <a href="/" className="large ui left floated primary"> Taantrix </a>
                <GoogleLogout
                    render={renderProps => (
                        <Button className="ui right floated primary simple-button" onClick={this.logout}>Log out<Icon className="right" name="log out"></Icon></Button>
                    )}
                    buttonText="Logout"
                    onLogoutSuccess={this.logout}
                >
                </GoogleLogout>
            </div>
        )
    }
}

export default DashboardHeader