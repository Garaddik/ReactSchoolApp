import React,{Component} from "react"
import { Menu, Icon} from 'semantic-ui-react'
import './SchoolHomePage.css'

class SchoolContact extends Component {

    render() {
      const {school} = this.props
      return (
            <Menu className="template-view">
              <Menu.Item name='phone'>
                <Icon name='phone'/>
                {school.phoneNumber}
              </Menu.Item>
              <Menu.Item name='email' className="ui right floated">
                <Icon name='mail'/>
                {school.email}
              </Menu.Item>
          </Menu>
      )
    }
  }
export default SchoolContact
