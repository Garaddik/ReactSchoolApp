import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'

class SingleResult extends Component {
    constructor(props) {
        super(props)
        this.state = {
            marks: this.props.subjectM ? this.props.subjectM.marks : parseFloat(0)
        }
        this.handleChange = this.handleChange.bind(this)
        this.updateMarks = this.updateMarks.bind(this)
    }

    updateMarks(studentId, subjectId, resultId) {
        let marks = this.state.marks
        if (this.state.marks === '' || this.state.marks === null) {
            marks = parseFloat(0)
            this.setState({
                marks: parseFloat(0)
            })
        }
        this.props.updateMarks(studentId, subjectId, marks, resultId)
    }

    handleChange = (event) => {
        if (event.target.value === '') {
            this.setState({
                marks: ''
            })
        } else
            if (this.props.maxMarks >= parseFloat(event.target.value)) {
                this.setState({
                    marks: event.target.value
                })
            }
    }

    render() {
        const { studentId, subjectM, isdisabled } = this.props
        if (isdisabled)
            return (
                <label> {this.state.marks} </label>
            )
        else
            return (
                <Input type="number" onChange={this.handleChange} value={this.state.marks}
                    control='input' disabled={isdisabled} placeholder='Enter Marks' style={{ width: '8rem' }}
                    onBlur={() => this.updateMarks(studentId, subjectM.subjectId, subjectM.resultId)} />
            )
    }
}

export default SingleResult