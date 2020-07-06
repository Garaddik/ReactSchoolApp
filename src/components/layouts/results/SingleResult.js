import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'

class SingleResult extends Component {

    constructor(props) {
        super(props)
        this.state = {
            marks: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.saveMarks = this.saveMarks.bind(this)
    }

    saveMarks(studentId, subjectId) {
        let marks = this.state.marks
        if (marks === '') {
            marks = parseFloat(0)
        }
        this.props.saveMarks(studentId, subjectId, this.state.marks)
    }

    handleChange = (event) => {
        if(event.target.value === ''){
            this.setState({
                marks: ''
            })
        }else 
        if (this.props.maxMarks >= parseFloat(event.target.value)) {
            this.setState({
                marks: parseFloat(event.target.value)
            })
        }
    }

    render() {
        const { student, subject } = this.props
        return (
            <Input type="number" onChange={this.handleChange} value={this.state.marks}
                control='input' placeholder='Enter Marks' style={{ width: '8rem' }}
                onBlur={() => this.saveMarks(student.studentId, subject.subjectId, this.state.marks)} />
        )
    }
}

export default SingleResult