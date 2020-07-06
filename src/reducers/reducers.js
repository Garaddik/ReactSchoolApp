import { combineReducers } from 'redux'
import schools from './SchoolReducer'
import schoolTemplate from './SchoolTemplateReducer'
import standards from './StandardReducer'
import subjects from './SubjectReducer'
import {school, years, activeYear} from './LoginReducer'
import {students, studentDetails} from './StudentReducer'
import staffs from './StaffReducer'
import studentAttendanceList from './AttendanceReducer'
import standardTimetable from './TimetableReducer'
import {results, studentResult} from './ResultReducer'
import {exams, errorCode,examSchedule, exam} from './ExamReducer'
import storage from 'redux-persist/lib/storage'
import {events} from './EventReducer'
import {event} from './EventObjectReducer'
import {timeTable} from './TimeTablesReducer'
import {sss} from './StandardSubjectStaffReducer'
import {notifications} from './NotificationReducer'
import {token} from './TokenReducer'
import {studentAddress} from './StudentAddressReducer'
import nonTeachingStaffs from './NonTeachingStaffReducer'
import {tracks, driverDetails} from './MapsReducer'

const AppReducer = combineReducers({
  schools,
  schoolTemplate,
  standards,
  subjects,
  school,
  students,
  staffs,
  studentAttendanceList,
  standardTimetable,
  results,
  exams,
  studentDetails,
  errorCode,
  examSchedule,
  exam,
  events,
  event,
  timeTable,
  sss,
  notifications,
  token,
  years,
  studentResult,
  studentAddress,
  nonTeachingStaffs,
  tracks,
  driverDetails,
  activeYear
})

const rootReducer = (state, action) => {
      if (action.type === 'USER_LOGOUT') {
          Object.keys(state).forEach(key => {
            storage.removeItem(`persist:${key}`)
          })
          state = undefined;
      }
      return AppReducer(state, action)
  }
   
export default rootReducer