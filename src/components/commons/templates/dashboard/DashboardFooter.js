import React,{Component} from 'react'
import {Menu} from 'semantic-ui-react'
import './DashboardFooter.css'
import {NavLink} from 'react-router-dom'

class DashboardFooter extends Component{

    render(){
        return(
            
            <Menu fixed="bottom" className="ui clearing" pointing>
                    <Menu.Item as={NavLink} className="ui right floated" to="/aboutus" content="About" />
                    <Menu.Item as={NavLink} to="/contact" content="Contact Us" />
                    <Menu.Item as={NavLink} to="/privacy" content="Privacy" />
                    <Menu.Item as={NavLink} to="/terms" content="Terms" />
            </Menu>
        )
    }
}

export default DashboardFooter