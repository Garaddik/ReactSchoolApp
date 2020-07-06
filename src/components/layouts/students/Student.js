import React, { Component } from 'react'
import { Button, Input, Confirm } from 'semantic-ui-react'
import PropTypes from 'prop-types'

class Student extends Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
        this.confirmDelete = this.confirmDelete.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.handleConfirm = this.handleConfirm.bind(this)
    }

    handleConfirm() {
        const { student, standardId, deleteStudent } = this.props
        deleteStudent(student, standardId)
        this.setState({
            open: false
        })
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

    render() {
        const { student, loadStudentDetails, standardId, index } = this.props
        return (
            <div>
                <Confirm
                    open={this.state.open}
                    header='Warning!'
                    onCancel={this.handleCancel}
                    onConfirm={this.handleConfirm}
                    content={"Permanently deletes "+ student.firstName + " "+ student.lastName +" information from school"}
                />
                <div className='six fields'>
                    <div className='one wide field'>
                        <label>{(index + 1)}</label>
                    </div>
                    <div className='five wide field'>
                        <Input control='input' >{student.firstName}</Input>
                    </div>
                    <div className="five wide field">
                    {
                        student.lastName &&
                        <Input control='input' >{student.lastName}</Input>
                    }
                    </div>
                    <div className="five wide field">
                    {
                        student.phoneNumber &&
                        <Input control='input' >{student.phoneNumber}</Input>
                    }
                    </div>
                    <div className='two wide field'>
                        <Button basic color='teal' type="button" onClick={() => loadStudentDetails(student, standardId)}>Details</Button>
                    </div>
                    <div className='two wide field'>
                        <Button basic color='teal' type="button" onClick={() => this.confirmDelete()}>Delete</Button>
                    </div>
                </div>
            </div>
        )
    }
}

Student.propTypes = {
    student: PropTypes.object,
    loadStudentDetails: PropTypes.func
}

export default Student