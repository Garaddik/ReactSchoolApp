import { connect } from 'react-redux'
import Scheduler from '../components/layouts/exam/Scheduler'
import { allExamStandardScheduleList, addSchedule, deletescheduleTimeTableSubject, updateScheduleTimeTableToSubjects,exam } from '../actions/ExamAction'
import { getAllSubjects } from '../actions/SubjectAction'
import { allStandards } from '../actions/StandardAction'

function mapStateToProps(state) {
    return {
        school: state.school,
        examSchedule: state.examSchedule,
        exam: state.exam,
        subjects: state.subjects,
        standards: state.standards,
        actions: {
            allExamStandardScheduleList: allExamStandardScheduleList,
            getAllSubjects: getAllSubjects,
            addSchedule: addSchedule,
            allStandards: allStandards,
            deletescheduleTimeTableSubject: deletescheduleTimeTableSubject,
            updateScheduleTimeTableToSubjects: updateScheduleTimeTableToSubjects,
            exam:exam
        }
    }
}
export default connect(mapStateToProps)(Scheduler)