import React, { Component } from 'react'
import { Button, Input, Confirm } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import './Exam.css'
import { Redirect } from 'react-router-dom'

class Exam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: true,
            examId: this.props.exam.examId,
            name: this.props.exam.name,
            startDate: moment(this.props.exam.startDate, "YYYY-MM-DD"),
            endDate: moment(this.props.exam.endDate, "YYYY-MM-DD"),
            resultReleaseDate: this.props.exam.resultReleaseDate ? moment(this.props.exam.resultReleaseDate, "YYYY-MM-DD HH:mm:ss"): moment(this.props.exam.endDate, "YYYY-MM-DD  HH:mm:ss"),
            redirect:false,
            scheduleUrl:"",
            delete : false
        }
        this.showUpdateButton = this.showUpdateButton.bind(this)
        this.updateExamInfo = this.updateExamInfo.bind(this)
        this.updateExam = this.updateExam.bind(this)
        this.deleteExam = this.deleteExam.bind(this)
        this.handleChangeStart = this.handleChangeStart.bind(this)
        this.handleChangeEnd = this.handleChangeEnd.bind(this)
        this.handleChangeResultReleaseDate = this.handleChangeResultReleaseDate.bind(this)
        this.loadScheduleList = this.loadScheduleList.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    loadScheduleList = (exam) => {
        this.setState({
            scheduleUrl: "/dashboard/exams/"+exam.examId+"/"+exam.startDate+"/"+exam.endDate,
            redirect:true
        })
            
    }

    handleDelete = () => {
        this.setState({
            delete : true
        })
    }

    handleCancel = () => {
        this.setState({
            delete : false
        })
    }

    showUpdateButton = () => {
        this.setState({
            isEdit: false
        })
    }

    updateExamInfo = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleChangeStart(date) {
        this.setState({
            startDate: date
        });
    }

    handleChangeEnd(date) {
        this.setState({
            endDate: date
        })
    }

    handleChangeResultReleaseDate (resultReleaseDate) {
        if (this.state.endDate.isAfter(resultReleaseDate)) {
            this.setState({
                resultReleaseDate: this.state.endDate
            })
        } else {
            this.setState({
                resultReleaseDate: resultReleaseDate
            })
        }
    }

    updateExam = () => {
        const { dispatch, actions, school } = this.props
        const exam = {
            examId: this.state.examId,
            name: this.state.name,
            startDate: this.state.startDate.format('YYYY-MM-DD'),
            endDate: this.state.endDate.format('YYYY-MM-DD'),
            resultReleaseDate: this.state.resultReleaseDate.format('YYYY-MM-DD HH:mm:ss')
        }

        dispatch(actions.updateExam(school.schoolId, exam))
        
        this.setState({
            isEdit: true
        })
    }

    deleteExam = () => {
        const { dispatch, actions, school } = this.props
        dispatch(actions.deleteExam(school.schoolId, this.state.examId))
    }

    render() {

        const { exam } = this.props
        const {redirect,scheduleUrl} = this.state

        return (
            <div className='field'>
                {redirect && <Redirect to={scheduleUrl} />}
                <div >
                    {this.state.isEdit &&
                        <div className=' seven fields'>
                            <div className="four wide field">
                                <Input control='input' placeholder='Enter the Exam' >{this.props.exam.name}</Input>
                            </div>
                            <div className="three wide field">
                                <Input control='input'>{moment(this.props.exam.startDate).format('DD-MM-YYYY')}</Input>
                            </div>
                            <div className="three wide field">
                                <Input control='input'>{moment(this.props.exam.endDate).format('DD-MM-YYYY')}</Input>
                            </div>
                            <div className="six wide field">
                                <Input control='input'>{moment(this.props.exam.resultReleaseDate).format('DD-MM-YYYY  hh:mm:ss a')}</Input>
                            </div>
                            <div className='two wide field'>
                                {this.state.isEdit && <Button basic color='teal' type='button' onClick={this.showUpdateButton}>Edit</Button>}
                                {this.state.update && <Button basic color='teal' type='button' onClick={this.updateExam}>Update</Button>}
                            </div>
                            <div className='three wide field'>
                                {<Button basic color='teal' type="button" onClick={() => this.handleDelete()}>Delete</Button>}
                            </div>
                            <div className='three wide field'>
                                {<Button basic color='teal' type="button" onClick={() => this.loadScheduleList(exam)} >Schedule</Button>}
                            </div>
                        </div>
                    }
                    {
                        !this.state.isEdit &&
                        <div className=' seven fields'>
                            <div className="four wide field">
                                <Input onChange={this.updateExamInfo} control='input' placeholder='Enter the Exam' defaultValue={this.state.name}></Input>
                            </div>
                            <div className="three wide field">
                                <DatePicker
                                    selected={this.state.startDate}
                                    selectsStart
                                    startDate={this.state.startDate}
                                    endDate={this.state.endDate}
                                    onChange={this.handleChangeStart}
                                    dateFormat="DD-MM-YYYY"
                                />
                            </div>
                            <div className="three wide field">
                                <DatePicker
                                    selected={this.state.endDate}
                                    selectsEnd
                                    startDate={this.state.startDate}
                                    endDate={this.state.endDate}
                                    onChange={this.handleChangeEnd}
                                    dateFormat="DD-MM-YYYY"
                                />
                            </div>

                            <div className="five wide field">
                                <DatePicker
                                    selected={this.state.resultReleaseDate}
                                    onChange={this.handleChangeResultReleaseDate}
                                    dateFormat="DD-MM-YYYY hh:mm:ss a"
                                    showTimeSelect
                                    timeIntervals={15}
                                    startDate={this.state.endDate}
                                    title="Result release date should be greater than Exam end date.."
                                />
                            </div>

                            <div className='two wide field'>
                                {!this.state.isEdit && <Button basic color='teal' type='button' onClick={this.updateExam}>Update</Button>}
                            </div>
                            <div className='three wide field'>
                                {<Button basic color='teal' type="button" onClick={() => this.handleDelete()}>Delete</Button>}
                            </div>
                            <div className='three wide field' />
                        </div>
                    }
                </div>
                <div>
                    <Confirm
                    open={this.state.delete}
                    header='Are you sure you want to delete the exam, this action is irreversible'
                    onCancel={this.handleCancel}
                    onConfirm={this.deleteExam}
                    />
                </div>
            </div>

        )
    }
}

Exam.propTypes = {
    dispatch: PropTypes.func,
    actions: PropTypes.object,
    updateExam: PropTypes.func,
    school: PropTypes.object,
}

export default Exam