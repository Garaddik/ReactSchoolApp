import React, {Component} from 'react'
import { Table, Button, Icon} from 'semantic-ui-react'
import SelectSubject from './SelectSubject'
import './Timetable.css'

class CreateTimetable extends Component{

    constructor(props){
        super(props)
        this.state = {
            weeklySchedule : [],
            disable : false,
            save : true
        }
        this.child = React.createRef()
        this.finalizeTimetable = this.finalizeTimetable.bind(this)
        this.saveTimetable = this.saveTimetable.bind(this)
    }

    onClick = () => {
        this.setState({
            disable : true,
            save: false
        })
        this.child.current.confirmScheduling()
      }

    finalizeTimetable = (dailyTimetable) => {
        this.state.weeklySchedule.push(dailyTimetable)
    }

    saveTimetable = () => {
        const {actions, dispatch, school, standardId, loadViewTimetable} = this.props
        dispatch(actions.createTimetable(school.schoolId, standardId, this.state.weeklySchedule))
        loadViewTimetable()
    }

    render(){
        let {subjects, loadViewTimetable} = this.props
        let numberofCells = subjects.slice(0,9)
        const weekdays = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']
            return(
                <div>
                    <div className='ui dividing header' style={{display:'flex', flexDirection:'row'}}>
                    <Button icon className="back-button" type="button"
                    onClick={() => loadViewTimetable()}>
                        <Icon name='arrow left'/>
                    </Button>
                        <h3> Create Timetable</h3>
                    </div>
                    <div className="timetable-table">
                        <Table celled striped>
                            {weekdays.map((day, id) => {
                                return(
                                    <Table.Body key={id}>
                                        <Table.Row>
                                            <Table.Cell collapsing key= {id}>{day}</Table.Cell>
                                            {numberofCells && numberofCells.map((cell, index) => {
                                                return(
                                                    <Table.Cell key = {index}>
                                                        <SelectSubject subjects ={subjects} day = {day}
                                                        finalizeTimetable = {this.finalizeTimetable} index = {index}
                                                        ref={this.child} weekdays = {weekdays}/>
                                                    </Table.Cell>
                                                )
                                            })}
                                        </Table.Row>                                             
                                    </Table.Body>
                                )
                            })}
                        </Table>
                        <Button disabled = {this.state.disable} basic color='teal' type="button" onClick={() => this.onClick()}>Confirm</Button>
                        <Button disabled = {this.state.save} basic color='teal' type="button" onClick={() => this.saveTimetable()}>Save</Button>
                    </div>
                </div>
            )
        }
    }

export default CreateTimetable