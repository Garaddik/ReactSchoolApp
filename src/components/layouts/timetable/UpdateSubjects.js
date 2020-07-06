import React, {Component} from 'react'
import './Timetable.css'

let currentTimetable = []

export default class UpdateSubjects extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedSubjectId : ''
        }
        this.selectSubject = this.selectSubject.bind(this)
    }

    componentDidMount(){
        currentTimetable = this.props.weeklySchedule
    }

    selectSubject = (event) => {
        const {rowIndex, day, colIndex} = this.props
        if(event.target.value === ''){
            this.setState({
                selectedSubjectId : ''
            })
        }
        else{
            this.setState({
                selectedSubjectId : parseInt((event.target.value), 10)
            })
            switch(day){
                case 'MONDAY' :
                currentTimetable[rowIndex].periods[colIndex].subject_id = parseInt((event.target.value), 10)
                                break
                case 'TUESDAY' :
                currentTimetable[rowIndex].periods[colIndex].subject_id = parseInt((event.target.value), 10)
                                break
                case 'WEDNESDAY' :
                currentTimetable[rowIndex].periods[colIndex].subject_id = parseInt((event.target.value), 10)
                                break
                case 'THURSDAY' :
                currentTimetable[rowIndex].periods[colIndex].subject_id = parseInt((event.target.value), 10)
                                break
                case 'FRIDAY' :
                currentTimetable[rowIndex].periods[colIndex].subject_id = parseInt((event.target.value), 10)
                                break
                case 'SATURDAY' :
                currentTimetable[rowIndex].periods[colIndex].subject_id = parseInt((event.target.value), 10)
                                break
                default: return
            }
        }
    }

    confirmScheduling = () => {
        const {updateTimetable} = this.props
        updateTimetable(currentTimetable)
    }

    render(){
        const {subjects} = this.props
        return(
            <select onChange={this.selectSubject}  value={this.state.selectedSubjectId} className="ui dropdown ui compact menu ">
                <option value="">Select Subject</option>
                    {subjects && subjects.map(function(subject){
                    return(
                        <option value={subject.subjectId}>{subject.name}</option>
                    )
                })}
            </select>
        )
    }
}