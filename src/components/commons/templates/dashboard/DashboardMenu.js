import React,{Component} from 'react'
import {Menu} from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import './DashboardMenu.css'

export default class DashboardMenu extends Component {
    constructor(props){
        super(props)
        
        this.state = {
                    activeItem:"Dashboard",
                    redirect : false
        }
        this.menuSelecting = this.menuSelecting.bind(this)
        this.renderRedirect = this.renderRedirect.bind(this)
    }

    menuSelecting = (e,{name}) => {
        this.setState({
            activeItem:name,
            redirect: true
        })
    }

    renderRedirect = (name) => {
        if (this.state.redirect) {
            switch(this.state.activeItem){

                case 'Standards': return <Redirect to='/dashboard/standards' />

                case 'Subjects' : return <Redirect to='/dashboard/subjects' />

                case 'Dashboard'     : return <Redirect to='/dashboard/template' />

                case 'Students' : return <Redirect to='/dashboard/standardstudents' />

                case 'Staff' : return <Redirect to='/dashboard/staff' />

                case 'Attendance' : return <Redirect to='/dashboard/attendance' />

                case 'Timetable' : return <Redirect to='/dashboard/timetable' />

                case 'Notification' : return <Redirect to='/dashboard/notifications' />

                case 'Exams' : return <Redirect to='/dashboard/exams' />

                case 'Results' : return <Redirect to='/dashboard/results' />

                case 'Events' : return <Redirect to='/dashboard/events' />

                case 'AssociateStaffSubject' : return <Redirect to='/dashboard/sss' />
                
                case 'NewAdmission' : return <Redirect to='/dashboard/newadmission' />

                case 'Supervisors': return <Redirect to='/dashboard/supervisors' />

                case 'BusTracking' : return <Redirect to='/dashboard/bustracking' />

                default: return

            }
          
        }
      }

  render() {     
    const {activeItem,redirect} = this.state
    return (
      <Menu className="dashboard-menu-css" ui='true' pointing secondary vertical >
        <Menu.Item style={{fontWeight : 'bold'}}>
            Academics
          <Menu.Menu style={{marginLeft : '0.5em'}}>
          {redirect && this.renderRedirect()}
                <Menu.Item className='menuItems' name='Dashboard' active= {activeItem === 'Dashboard'} onClick={this.menuSelecting}/>
                <Menu.Item className='menuItems' name="Notification" active={activeItem === "Notification"} onClick={this.menuSelecting}/> 
                <Menu.Item className='menuItems' name="Standards" active= {activeItem === 'Standards'} onClick={this.menuSelecting}/>
                <Menu.Item className='menuItems' name="Subjects" active= {activeItem === 'Subjects'} onClick={this.menuSelecting}/>
                <Menu.Item className='menuItems' name="Staff" active= {activeItem === 'Staff'} onClick={this.menuSelecting}/>
                <Menu.Item className='menuItems' name="Students" active= {activeItem === 'Students'} onClick={this.menuSelecting}/>
                <Menu.Item className='menuItems' name="Attendance" active= {activeItem === 'Attendance'} onClick={this.menuSelecting}/>
                <Menu.Item className='menuItems' name="Timetable" active= {activeItem === 'Timetable'} onClick={this.menuSelecting}/>
                <Menu.Item className='menuItems' name="Exams" active={activeItem === "Exams"} onClick={this.menuSelecting}/> 
                <Menu.Item className='menuItems' name="Results" active= {activeItem === 'Results'} onClick={this.menuSelecting}/> 
                <Menu.Item className='menuItems' name="Events" active={activeItem === "Events"} onClick={this.menuSelecting}/>
                <Menu.Item className='menuItems' name="AssociateStaffSubject" active={activeItem === "AssociateStaffSubject"} onClick={this.menuSelecting}/>
          </Menu.Menu>
        </Menu.Item>
        <Menu.Item style={{fontWeight : 'bold'}}>
            Admission
          <Menu.Menu style={{marginLeft : '0.5em'}}>
          {redirect && this.renderRedirect()}
            <Menu.Item className='menuItems' name="NewAdmission" active={activeItem === "NewAdmission"} onClick={this.menuSelecting}/>
          </Menu.Menu>
        </Menu.Item>

      
        <Menu.Item style={{fontWeight : 'bold'}}>
            Support Staff
          <Menu.Menu style={{marginLeft : '0.5em'}}>
          {redirect && this.renderRedirect()}
              <Menu.Item className='menuItems' name="Supervisors" active= {activeItem === 'Supervisors'} onClick={this.menuSelecting}/>
               </Menu.Menu>
        </Menu.Item>
    
        <Menu.Item style={{fontWeight : 'bold'}}>
            BusTracking
          <Menu.Menu style={{marginLeft : '0.5em'}}>
          {redirect && this.renderRedirect()}
              <Menu.Item className='menuItems' name="BusTracking" active= {activeItem === 'BusTracking'} onClick={this.menuSelecting}/>
               </Menu.Menu>
        </Menu.Item>
      </Menu>
    )
  }
}
