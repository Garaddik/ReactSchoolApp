import React, {Component} from 'react'
import SchoolConnector from './connectors/SchoolConnector'
import Terms from './components/layouts/terms/Terms.js'
import About from './components/layouts/about/About'
import Privacy from './components/layouts/privacy/Privacy'
import ContactConnector from './connectors/ContactUsConnector'
import TemplateConnector from './connectors/TemplateConnector'
import DashboardTemplateConnector from './connectors/DashBoardTemplateConnector'
import HomeTemplate from './components/commons/templates/home/HomeTemplate'
import {Switch,Route, BrowserRouter} from 'react-router-dom'
import StandardConnector from './connectors/StandardConnector'
import StaffConnector from './connectors/StaffConnector'
import SubjectConnector from './connectors/SubjectConnector'
import LoginRedirectConnector from './connectors/LoginConnector'
import AttendanceConnector from './connectors/AttendanceConnector'
import TimetableConnector from './connectors/TimetableConnector'
import ResultConnector from './connectors/ResultConnector'
import ExamConnector from './connectors/ExamConnector'
import ExamScheduleConnector from './connectors/ExamScheduleConnector'
import SchoolHomePageConnector from './connectors/SchoolHomePageConnector'
import GalleryListConnector from './connectors/GalleryListConnector'
import EventConnector from './connectors/EventConnector'
import EventAddConnector from './connectors/EventAddConnector'
import TimetablesConnector from './connectors/TimetablesConnector'
import MessaggingWrapper from './components/layouts/notification/MessageWrapper'
import StudentsWrapperConnector from './connectors/StudentsWrapperConnector'
import StudentAdmissionConnector from './connectors/StudentAdmissionConnector'
import NonTeachingStaffConnector from './connectors/NonTeachingStaffConnector'
import MapConnector from './connectors/MapConnector'
export default class App extends Component{
  render(){
    return(
      <div>
        <BrowserRouter>
          <Switch>
            <DashboardTemplateConnector path="/dashboard" >
              <Switch>
                <Route exact path='/dashboard/template' component={TemplateConnector} />
                <Route exact path='/dashboard/template/:templateId' component={GalleryListConnector} />
                <Route exact path='/dashboard/standards' component={StandardConnector} />
                <Route exact path='/dashboard/subjects' component={SubjectConnector} />
                <Route exact path='/dashboard/standardstudents' component={StudentsWrapperConnector} />
                <Route exact path='/dashboard/staff' component={StaffConnector} />
                <Route exact path='/dashboard/attendance' component={AttendanceConnector} />
                <Route exact path='/dashboard/timetable' component={TimetableConnector} />
                <Route exact path='/dashboard/results' component={ResultConnector} />
                <Route exact path='/dashboard/terms' component={Terms} />
                <Route exact path='/dashboard/aboutus' component={About} />
                <Route exact path='/dashboard/privacy' component={Privacy} />
                <Route exact path='/dashboard/contact' component={ContactConnector} />
                <Route exact path='/dashboard/notifications' component={MessaggingWrapper} />
                <Route exact path='/dashboard/exams' component={ExamConnector} />
                <Route exact path='/dashboard/events' component={EventConnector} />
                <Route exact path='/dashboard/events/add' component={EventAddConnector} />
                <Route exact path='/dashboard/exams/:examId/:startDate/:endDate' component={ExamScheduleConnector} />
                <Route exact path='/dashboard/sss' component={TimetablesConnector} />
                <Route exact path='/dashboard/newadmission' component={StudentAdmissionConnector} />
                <Route exact path='/dashboard/supervisors' component={NonTeachingStaffConnector} /> 
                <Route exact path='/dashboard/bustracking' component={MapConnector} /> 
              </Switch>
            </DashboardTemplateConnector>

            <HomeTemplate path='/'>
              <Switch>
                <Route exact path='/' component={SchoolConnector} />
                <Route exact path='/terms' component={Terms} />
                <Route exact path='/aboutus' component={About} />
                <Route exact path='/privacy' component={Privacy} />
                <Route exact path='/contact' component={ContactConnector} />
                <Route exact path='/schools/:schoolId' component={SchoolHomePageConnector} />
                <Route exact path='/redirect/:schoolId/:schoolExists' component={LoginRedirectConnector} />
              </Switch>
            </HomeTemplate>
          </Switch>
        </BrowserRouter>
    </div>
    )
  }
}
