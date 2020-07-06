import React, {Component} from 'react'
import './Results.css'
import AddResultsTable from './AddResultsTable'
import UpdateResultTable from './UpdateResultTable'

export default class ResultsTable extends Component {
    componentDidMount = () => {
        const{actions, dispatch, examSchedule, schoolId} = this.props
        dispatch(actions.getResults(schoolId, examSchedule.esId))
    }

    componentWillReceiveProps = (newProps) => {
        if(newProps.examSchedule.esId !== this.props.examSchedule.esId){
            const{actions, dispatch, examSchedule, schoolId} = newProps
            dispatch(actions.getResults(schoolId, examSchedule.esId ))
        }
    }

    render() {
        const {results, examSchedule, students, school, studentResult} = this.props
        return(
            <div className='tableStyle'>
                {
                    examSchedule.essList && results.length === 0 &&
                    <AddResultsTable students = {students} examSchedule = {examSchedule}
                    schoolId={this.props.schoolId} results={results}
                    actions={this.props.actions} dispatch={this.props.dispatch} />
                }
                {
                    examSchedule.essList && results.length !== 0 &&
                    <UpdateResultTable students = {students} examSchedule = {examSchedule} schoolId={this.props.schoolId}
                    actions={this.props.actions} dispatch={this.props.dispatch} results={results}
                    school={school} studentResult={studentResult}/>
                }
                {
                    examSchedule.essList === undefined &&
                    <div className="no-exam">
                            <span>No exams conducted for the selected exam and standard</span>
                    </div>
                }
            </div>
        )
    }
}