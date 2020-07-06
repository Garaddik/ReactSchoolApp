import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Form, Input, TextArea, Message } from 'semantic-ui-react'
import './LoginRedirect.css'
import { ACTIVE_YEAR, GET_SCHOOL, ACADEMIC_YEARS} from '../../../actions/actionType'

class LoginRedirect extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            keywords: '',
            attendanceType: 'daily',
            isSubmitted: false,
            nameError: '',
            redirect: false
        }

        this.handleTypeChange = this.handleTypeChange.bind(this);
    }

    handleAttendanceChange = (e, { value }) => this.setState({ attendanceType: value })

    handleTypeChange(attendanceType) {

        this.setState({
            attendanceType: attendanceType
        })
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => {
        const { actions, dispatch } = this.props
        const { schoolId } = this.props.match.params
        dispatch(actions.updateSchool(schoolId, { name: this.state.name, keywords: this.state.keywords, attendanceType: this.state.attendanceType }))
        this.setState({
            redirect: true
        })
    }

    componentDidMount() {
        const { dispatch, actions } = this.props
        const { schoolId } = this.props.match.params

        dispatch(
            {
                type: GET_SCHOOL,
                school: {
                    schoolId: schoolId
                }
            }
        )

        dispatch(actions.fetchSchool(schoolId))
        let years = actions.getAcademicYear()
        years.then(function(years){
            dispatch(
                {
                    type: ACADEMIC_YEARS,
                    years: years
                }
            )
                for(let index in years){
                    if(years[index].running){
                        return(
                            dispatch(
                                {
                                    type: ACTIVE_YEAR,
                                    activeYear: years[index]
                                }
                            )
                        )
                    }
                }
        })
    }
    render() {

        const { name, keywords, isSubmitted, redirect } = this.state
        let { schoolExists } = this.props.match.params
        schoolExists = parseInt(schoolExists, 10)
        return (
            <div>
                {
                    schoolExists === 1 && <Redirect to="/dashboard/template" />
                }
                {
                    redirect && <Redirect to="/dashboard/template" />
                }
                <Form success className="school-form" onSubmit={this.handleSubmit}>
                    {
                        isSubmitted && <Message color="green" success content="Welcome to Mama Shala to automate school activities digital" />
                    }
                    <Form.Group widths='equal'>
                        <Form.Field required
                            id='form-input-control-first-name'
                            control={Input}
                            label='Name'
                            name="name"
                            value={name}
                            className={this.state.nameError}
                            placeholder='Enter name'
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Field required
                        id='form-textarea-control-opinion'
                        control={TextArea}
                        label='Keywords'
                        name="keywords"
                        value={keywords}
                        placeholder='searching key words'
                        onChange={this.handleChange}
                    />

                    <Form.Group inline>
                        <label>Attendance Type</label>
                        <Form.Radio
                            label='Daily'
                            value="daily"
                            checked={this.state.attendanceType === 'daily'}
                            onChange={this.handleAttendanceChange}
                        />
                        <Form.Radio
                            label='Hourly'
                            value="hourly"
                            checked={this.state.attendanceType === 'hourly'}
                            onChange={this.handleAttendanceChange}
                        />
                    </Form.Group>
                    <Form.Button basic color='teal' type='button' onClick={this.handleSubmit}>Continue to access Dashboard</Form.Button>
                </Form>
            </div>
        )
    }
}

LoginRedirect.propTypes = {
    dispatch: PropTypes.func,
    actions: PropTypes.object,
    school: PropTypes.object
}


export default LoginRedirect