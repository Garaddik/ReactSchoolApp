import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Icon, Input } from 'semantic-ui-react'
import moment from 'moment';
import DatePicker from 'react-datepicker';
import './Scheduler.css'
import 'react-datepicker/dist/react-datepicker.css';
import Schedule from './Schedule'
import { Redirect } from 'react-router-dom'

class Scheduler extends Component {
    constructor(props) {
        super(props)
        const { startDate, endDate } = this.props.match.params
        this.state = {
            subjectId: -1,
            startTime: moment(),
            endTime: moment(),
            exDate: moment(startDate, "YYYY-MM-DD"),
            startDate: moment(startDate, "YYYY-MM-DD"),
            endDate: moment(endDate, "YYYY-MM-DD"),
            standardId: -1,
            maxMarks: 0,
            subjectError: '',
            redirect: false,
            examUrl: ""
        }
        this.addSchedule = this.addSchedule.bind(this)
        this.handleChangeDate = this.handleChangeDate.bind(this)
        this.goBack = this.goBack.bind(this)
        this.updateMaxMarks = this.updateMaxMarks.bind(this)
    }

    updateMaxMarks(event) {
        this.setState({
            maxMarks: event.target.value
        })
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

    addSchedule() {
        if (this.state.subjectId < 0) {
            this.setState({
                subjectError: 'error'
            })
        } else {
            const { dispatch, actions, school, examSchedule } = this.props
            const { examId } = this.props.match.params

            const schedule = {
                exDate: this.state.exDate.format('YYYY-MM-DD'),
                startTime: this.state.startTime.format('HH:mm'),
                endTime: this.state.endTime.format('HH:mm'),
                maxMarks: this.state.maxMarks
            }
            dispatch(actions.addSchedule(school.schoolId, examId, this.state.standardId, this.state.subjectId, examSchedule.esId, schedule))
            this.setState({
                subjectId: -1,
                startTime: moment(),
                endTime: moment(),
                exDate: moment(),
                maxMarks:0,
                subjectError: ''
            })
        }
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

    goBack = () => {
        this.setState({
            examUrl: '/dashboard/exams',
            redirect: true
        })
    }

    selectStandard = (event) => {
        if (event.target.value === '') {
            this.setState({
                standardId: -1
            })
        } else {
            this.setState({
                standardId: parseInt(event.target.value, 10),
                subjectError: ''
            })
            const { dispatch, actions, school } = this.props
            const { examId } = this.props.match.params
            dispatch(actions.allExamStandardScheduleList(school.schoolId, examId, event.target.value))
        }
    }
    componentDidMount() {
        const { dispatch, actions, school } = this.props
        const { examId } = this.props.match.params
        dispatch(actions.getAllSubjects(school.schoolId))
        dispatch(actions.allStandards(school.schoolId))
        dispatch(actions.exam(examId, school.schoolId))
    }

    render() {
        const { subjects, standards, examSchedule, school, actions, dispatch, exam } = this.props
        const { examId } = this.props.match.params
        const { standardId, startDate, endDate, subjectError, redirect, examUrl } = this.state
        return (
            <div>
                {redirect && <Redirect to={examUrl} />}
                <div className='ui dividing header' style={{ display: 'flex', flexDirection: 'row' }}>
                    <Button icon className="back-button" type="button"
                        onClick={() => this.goBack()}>
                        <Icon name='arrow left' />
                    </Button>
                    <h3> Schedule Exam Time table </h3>
                </div>
                {standards &&
                    <form className='ui form' name='form-data'>
                        <div className="field">
                            <div className='two fields '>
                                <div className="three wide field">
                                    <label style={{ lineHeight: '2.5em' }}>Select Standard</label>
                                </div>
                                <div className='four wide field'>
                                    <select onChange={this.selectStandard} value={this.state.standardId} className="ui dropdown ui compact menu ">
                                        <option className="default text" value="">Select Standard</option>
                                        {standards.map(function (standard) {
                                            return (
                                                <option key={standard.standardId} value={standard.standardId}>{standard.name}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>
                }
                {this.state.standardId > 0 &&

                    <div>
                        <form className='ui form' name='form-data'>
                            <div className='field'>
                                <div className='four fields'>
                                    <div className='five wide required field'>
                                        SubjectName
                                        </div>
                                    <div className='four wide  required field'>
                                        Max Marks
                                        </div>
                                    <div className='four wide  required field'>
                                        Exam Date
                                        </div>
                                    <div className='four wide required field '>
                                        Start Time
                                        </div>
                                    <div className='four wide  required field'>
                                        End Time
                                        </div>
                                    <div className='two wide field' />
                                    <div className='two wide field' />
                                </div>
                            </div>
                        </form>
                        {
                            examSchedule.essList !== undefined &&
                            examSchedule.essList
                                .map(function (ess) {
                                    return (
                                        <Schedule key={ess.esdId} ess={ess} esId={examSchedule.esId} examId={parseInt(examId, 10)}
                                            schoolId={school.schoolId} standardId={standardId}
                                            actions={actions} dispatch={dispatch}
                                            subjects={subjects}
                                            exam={exam}
                                            startDate={startDate}
                                            endDate={endDate}
                                        />
                                    )
                                })
                        }

                        <form className='ui form' name='form-data'>
                            <div className='field'>
                                <div className='six fields'>
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
                                        <Input onChange={this.updateMaxMarks} control='input' placeholder='Enter the Max Marks' value={this.state.maxMarks} defaultValue={this.state.maxMarks}></Input>
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
                                        <Button basic color='teal' type="button" onClick={this.addSchedule}>Add</Button>
                                    </div>
                                    <div className='two wide field' />
                                </div>
                            </div>
                        </form>
                    </div>
                }
                {
                    this.state.standardId !== -1 &&
                    <Button basic color='teal' type="button" onClick={() => this.goBack()}>Save</Button>
                }
            </div>
        )
    }
}

Scheduler.propTypes = {
    dispatch: PropTypes.func,
    actions: PropTypes.object,
    exam: PropTypes.object,
    school: PropTypes.object,
    examSchedule: PropTypes.object,
    subjects: PropTypes.array,
    standards: PropTypes.array
}

export default Scheduler