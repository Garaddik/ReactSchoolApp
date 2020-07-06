import React, { Component } from 'react'
import SingleResult from './SingleResult'
import { Table } from 'semantic-ui-react'

class SingleStudent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            subjectMarks: []
        }
        this.saveMarks = this.saveMarks.bind(this);
    }

    componentWillMount() {
        let subjectMarks = []
        const {examSubjects} = this.props
        for(var subject of examSubjects) {
            subjectMarks.push({
                subjectId: subject.subject.subjectId,
                marks: parseFloat(0)
            })
        }
        this.setState({
            subjectMarks: subjectMarks
        })
    }

    saveMarks(studentId, subjectId, marks) {
        let subjectMarks = this.state.subjectMarks
        subjectMarks = subjectMarks.filter(function (el) { return el.subjectId !== subjectId; });
        subjectMarks.push({
            subjectId: subjectId,
            marks: marks
        })
        this.setState({
            subjectMarks: subjectMarks
        })
                
        this.props.saveMarks(studentId, subjectMarks);
    }

    render() {
        const { examSubjects, student } = this.props
        const saveMarks = this.saveMarks
        return (
            <Table.Row>
                <Table.Cell textAlign='center'>
                    {
                        student.firstName + " " + student.lastName
                    }
                </Table.Cell>
                {
                    examSubjects && examSubjects.map((subject, index) => {
                        return (
                            <Table.Cell key={index} textAlign='center'>
                                <SingleResult student={student} maxMarks = {subject.maxMarks} subject={subject.subject} saveMarks={saveMarks} />
                            </Table.Cell>)
                    })}
            </Table.Row>
        )
    }
}

export default SingleStudent