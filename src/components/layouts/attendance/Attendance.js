import React, { Component } from 'react'
import AttendanceTable from './AttendanceTable'
import moment from 'moment'

class Attendance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStandardId: '',
            selectedSubjectId: '',
            selectedMonth: '',
            monthName: moment(),
            totalDays: 6,
            months: ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December']
        }
        this.selectStandard = this.selectStandard.bind(this)
        this.selectMonth = this.selectMonth.bind(this)
        this.selectSubject = this.selectSubject.bind(this)
    }

    componentDidMount() {
        const { dispatch, actions, school } = this.props
        dispatch(actions.allStandards(school.schoolId))
        if(school.attendanceType === 'hourly'){
            dispatch(actions.getAllSubjects(school.schoolId))
        }
    }

    selectStandard = (event) => {
        const {school} = this.props
        if (event.target.value !== '') {
            this.setState({
                selectedStandardId: event.target.value,
                totalDays : 6,
                selectedMonth : '',
                monthName : moment()
            })
        }
        if(school.attendanceType === 'daily'){
            let startDate = moment().startOf('isoWeek').toISOString()
             startDate = moment(startDate).format("YYYY-MM-DD")
             let endDate = moment().endOf('week').toISOString()
             endDate = moment(endDate).format("YYYY-MM-DD")
            const { dispatch, actions, school } = this.props
            dispatch(actions.allStudentsAttendance(school.schoolId, event.target.value, startDate, endDate, this.state.selectedSubjectId))

        }
    }

    selectSubject = (event) => {
        if (event.target.value !== '') {
            this.setState({
                selectedSubjectId: event.target.value
            })
            let startDate = moment().startOf('isoWeek').toISOString()
             startDate = moment(startDate).format("YYYY-MM-DD")
             let endDate = moment().endOf('week').toISOString()
             endDate = moment(endDate).format("YYYY-MM-DD")
            const { dispatch, actions, school } = this.props
            dispatch(actions.allStudentsAttendance(school.schoolId, this.state.selectedStandardId, startDate, endDate, event.target.value))
        }
    }

    selectMonth = (event) => {
        let startDate = moment().month(event.target.value)
        startDate = moment(startDate).startOf('month').format('YYYY-MM-DD')
        let endDate = moment(startDate).endOf('month').format('YYYY-MM-DD')
        this.setState({
            selectedMonth: event.target.value,
            totalDays: moment(startDate).daysInMonth(),
            monthName: startDate
        })
        const { dispatch, actions, school } = this.props
        dispatch(actions.allStudentsAttendance(school.schoolId, this.state.selectedStandardId, startDate, endDate, this.state.selectedSubjectId))
    }

    render() {
        const { standards, studentAttendanceList, subjects, school } = this.props
        return (
            <div>
                <h3 className='ui dividing header'> Attendance</h3>
                <form className='ui form' name='form-data'>
                    <div className='field'>
                        <div className='four fields'>
                            <div className="five wide field">
                                <label style={{ lineHeight: '2.5em' }}>Select Standard</label>
                            </div>
                            <div className="five wide field">
                                <select onChange={this.selectStandard} value={this.state.selectedStandardId} className="ui dropdown ui compact menu ">
                                    <option value="">Standards</option>
                                    {standards && standards.map(function (standard, id) {
                                        return (
                                            <option key={id} value={standard.standardId}>{standard.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            {
                                (this.state.selectedStandardId !== '' && school.attendanceType === "hourly" && subjects) &&
                                <div className="five wide field">
                                    <select onChange={this.selectSubject} value={this.state.selectedSubjectId} className="ui dropdown ui compact menu ">
                                        <option value="">Subjects</option>
                                        {subjects && subjects.map(function (subject, id) {
                                            return (
                                                <option key={id} value={subject.subjectId}>{subject.name}</option>
                                            )
                                        })}

                                    </select>
                                </div>
                            }
                            {
                                this.state.selectedStandardId !== '' &&
                                <div className="five wide field">
                                    <select onChange={this.selectMonth} value={this.state.selectedMonth} className="ui dropdown ui compact menu ">
                                        <option value="">Months</option>
                                        {
                                            this.state.months && this.state.months.map(function (month, id) {
                                                return (
                                                    <option key={id}>{month}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            }
                        </div>
                    </div>
                    {
                       school.attendanceType === 'hourly' && this.state.selectedStandardId !== '' && this.state.selectedSubjectId !== '' &&
                        <AttendanceTable studentAttendanceList={studentAttendanceList} totalDays={this.state.totalDays}
                        monthName={this.state.monthName} school={school}/>
                    }
                    {
                       school.attendanceType === 'daily' && this.state.selectedStandardId !== '' &&
                        <AttendanceTable studentAttendanceList={studentAttendanceList} totalDays={this.state.totalDays}
                        monthName={this.state.monthName} school={school}/>
                    }
                </form>
            </div>
        )
    }
}

export default Attendance