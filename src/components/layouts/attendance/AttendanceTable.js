import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Icon, Table, Button } from 'semantic-ui-react'
import TableExport from 'tableexport'
import moment from 'moment'
import './Attendance.css'

class AttendanceTable extends Component {
    constructor(props){
        super(props)
        this.state = {
            visible : true
        }
        this.exportTable = this.exportTable.bind(this)
    }

    exportTable = () => {
        this.setState({
            visible : false
        })
        TableExport(document.getElementsByTagName("table"), {
            headers: true,
            footers: true,
            formats: ['xlsx', 'csv'],
            filename: 'id',
            bootstrap: false,
            exportButtons: true,
            position: 'bottom',
            ignoreRows: null,
            ignoreCols: null,
            trimWhitespace: true
        });
        document.getElementsByClassName('xlsx')[0].className = 'exportButton'
        document.getElementsByClassName('csv')[0].className = 'exportButton'
    }
    render(){
        let dates = []
        if(this.props.totalDays === 6){
             dates = Array(this.props.totalDays).fill().map((e, i) => moment(this.props.monthName).day(i+1).format('DD/MM'))    
        }
        else{
             dates = Array(this.props.totalDays).fill().map((e, i) => moment(this.props.monthName).date(i+1).format('DD/MM'))
        }
        let studentList = this.props.studentAttendanceList
        let rows = []
        Object.keys(studentList).map((key,j) => {
            let row = []
            let studentData = []
                for (let i = 0; i < dates.length; i++){
                    let isMissing = true
                    let headerDate = dates[i]
                        for( let j = 0; j < studentList[key].length; j++){
                            let requiredDateStr = moment(studentList[key][j].attendanceDate).format('DD/MM')
                            let updateDatetime = moment(studentList[key][j].updateDatetime).format('hh/mm')
                            let createDatetime = moment(studentList[key][j].createDatetime).format('hh/mm')
                            if (requiredDateStr === headerDate) {
                                if(this.props.school.attendanceType === 'daily'){
                                    if(createDatetime === updateDatetime || updateDatetime < 12/20){
                                        isMissing = false
                                        const isP = studentList[key][j].state === 'P'
                                        studentData.push(
                                        <Table.Cell key={Math.random()}textAlign='center'>
                                            <Icon color={isP ? 'green': 'red'} name={isP ? 'check': 'close'} size='large' />
                                            {isP ? 'P' : 'A'}
                                        </Table.Cell>
                                        )
                                            break
                                    }
                                    else{
                                        isMissing = false
                                        studentData.push(
                                            <Table.Cell key={Math.random()}textAlign='center'>
                                                <Icon color='orange' name='xing' size='large' />
                                                Halfday
                                            </Table.Cell>
                                            )
                                            break
                                    }
                                }
                                else{
                                    isMissing = false
                                    const isP = studentList[key][j].state === 'P'
                                    studentData.push(
                                    <Table.Cell key={Math.random()}textAlign='center'>
                                        <Icon color={isP ? 'green': 'red'} name={isP ? 'check': 'close'} size='large' />
                                        {isP ? 'P' : 'A'}
                                    </Table.Cell>
                                    )
                                        break
                                }
                            }
                        }
                        if(isMissing){
                            studentData.push(
                                <Table.Cell key={Math.random()} textAlign='center'>
                                    <Icon color='grey' name='minus' />
                                    NA
                                </Table.Cell>
                            )
                        }
                }
            row.push(<Table.Row key={j}><Table.Cell>{key}</Table.Cell>{studentData}</Table.Row>)
            rows.push(row)
            return {}
        })
        return(
            <div className='attendance-table'>
                <Table celled structured id="table">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell rowSpan='2' textAlign='center'>Name</Table.HeaderCell>
                            <Table.HeaderCell colSpan={this.props.totalDays} textAlign='center'>Dates</Table.HeaderCell>
                        </Table.Row>
                        <Table.Row textAlign='center' className="tableexport-string target">
                            {dates.map((s, i) => <Table.HeaderCell  className="tableexport-string target" key={i}>{s}</Table.HeaderCell>)}
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>{rows}</Table.Body>
                </Table>
                {
                    this.state.visible &&
                    <Button basic color='teal' type="button" onClick={this.exportTable}>
                        Export
                    </Button>
                }
            </div>
        )
    }
}
export default AttendanceTable