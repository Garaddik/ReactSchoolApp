import React, { Component } from 'react'
import { Table, Button } from 'semantic-ui-react'
import './Results.css'
import UpdateSingleStudent from './UpdateSingleStudent'

export default class AddResultsTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            studentMarksList: this.props.results,
            isdisabled: true
        }
        this.editResults = this.editResults.bind(this)
        this.updateMarks = this.updateMarks.bind(this)
        this.submitUpdatedResults = this.submitUpdatedResults.bind(this)
    }

    editResults() {
        this.setState({
            isdisabled: false
        })
    }

    updateMarks(studentId, subjectMarks) {
        let studentMarksList = this.state.studentMarksList;
        studentMarksList = studentMarksList.filter(function (el) { return el.studentId !== studentId; });
        studentMarksList.push({
            studentId: studentId,
            subjectMarksUpdates: subjectMarks,
        })
        this.setState({
            studentMarksList: studentMarksList
        })
    }

    submitUpdatedResults = () => {
        const { actions, dispatch, schoolId, examSchedule } = this.props
        dispatch(actions.updateResults(schoolId, this.state.studentMarksList, examSchedule.esId))
        this.setState({
            isdisabled: true
        })
    }

    render() {
        const { examSchedule, results, school, studentResult} = this.props
        let examSubjects = examSchedule.essList
        const updateMarks = this.updateMarks
        return (
            <div className='table-styling'>
                <Table celled structured id="table">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell rowSpan='2' textAlign='center'>Name</Table.HeaderCell>
                            <Table.HeaderCell colSpan={this.state.isdisabled ? examSubjects.length + 1 : examSubjects.length} textAlign='center'>Subjects</Table.HeaderCell>
                        </Table.Row>
                        <Table.Row>
                            {examSubjects && examSubjects.map((s, i) => <Table.HeaderCell key={i} textAlign='center'>{s.subject.name + ' '} (Max Marks:{s.maxMarks})</Table.HeaderCell>)}
                            {
                                this.state.isdisabled &&
                                <Table.HeaderCell textAlign='center'>Actions</Table.HeaderCell>
                            }                            
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>{
                        results && results.map((result, i) => {
                            return (
                                <UpdateSingleStudent isdisabled={this.state.isdisabled} key={i} 
                                examSubjects={examSubjects} result={result} updateMarks={updateMarks} school={school}
                                examSchedule={examSchedule} actions={this.props.actions} dispatch={this.props.dispatch}
                                studentResult={studentResult}/>
                            )
                        })}
                    </Table.Body>
                </Table>
                {
                    this.state.isdisabled &&
                    <Button basic color='teal' type="button" style={{ marginBottom: '15px' }} onClick={this.editResults}>
                        Edit  Results
                    </Button>
                }
                {
                    !this.state.isdisabled &&
                    <Button basic color='teal' type="button" style={{ marginBottom: '15px' }} onClick={this.submitUpdatedResults}>
                        Update  Results
                    </Button>
                }
            </div>
        )
    }
}