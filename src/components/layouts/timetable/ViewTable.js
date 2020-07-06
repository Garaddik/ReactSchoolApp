import React, {Component} from 'react'
import { Table, Header } from 'semantic-ui-react'
import './Timetable.css'

const maxPeriodNumbers = ['Days', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII']
class ViewTable extends Component{

    getCells = (standardTimetable, index, i) => {
        let cells = []
        cells.push(
            <Table.Cell key={i + standardTimetable[index].day}>
              <Header as='h4' textAlign='center'>{standardTimetable[index].day}</Header>
            </Table.Cell>
        )
        for(let j = 0; j < standardTimetable[index].periods.length; j++ ){
            cells.push(
                <Table.Cell textAlign='center' key={standardTimetable[index].periods[j].subjectId + Math.random()}>
                    {standardTimetable[index].periods[j].name}
                </Table.Cell>
            )   
        }

        return(<Table.Row key={standardTimetable[index].day}>{cells}</Table.Row>)
    }

    render(){
    const {standardTimetable} = this.props
    let periodNumbers = []
    if(standardTimetable){
        for (let i = 0; i <= standardTimetable[0].periods.length; i++){
            periodNumbers[i] = maxPeriodNumbers[i]
        }
    }
        return(
            <div className="view-timetable-table">
            <Table celled structured>
                <Table.Header>
                    <Table.Row>               
                    {
                        standardTimetable &&
                        periodNumbers.map(period => {
                        return(
                        <Table.HeaderCell key = {period} textAlign='center'>{period}</Table.HeaderCell>
                        )
                    })}
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {standardTimetable && Object.keys(standardTimetable).map((key, i) => {
                        return(
                            this.getCells(standardTimetable, key, i)
                        )
                    })}
                </Table.Body>
            </Table>
            </div>
        )
    }
}

export default ViewTable
