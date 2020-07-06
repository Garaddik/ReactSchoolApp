import React, { Component } from 'react'
import { Button, Input,Confirm } from 'semantic-ui-react'
import PropTypes from 'prop-types'

class NonTeachingStaff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: true,
            nonTeachingStaff: {
                nonTeachingStaffId: this.props.nonTeachingStaff.nonTeachingStaffId,
                name: this.props.nonTeachingStaff.name,
                open:false
            }
        }
        this.showUpdateButton = this.showUpdateButton.bind(this)
        this.deleteNonTeachingStaff = this.deleteNonTeachingStaff.bind(this)
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

    deleteNonTeachingStaff = () => {
        const { dispatch, actions, school } = this.props
        dispatch(actions.deleteNonTeachingStaff(school.schoolId, this.props.nonTeachingStaff.nonTeachingStaffId))
        this.setState({
            open: false
        })
    }

    render() {
        const { nonTeachingStaff, loadNonTeachingStaffDetails } = this.props
        return (
            <div className='field'>
                <Confirm
                        open={this.state.open}
                        header='Warning!'
                        onCancel={this.handleCancel}
                        onConfirm={this.deleteNonTeachingStaff}
                        content={"Permanently deletes "+ nonTeachingStaff.firstName + " "+ nonTeachingStaff.lastName +" information from school"}
                    />
                <div className='four fields'>
                    <div className='five wide field'>
                        <Input control='input' >{nonTeachingStaff.firstName}</Input>
                    </div>
                    <div className="five wide field">
                        {
                            nonTeachingStaff.lastName &&
                            <Input control='input' >{nonTeachingStaff.lastName}</Input>
                        }
                    </div>
                    <div className="five wide field">
                        <Input control='input' >{nonTeachingStaff.phoneNumber}</Input>
                    </div>
                    <div className='two wide field'>
                        <Button basic color='teal' type="button" onClick={() => loadNonTeachingStaffDetails(nonTeachingStaff)}>Details</Button>
                    </div>
                    <div className='two wide field'>
                        <Button basic color='teal' type="button" onClick={() => this.confirmDelete()}>Delete</Button>
                    </div>
                </div>
            </div>
        )
    }
}

NonTeachingStaff.propTypes = {
    dispatch: PropTypes.func,
    actions: PropTypes.object,
    nonTeachingStaff: PropTypes.object,
    updateTeacher: PropTypes.func
}

export default NonTeachingStaff