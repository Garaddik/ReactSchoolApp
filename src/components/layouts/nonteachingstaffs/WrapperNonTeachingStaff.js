import React, {Component} from 'react'
import PropTypes from 'prop-types'
import NonTeachingStaffs from './NonTeachingStaffs'
import NonTeachingStaffDetails from './NonTeachingStaffDetails'
import EditNonTeachingStaffDetails from './EditNonTeachingStaffDetails'
import { Message } from 'semantic-ui-react'

class WrapperNonTeachingStaff extends Component{

    constructor(props){
        super(props)

        this.state = {
            view: 1,
            nonTeachingStaff:{},
            updated: false,
            visible: true
        }

        this.loadNonTeachingStaffDetails = this.loadNonTeachingStaffDetails.bind(this)
        this.editNonTeachingStaffDetails = this.editNonTeachingStaffDetails.bind(this)
        this.loadUpdatedNonTeachingStaffDetails = this.loadUpdatedNonTeachingStaffDetails.bind(this)
        this.loadNonTeachingStaffList = this.loadNonTeachingStaffList.bind(this)
    }

    loadNonTeachingStaffDetails = (nonTeachingStaff) => {
        this.setState({
            view: 2,
            nonTeachingStaff: nonTeachingStaff
        })
    }

    loadNonTeachingStaffList = () => {
        this.setState({
            view : 1
        })
    }

    editNonTeachingStaffDetails = () => {
        this.setState({
            view: 3,
            updated: false,
            visible: true
        })
    }

    loadUpdatedNonTeachingStaffDetails = (nonTeachingStaff) => {
        this.setState({
            view: 2,
            nonTeachingStaff: nonTeachingStaff,
            visible:true,
            updated: true
        })
        setTimeout(() => {
            this.setState({
                visible : false
            })
        },5000)
    }

    render(){
        const {dispatch, actions , nonTeachingStaffs, school } = this.props
        return(
            <div>
                {   
                    this.state.view === 2 && this.state.updated === true && this.state.visible &&
                    <Message success >
                        <Message.Header>Supervisor Details Updated</Message.Header>
                    </Message>
                }
                { 
                    this.state.view === 1 &&
                    <NonTeachingStaffs dispatch={dispatch} actions = {actions} nonTeachingStaffs = {nonTeachingStaffs} school = {school} 
                    loadNonTeachingStaffDetails = {this.loadNonTeachingStaffDetails}/>
                }

                {
                    this.state.view === 2 &&
                    <NonTeachingStaffDetails school = {this.state.school} nonTeachingStaff={this.state.nonTeachingStaff}  
                    editNonTeachingStaffDetails = {this.editNonTeachingStaffDetails} updated={this.state.updated}
                    loadNonTeachingStaffList = {this.loadNonTeachingStaffList}/>}

                {
                    this.state.view === 3 &&
                    <EditNonTeachingStaffDetails dispatch={dispatch} actions = {actions} school = {school} nonTeachingStaff = {this.state.nonTeachingStaff}
                     loadUpdatedNonTeachingStaffDetails = {this.loadUpdatedNonTeachingStaffDetails}
                     loadNonTeachingStaffDetails = {this.loadNonTeachingStaffDetails}/>
                }
            </div>
        )
    }
}

NonTeachingStaffs.propTypes = {
    dispatch: PropTypes.func,
    actions: PropTypes.object,
    students: PropTypes.array,
    school: PropTypes.object,
}

export default WrapperNonTeachingStaff