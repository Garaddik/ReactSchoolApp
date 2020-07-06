import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {STANDARD_RESULT, EXAM_STANDARD_LIST} from '../../../actions/actionType'
import ResultsTable from './ResultsTable'

class Results extends Component{
    constructor(props){
        super(props);
        this.state ={
            selectedStandardId : '',
            examId : ''
        }
        this.selectStandard = this.selectStandard.bind(this)
        this.selectExam = this.selectExam.bind(this)
    }

    componentDidMount() {
        const { dispatch, actions, school } = this.props
        dispatch(actions.allExams(school.schoolId))
    }

   selectStandard = (event) =>{
    const {dispatch, actions, school, activeYear} = this.props
    dispatch({
        type: STANDARD_RESULT,
        results: []
    })
    dispatch({
        type: EXAM_STANDARD_LIST,
        examSchedule: []
    })
    if(event.target.value !== ""){
        this.setState({
            selectedStandardId : event.target.value,
        })
        dispatch(actions.allStudents(school.schoolId, event.target.value, activeYear.eduYearId))
        dispatch(actions.allExamStandardScheduleList(school.schoolId, this.state.examId, event.target.value))
    }
   }

   selectExam = (event) =>{ 
    const {dispatch,actions,school} = this.props
        if(event.target.value !== ""){
            this.setState({
                examId : event.target.value,
                selectedStandardId : '',
            })
        }
        dispatch(actions.allStandards(school.schoolId))
   }
    
    render(){
        const {students,standards, exams, examSchedule, results, school, studentResult} =  this.props
        return(
            <div>
                <h3 className='ui dividing header'> Results </h3>
                <form className='ui form' name='form-data'>
                    <div className='field'>
                        <div className='four fields'>
                            <div className="three wide field">
                                <label style={{lineHeight:'2.5em'}}>Select Test/Exam</label> 
                            </div>
                            <div className="five wide field">
                                <select onChange={this.selectExam}  value={this.state.examId} className="ui dropdown ui compact menu ">
                                <option value="">Tests</option>
                                {exams && exams.map(function(exam, id){
                                                return(
                                                    <option  key={id} value={exam.examId}>{exam.name}</option>
                                                )
                                            })}
                                
                                </select>
                            </div>
                        </div>
                        <div className='four fields'>
                            <div className="three wide field">
                                <label style={{lineHeight:'2.5em'}}>Select Standard</label> 
                            </div>
                            <div className="five wide field">
                                <select onChange={this.selectStandard}  value={this.state.selectedStandardId} className="ui dropdown ui compact menu ">
                                <option value="">Standards</option>
                                {standards && standards.map(function(standard, id){
                                                return(
                                                    <option  key={id} value={standard.standardId}>{standard.name}</option>
                                                )
                                            })}
                                </select>
                            </div>
                        </div>
                        <span className='ui dividing header' />
                        {
                            this.state.selectedStandardId !== '' && this.props.examSchedule.esId && 
                            <ResultsTable students = {students} examSchedule = {examSchedule}
                            schoolId={this.props.school.schoolId}
                            actions={this.props.actions} dispatch={this.props.dispatch} results={results}
                            school={school} studentResult={studentResult} />
                        }
                    </div>
                </form>    
            </div>

        )
    }
}

Results.propTypes = {
    dispatch: PropTypes.func,
    actions: PropTypes.object,
    students: PropTypes.array,
    school: PropTypes.object,
    standards:PropTypes.array,
}

export default Results