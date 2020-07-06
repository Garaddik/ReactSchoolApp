import React, {Component} from 'react'
import { Table} from 'semantic-ui-react'

export default class PreviousYearsStudents extends Component { 

    render(){
        const {students} = this.props
        return(
            <Table celled structured>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell rowSpan='1' textAlign='center' width='2'>Roll No</Table.HeaderCell>
                        <Table.HeaderCell rowSpan='1' textAlign='center' width='4'>Name</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    { students.map((student, index) => {
                        return(
                            <Table.Row key={index}>
                                <Table.Cell textAlign='center'>{index + 1}</Table.Cell>
                                <Table.Cell textAlign='center'>
                                    {student.firstName + ' ' + (student.lastName ? student.lastName : ' ')}
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        )
    }
}
