import React, { Component } from 'react'
import UpdateSingleResult from './UpdateSingleResult'
import { Table, Button, Modal } from 'semantic-ui-react'
import PrintResult from './PrintResult'

class SingleStudent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            subjectMarks: this.props.result.subjectMarks
        }
        this.updateMarks = this.updateMarks.bind(this);
    }

    updateMarks(studentId, subjectId, marks, resultId) {
        let subjectMarks = this.state.subjectMarks
        subjectMarks = subjectMarks.filter(function (el) { return el.subjectId !== subjectId; });
        subjectMarks.push({
            subjectId: subjectId,
            marks: marks,
            resultId: resultId
        })
        this.setState({
            subjectMarks: subjectMarks
        })
        this.props.updateMarks(studentId, subjectMarks);
    }

    handleOpen = (studentId) => {
        const { examSchedule, school, actions, dispatch } = this.props
        dispatch(actions.getSelectedStudentResult(school.schoolId, examSchedule.esId, studentId))
    }

    render() {
        const { examSubjects, result, isdisabled, studentResult, school, examSchedule} = this.props
        const updateMarks = this.updateMarks
        return (
            <Table.Row>
                <Table.Cell textAlign='center'>
                    {
                        result.firstName + " " + result.lastName
                    }
                </Table.Cell>
                {
                    examSubjects && examSubjects.map((subject, index) => {
                        return result.subjectMarks && result.subjectMarks.map((subjectM, index) => {
                            if (subject.subject.subjectId === subjectM.subjectId) {
                                return (
                                    <Table.Cell key={index} textAlign='center'>
                                        <UpdateSingleResult maxMarks={subject.maxMarks} isdisabled={isdisabled} studentId={result.studentId} subjectM={subjectM} updateMarks={updateMarks} />
                                    </Table.Cell>)
                            } else
                                return null
                        })
                    })
                }
                {
                    isdisabled &&
                    <Table.Cell textAlign='center'>
                        <Modal
                            trigger={
                                <Button basic color='teal' type="button" onClick={() => this.handleOpen(result.studentId)}>
                                    Print
                                </Button>
                            } closeIcon
                        >
                            <Modal.Content>
                                <Modal.Description>
                                    <PrintResult studentResult={studentResult} school={school} result={result} examSchedule={examSchedule} />
                                </Modal.Description>
                            </Modal.Content>
                        </Modal>
                    </Table.Cell>
                }
            </Table.Row>
        )
    }
}

export default SingleStudent