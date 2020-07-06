import React, { Component } from 'react'
import { Button, Input,Confirm } from 'semantic-ui-react'
import PropTypes from 'prop-types'

class Staff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: true,
            staff: {
                staffId: this.props.staff.staffId,
                name: this.props.staff.name,
                open:false
            }
        }
        this.showUpdateButton = this.showUpdateButton.bind(this)
        this.updateStaffName = this.updateStaffName.bind(this)
        this.updateStaff = this.updateStaff.bind(this)
        this.deleteStaff = this.deleteStaff.bind(this)
        this.confirmDelete = this.confirmDelete.bind(this)
        this.handleCancel = this.handleCancel.bind(this)

    }

    confirmDelete() {

        this.setState({
            open: true
        })
    }

    handleCancel() {
        this.setState({
            open: false
        })
    }

    showUpdateButton = () => {
        this.setState({
            isEdit: false
        })
    }
    updateStaffName = (event) => {
        this.setState({
            staff: {
                staffId: this.state.staff.staffId,
                name: event.target.value
            }
        })
    }

    updateStaff = () => {

        const { dispatch, actions, school } = this.props
        dispatch(actions.updateStaff(school.schoolId, this.state.staff))
        this.setState({
            isEdit: true
        })
    }

    deleteStaff = () => {
        const { dispatch, actions, school } = this.props
        dispatch(actions.deleteStaff(school.schoolId, this.props.staff.staffId))
        this.setState({
            open: false
        })
    }

    render() {
        const { staff, loadStaffDetails } = this.props
        return (
            <div className='field'>
                <Confirm
                        open={this.state.open}
                        header='Warning!'
                        onCancel={this.handleCancel}
                        onConfirm={this.deleteStaff}
                        content={"Permanently deletes "+ staff.firstName + " "+ staff.lastName +" information from school"}
                    />
                <div className='four fields'>
                    <div className='five wide field'>
                        <Input control='input' >{staff.firstName}</Input>
                    </div>
                    <div className="five wide field">
                        {
                            staff.lastName &&
                            <Input control='input' >{staff.lastName}</Input>
                        }
                    </div>
                    <div className="five wide field">
                        <Input control='input' >{staff.phoneNumber}</Input>
                    </div>
                    <div className='two wide field'>
                        <Button basic color='teal' type="button" onClick={() => loadStaffDetails(staff)}>Details</Button>
                    </div>
                    <div className='two wide field'>
                        <Button basic color='teal' type="button" onClick={() => this.confirmDelete()}>Delete</Button>
                    </div>
                </div>
            </div>
        )
    }
}

Staff.propTypes = {
    dispatch: PropTypes.func,
    actions: PropTypes.object,
    staff: PropTypes.object,
    updateTeacher: PropTypes.func
}

export default Staff