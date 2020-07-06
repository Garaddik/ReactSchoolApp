import React, {Component} from 'react'
import './Timetable.css'

let monday = [],
tuesday = [],
wednesday = [],
thursday = [],
friday = [],
saturday = []

export default class SelectSubject extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedSubjectId : ''
        }
        this.selectSubject = this.selectSubject.bind(this)
        this.addDaySchedule = this.addDaySchedule.bind(this)
        this.checkIfAlreadySelected = this.checkIfAlreadySelected.bind(this)
    }

    selectSubject = (event) => { 
        const {day, index} = this.props
        if(event.target.value === ''){
            this.setState({
                selectedSubjectId : ''
            })
        }
        else{
            this.setState({
                selectedSubjectId : event.target.value
            })
            let newElement = {
                'sequence' : index,
                'subject_id' : event.target.value
            }
            switch(day){
                case 'MONDAY' :
                                this.checkIfAlreadySelected(monday, newElement)
                                break
                case 'TUESDAY' :
                                this.checkIfAlreadySelected(tuesday, newElement)
                                break
                case 'WEDNESDAY' :
                                this.checkIfAlreadySelected(wednesday, newElement)
                                break
                case 'THURSDAY' :
                                this.checkIfAlreadySelected(thursday, newElement)
                                break
                case 'FRIDAY' :
                                this.checkIfAlreadySelected(friday, newElement)
                                break
                case 'SATURDAY' :
                                this.checkIfAlreadySelected(saturday, newElement)
                                break
                default: return
            }
        }
    }

    confirmScheduling = () => { 
        const {weekdays} = this.props
        weekdays.map((day) => {
            switch(day){
                case 'MONDAY' :
                                this.addDaySchedule(day,monday)
                                break
                case 'TUESDAY' :
                                this.addDaySchedule(day,tuesday)
                                break
                case 'WEDNESDAY' :
                                this.addDaySchedule(day,wednesday)
                                break
                case 'THURSDAY' :
                                this.addDaySchedule(day,thursday)
                                break
                case 'FRIDAY' :
                                this.addDaySchedule(day,friday)
                                break
                case 'SATURDAY' :
                                this.addDaySchedule(day,saturday)
                                break
                default: return {}
            }
            return {}
        })
    }

    addDaySchedule =(day, schedule) => {
        const {finalizeTimetable} = this.props
        let dailySchedule = {
            'day' : day,
            'periods' : schedule
        }
        finalizeTimetable(dailySchedule)
    }

    checkIfAlreadySelected = (dayList, element) => {
        if(dayList.length === 0){
            dayList.push(element)
        }
        else{
            let existing = false
            let index;
            for(let i = 0; i < dayList.length; i ++){
                if(dayList[i].sequence === element.sequence){
                    existing = true
                    index = i
                }
            }
                if(existing){
                    dayList[index].subject_id = element.subject_id
                }
                else{
                    dayList.push(element)
                }
        }
    }

    render(){
        const {subjects} = this.props
        return(
            <select onChange={this.selectSubject}  value={this.state.selectedSubjectId} className="ui dropdown ui compact menu ">
                <option value="">Select Subject</option>
                    {subjects && subjects.map(function(subject){
                    return(
                        <option key = {subject.name+subject.subjectId} value={subject.subjectId}>{subject.name}</option>
                    )
                })}
            </select>
        )
    }
}