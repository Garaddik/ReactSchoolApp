import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import { Button, Input } from 'semantic-ui-react'

class Schedule extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isEdit: false,
            subjectId: this.props.ess.subject.subjectId,
            exDate: moment(this.props.ess.exDate, "YYYY-MM-DD HH:mm:mmm"),
            startTime: moment(this.props.ess.startTime, "HH:mm"),
            endTime: moment(this.props.ess.endTime, "HH:mm"),
            startDate: this.props.startDate,
            endDate: this.props.endDate,
            maxMarks: this.props.ess.maxMarks,
            subjectError: ''
        }

        this.editSchedule = this.editSchedule.bind(this)
        this.deleteSchedule = this.deleteSchedule.bind(this)
        this.updateSchedule = this.updateSchedule.bind(this)
        this.updateMaxMarks = this.updateMaxMarks.bind(this)

    }

    updateMaxMarks(event){
        this.setState({
            maxMarks: event.target.value
        })
    }

    updateSchedule() {

        if (this.state.subjectId < 0) {
            this.setState({
                subjectError: 'error'
            })
        } else {
            const { dispatch, actions, schoolId, examId, esId, ess, standardId } = this.props
            const { subjectId } = this.state

            const schedule = {
                exDate: this.state.exDate.format('YYYY-MM-DD'),
                startTime: this.state.startTime.format('HH:mm'),
                endTime: this.state.endTime.format('HH:mm'),
                maxMarks: this.state.maxMarks
            }

            dispatch(actions.updateScheduleTimeTableToSubjects(schoolId, examId, standardId, esId, ess.esdId, subjectId, schedule))

            this.setState({
                isEdit: false,
                subjectError: ''
            })
        }
    }

    handleChangeDate = (exDate) => {
        if (this.state.endDate.isBefore(exDate)) {
            this.setState({
                exDate: this.state.endDate
            })
        } else if (this.state.startDate.isAfter(exDate)) {
            this.setState({
                exDate: this.state.startDate
            })
        } else {
            this.setState({
                exDate: exDate
            })
        }
    }

    handleChangeStartTime = (startTime) => {
        this.setState({
            startTime: startTime
        })
    }

    handleChangeEndTime = (endTime) => {
        this.setState({
            endTime: endTime
        })
    }

    editSchedule() {
        this.setState({
            isEdit: true
        })
    }

    deleteSchedule() {
        const { dispatch, actions, esId, ess, examId, standardId, schoolId } = this.props
        dispatch(actions.deletescheduleTimeTableSubject(schoolId, examId, standardId, esId, ess.esdId))
    }

    selectSubject = (event) => {
        if (event.target.value === '') {
            this.setState({
                subjectId: -1
            })
        } else {
            this.setState({
                subjectId: event.target.value
            })
        }
    }

    render() {

        const { subjects } = this.props
        const { subjectError } = this.state
        return (
            <div>
                {
                    !this.state.isEdit &&
                    <form className='ui form' name='form-data'>
                        <div className='field'>
                            <div className='six fields'>
                                <div className='four wide field'>
                                    <select disabled onChange={this.selectSubject} value={this.state.subjectId} className="ui dropdown ui compact menu ">
                                        <option className="default text" value="">Select Subject</option>
                                        {subjects && subjects.map(function (subject) {
                                            return (
                                                <option key={subject.name + subject.subjectId} value={subject.subjectId}>{subject.name}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="four wide field">
                                    <Input disabled onChange={this.updateMaxMarks} control='input' placeholder='Enter the Max Marks' defaultValue={this.state.maxMarks}></Input>
                                </div>
                                <div className='four wide field'>
                                    <DatePicker
                                        selected={this.state.exDate}
                                        onChange={this.handleChangeDate}
                                        dateFormat="DD-MM-YYYY"
                                        disabled={true}
                                    />
                                </div>
                                <div className='four wide field'>
                                    <DatePicker
                                        selected={this.state.startTime}
                                        onChange={this.handleChangeStartTime}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={15}
                                        dateFormat="LT"
                                        timeCaption="Time"
                                        timeFormat="HH:mm"
                                        disabled={true}

                                    />
                                </div>
                                <div className='four wide field'>
                                    <DatePicker
                                        selected={this.state.endTime}
                                        onChange={this.handleChangeEndTime}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={15}
                                        dateFormat="LT"
                                        timeCaption="Time"
                                        timeFormat="HH:mm"
                                        disabled={true}
                                    />
                                </div>
                                <div className='two wide field'>
                                    <Button basic color='teal' type="button" onClick={this.editSchedule}>Edit</Button>
                                </div>
                                <div className='two wide field'>
                                    <Button basic color='teal' type="button" onClick={this.deleteSchedule}>Delete</Button>
                                </div>

                            </div>
                        </div>
                    </form>
                }
                {
                    this.state.isEdit &&
                    <form className='ui form' name='form-data'>
                        <div className='field'>
                            <div className='five fields'>
                                <div className={'ui four wide field ' + subjectError}>
                                    <select onChange={this.selectSubject} value={this.state.subjectId} className="ui dropdown ui compact menu ">
                                        <option className="default text" value="">Select Subject</option>
                                        {subjects && subjects.map(function (subject) {
                                            return (
                                                <option key={subject.name + subject.subjectId} value={subject.subjectId}>{subject.name}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="four wide field">
                                    <Input onChange={this.updateMaxMarks} control='input' placeholder='Enter the Max Marks' defaultValue={this.state.maxMarks}></Input>
                                </div>
                                <div className='four wide field'>
                                    <DatePicker
                                        selected={this.state.exDate}
                                        onChange={this.handleChangeDate}
                                        dateFormat="DD-MM-YYYY"
                                        startDate={this.state.startDate}
                                        endDate={this.state.endDate}
                                    />
                                </div>
                                <div className='four wide field'>
                                    <DatePicker
                                        selected={this.state.startTime}
                                        onChange={this.handleChangeStartTime}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={15}
                                        dateFormat="LT"
                                        timeCaption="Time"
                                        timeFormat="HH:mm"

                                    />
                                </div>
                                <div className='four wide field'>
                                    <DatePicker
                                        selected={this.state.endTime}
                                        onChange={this.handleChangeEndTime}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={15}
                                        dateFormat="LT"
                                        timeCaption="Time"
                                        timeFormat="HH:mm"
                                    />
                                </div>
                                <div className='two wide field'>
                                    <Button basic color='teal' type="button" onClick={this.updateSchedule}>Update</Button>
                                </div>
                                <div className='two wide field' />
                            </div>
                        </div>
                    </form>}
            </div>
        )
    }
}
Schedule.propTypes = {
    dispatch: PropTypes.func,
    actions: PropTypes.object,
    esId: PropTypes.number,
    ess: PropTypes.object,
    subjects: PropTypes.array,
    schoolId: PropTypes.number,
    standardId: PropTypes.number,
    examId: PropTypes.number,
    exam: PropTypes.object,
    startDate: PropTypes.object,
    endDate: PropTypes.object
}
export default Schedule