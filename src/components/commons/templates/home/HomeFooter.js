import React,{Component} from 'react'
import {Menu} from 'semantic-ui-react'
import './HomeFooter.css'
import {NavLink} from 'react-router-dom'

class HomeFooter extends Component{

    render(){
        const {school} = this.props
        return(
            <Menu className="ui bottom fixed menu ui stackable">
            { school.schoolAdmins &&
                <Menu.Item as={NavLink} className="ui left floated" to="/dashboard/template" content="Dashboard" />
            }
                <Menu.Item as={NavLink} to="/aboutus" content="About" />
                <Menu.Item as={NavLink} to="/contact" content="Contact Us" />
                <Menu.Item as={NavLink} to="/privacy" content="Privacy" />
                <Menu.Item as={NavLink} to="/terms" content="Terms" />
            </Menu>
        )
    }
}

export default HomeFooter