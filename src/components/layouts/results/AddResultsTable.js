import React, { Component } from 'react'
import { Table, Button } from 'semantic-ui-react'
import './Results.css'
import SingleStudent from './SingleStudent'

export default class AddResultsTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            studentMarksList: [],
        }
        this.addResults = this.addResults.bind(this)
        this.saveMarks = this.saveMarks.bind(this)
    }

    saveMarks(studentId, subjectMarks) {
        let studentMarksList = this.state.studentMarksList;
        studentMarksList = studentMarksList.filter(function (el) { return el.studentId !== studentId; });
        studentMarksList.push({
            studentId: studentId,
            subjectMarks: subjectMarks,
        })
        this.setState({
            studentMarksList: studentMarksList
        })
        console.log(JSON.stringify(this.state.studentMarksList))
    }

    componentWillMount() {
        const { students, examSchedule } = this.props
        let studentMarksList = []
        const examSubjects = examSchedule.essList
        for (var student of students) {
            var subjectMarks = []
            for (var subject of examSubjects) {
                subjectMarks.push({
                    subjectId: subject.subject.subjectId,
                    marks: parseFloat(0)
                })
            }
            studentMarksList.push({
                studentId: student.studentId,
                subjectMarks: subjectMarks
            })
        }
        this.setState({
            studentMarksList: studentMarksList
        })

    }

    addResults = () => {
        const { actions, dispatch, schoolId, examSchedule } = this.props
        dispatch(actions.addResults(schoolId, this.state.studentMarksList, examSchedule.esId))
    }

    render() {
        const { examSchedule, students } = this.props
        let examSubjects = examSchedule.essList
        const saveMarks = this.saveMarks
        return (
            <div className='table-styling'>
                <Table celled structured id="table">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell rowSpan='2' textAlign='center'>Name</Table.HeaderCell>
                            <Table.HeaderCell colSpan={examSubjects.length} textAlign='center'>Subjects</Table.HeaderCell>
                        </Table.Row>
                        <Table.Row>
                            {examSubjects && examSubjects.map((s, i) => <Table.HeaderCell key={i} textAlign='center'>{s.subject.name + ' '} (Max Marks:{s.maxMarks})</Table.HeaderCell>)}
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>{
                        students && students.map((student, i) => {
                            return (
                                <SingleStudent key={i} examSubjects={examSubjects} student={student} saveMarks={saveMarks} />
                            )
                        })}
                    </Table.Body>
                </Table>
                <Button basic color='teal' type="button" style={{ marginBottom: '15px' }} onClick={this.addResults}>
                    Add Results
                </Button>
            </div>
        )
    }
}