import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Staffs from './Staffs'
import StaffDetails from './StaffDetails'
import EditStaffDetails from './EditStaffDetails'
import { Message } from 'semantic-ui-react'

class WrapperStaff extends Component{

    constructor(props){
        super(props)

        this.state = {
            view: 1,
            teacher:{},
            updated: false,
            visible: true
        }

        this.loadStaffDetails = this.loadStaffDetails.bind(this)
        this.editStaffDetails = this.editStaffDetails.bind(this)
        this.loadUpdatedStaffDetails = this.loadUpdatedStaffDetails.bind(this)
        this.loadStaffList = this.loadStaffList.bind(this)
    }

    loadStaffDetails = (staff) => {
        this.setState({
            view: 2,
            staff: staff
        })
    }

    loadStaffList = () => {
        this.setState({
            view : 1
        })
    }

    editStaffDetails = () => {
        this.setState({
            view: 3,
            updated: false,
            visible: true
        })
    }

    loadUpdatedStaffDetails = (staff) => {
        this.setState({
            view: 2,
            staff: staff,
            visible:true,
            updated: true
        })
        setTimeout(() => {
            this.setState({ visible: false })
            }, 5000)
    }

    render(){
        const {dispatch, actions , staffs, school } = this.props
        return(
            <div>
                {   
                    this.state.view === 2 && this.state.updated === true && this.state.visible &&
                    <Message success >
                        <Message.Header>Staff Details Updated</Message.Header>
                    </Message>
                }
                { 
                    this.state.view === 1 &&
                    <Staffs dispatch={dispatch} actions = {actions} staffs = {staffs} school = {school} 
                    loadStaffDetails = {this.loadStaffDetails}/>
                }

                {
                    this.state.view === 2 &&
                    <StaffDetails school = {this.state.school} staff={this.state.staff}  
                    editStaffDetails = {this.editStaffDetails} updated={this.state.updated}
                    loadStaffList = {this.loadStaffList}/>}

                {
                    this.state.view === 3 &&
                    <EditStaffDetails dispatch={dispatch} actions = {actions} school = {school} staff = {this.state.staff}
                     loadUpdatedStaffDetails = {this.loadUpdatedStaffDetails}/>
                }
            </div>
        )
    }
}

Staffs.propTypes = {
    dispatch: PropTypes.func,
    actions: PropTypes.object,
    students: PropTypes.array,
    school: PropTypes.object,
}

export default WrapperStaff