import { connect } from 'react-redux'
import Exams from '../components/layouts/exam/Exams'
import { allExams, addExam, deleteExam, updateExam } from '../actions/ExamAction'

function mapStateToProps(state) {
    return {
        school: state.school,
        exams: state.exams,
        errorCode: state.errorCode,
        examSchedule: state.examSchedule,
        actions: {
            allExams: allExams,
            addExam: addExam,
            updateExam: updateExam,
            deleteExam: deleteExam
        }
    }
}
export default connect(mapStateToProps)(Exams)