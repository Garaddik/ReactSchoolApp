import React, {Component} from 'react'
import { Button, Table, Header, Label, Icon } from 'semantic-ui-react'
import './Timetable.css'
import UpdateSubjects from './UpdateSubjects'

const maxPeriodNumbers = ['Days', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII']
class EditTimetable extends Component{

    constructor(props){
        super(props)
        this.state = {
            showComponent : false
        }
        this.child = React.createRef()
    }

    onClick = () => {
        this.setState({
            disable : true
        })
        this.child.current.confirmScheduling()
      }

    updateTimetable = (timetable) => {
        const {actions, dispatch, school, standardId, loadViewTimetable, timeTableId, activeYear} = this.props
        dispatch(actions.updateStandardTimetable(school.schoolId, standardId, timeTableId, timetable, activeYear.eduYearId))
        loadViewTimetable()
    }

    getCells = (standardTimetable, key, index, subjects) => {
        let cells = []
        let weeklySchedule = []
        for(let i = 0; i < standardTimetable.length; i++){
            let periods = []
            for(let j = 0; j < standardTimetable[i].periods.length; j++){
                periods[j] = {
                    'sequence' : standardTimetable[i].periods[j].sequence,
                    'subject_id' : standardTimetable[i].periods[j].subjectId
                }
            }
            weeklySchedule.push(
                {
                    day : standardTimetable[i].day,
                    periods : periods
                }
            )
            
        }
        cells.push(
            <Table.Cell key={key + standardTimetable[index].day}>
              <Header as='h4' textAlign='center'>{standardTimetable[index].day}</Header>
            </Table.Cell>
        )
        for(let j = 0; j < standardTimetable[index].periods.length; j++ ){
            cells.push(
                <Table.Cell key={standardTimetable[index].periods[j].subjectId}>
                    <Label>{standardTimetable[index].periods[j].name}</Label>
                    <UpdateSubjects subjects = {subjects} updateTimetable = {this.updateTimetable}
                        ref={this.child} weeklySchedule = {weeklySchedule} day = {standardTimetable[index].day}
                        rowIndex = {index} colIndex = {j} 
                    /> 
                </Table.Cell>
            )   
        }

        return(<Table.Row key={standardTimetable[index].day}>{cells}</Table.Row>)
    }

    render(){
    const standardTimetable = this.props.standardTimetable.days
    const {subjects} = this.props
    const {loadViewTimetable, standardId} = this.props
    let periodNumbers = []
    if(standardTimetable){
        for (let i = 0; i <= standardTimetable[0].periods.length; i++){
            periodNumbers[i] = maxPeriodNumbers[i]
        }
    }
        return(
            <div>
                <div className='ui dividing header' style={{display:'flex', flexDirection:'row'}}>
                    <Button icon className="back-button" type="button"
                    onClick={() => loadViewTimetable(standardId)}>
                        <Icon name='arrow left'/>
                    </Button>
                    <h3> Edit Timetable</h3>
                </div>
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
                    {standardTimetable && Object.keys(standardTimetable).map((key, index) => {
                        return(
                            this.getCells(standardTimetable, key, index, subjects)
                        )
                    })}
                </Table.Body>
            </Table>
            <Button disabled = {this.state.disable} basic color='teal' type="button" onClick={() => this.onClick()}>Update</Button>
            </div>
        </div>
        )
    }
}

export default EditTimetable