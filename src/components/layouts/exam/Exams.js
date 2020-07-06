import React, { Component } from 'react'
import { Button, Input, Message } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Exam from './Exam'
import './Exam.css'

class Exams extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            startDate: moment(),
            endDate: moment(),
            resultReleaseDate: moment(),
            error: false,
            visible: true,
            examError: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.addExam = this.addExam.bind(this)
        this.handleChangeStart = this.handleChangeStart.bind(this)
        this.handleChangeEnd = this.handleChangeEnd.bind(this)
        this.handleChangeResultReleaseDate = this.handleChangeResultReleaseDate.bind(this)
        this.readInput = this.readInput.bind(this)
    }

    componentDidMount() {
        const { dispatch, actions, school } = this.props
        dispatch(actions.allExams(school.schoolId))
    }
    readInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleChange = ({ startDate, endDate }) => {
        startDate = startDate || this.state.startDate
        endDate = endDate || this.state.endDate
        if (startDate.isAfter(endDate)) {
            endDate = startDate
        }
        this.setState({ startDate, endDate })
    }

    handleChangeStart = (startDate) => this.handleChange({ startDate })

    handleChangeEnd = (endDate) => this.handleChange({ endDate })

    handleChangeResultReleaseDate(resultReleaseDate) {
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

    addExam = () => {
        if (this.state.name === '') {
            this.setState({
                examError: 'error'
            })
        }
        else {
            const exam = {
                name: this.state.name,
                startDate: this.state.startDate.format('YYYY-MM-DD'),
                endDate: this.state.endDate.format('YYYY-MM-DD'),
                resultReleaseDate: this.state.resultReleaseDate.format('YYYY-MM-DD HH:mm:ss')
            }

            const { dispatch, actions, school } = this.props
            dispatch(actions.addExam(school.schoolId, exam))
            document.getElementById('name-css').value = ''
            this.setState({
                name: '',
                startDate: moment(),
                endDate: moment(),
                resultReleaseDate: moment(),
                visible: true,
                examError: ''
            })
        }
    }
    render() {
        const { exams, actions, dispatch, school, errorCode } = this.props
        return (
            <div>
                {
                    errorCode === 500 && this.state.visible === true &&
                    <Message negative>
                        <Message.Header>Sorry, you cannot have multiple tests/exams with the same name</Message.Header>
                        <p>Please have a unique name for each test/exam</p>
                        {setTimeout(() => {
                            this.setState({ visible: false })
                        }, 5000)}
                    </Message>
                }
                <h3 className='ui dividing header' > Exams</h3>
                <form className='ui form' name='form-data'>
                    <div className='ui dividing field'>
                        <div className='seven fields'>
                            <div className='four wide required field'>
                                <h5>Exam Name</h5>
                            </div>
                            <div className='three wide required field'>
                                <h5>Start Date</h5>
                            </div>
                            <div className='three wide required field'>
                                <h5>End Date</h5>
                            </div>
                            <div className='five wide required field'>
                                <h5>Result Release Date</h5>
                            </div>
                            <div className='two wide field'></div>
                            <div className='three wide field'></div>
                            <div className='three wide field'></div>
                        </div>
                    </div>
                    {exams && exams.map(function (exam, idx) {
                        return (
                            <Exam key={idx} actions={actions} dispatch={dispatch}
                                school={school} exam={exam}
                            />
                        )
                    })}
                    <div className='ui dividing header'></div>
                    <div className='field'>
                        <div className='seven fields'>
                            <div className={'four wide field ' + this.state.examError}>
                                <Input id='name-css' name='name' onChange={this.readInput} control='input' placeholder='Exam  Name' />
                            </div>
                            <div className='three wide field'>
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
                                <Button basic color='teal' type="button" onClick={this.addExam}>Add</Button>
                            </div>
                            <div className='three wide field' />
                            <div className='three wide field' />
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}

Exams.propTypes = {
    dispatch: PropTypes.func,
    actions: PropTypes.object,
    exams: PropTypes.array,
    school: PropTypes.object
}

export default Exams