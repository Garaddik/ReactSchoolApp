import {connect} from 'react-redux'
import Results from '../components/layouts/results/Results'
import {allStudents} from '../actions/StudentAction'
import { allExams, allExamStandardScheduleList} from '../actions/ExamAction'
import { getResults, addResults, updateResults, getSelectedStudentResult} from '../actions/ResultAction'
import {allStandards} from '../actions/StandardAction'

function mapStateToProps(state){
  return{
    students: state.students,
    school: state.school,
    standards: state.standards,
    results : state.results,
    exams: state.exams,
    examSchedule: state.examSchedule,
    activeYear: state.activeYear,
    studentResult: state.studentResult,
    actions:{
        allStudents:allStudents,
        allStandards:allStandards,
        allExams : allExams,
        allExamStandardScheduleList: allExamStandardScheduleList,
        getResults : getResults,
        addResults : addResults,
        updateResults : updateResults,
        getSelectedStudentResult:getSelectedStudentResult
    }
  } 
}
export default connect(mapStateToProps)(Results)
