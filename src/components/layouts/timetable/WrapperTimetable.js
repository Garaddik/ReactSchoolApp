import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ViewTimetable from './ViewTimetable'
import CreateTimetable from './CreateTimetable'
import EditTimetable from './EditTimetable'

class WrapperTimetable extends Component{

    constructor(props){
        super(props)
        this.state = {
            standardId : '',
            view: 1,
            updated: false,
            visible: true,
            timeTableId : ''
        }

        this.loadCreateTimetableView = this.loadCreateTimetableView.bind(this)
        this.loadEditTimetableView = this.loadEditTimetableView.bind(this)
        this.loadViewTimetable = this.loadViewTimetable.bind(this)
    }

    loadCreateTimetableView = (standardId) => {
        this.setState({
            view: 2,
            standardId : standardId
        })
    }

    loadEditTimetableView = (standardId, timeTableId) => {
        const {actions, dispatch, school, activeYear} = this.props
        this.setState({
            standardId : standardId,
            timeTableId :timeTableId
        })
        dispatch(actions.getAllSubjects(school.schoolId),
        dispatch(actions.getStandardTimetable(school.schoolId, standardId, activeYear.eduYearId)),
        this.setState({
            view: 3
        }))
    }

    loadViewTimetable = (standardId) => {
        this.setState({
            view: 1,
            updated: false,
            visible: true,
            standardId : standardId
        })
    }

    render(){
        const {dispatch, actions , school, standards, subjects, standardTimetable, activeYear } = this.props
        return(
            <div>

                {
                    this.state.view === 1 &&
                    <ViewTimetable dispatch={dispatch} actions = {actions}  school = {school} standards = {standards} 
                    standardTimetable = {standardTimetable} subjects = {subjects}
                    loadEditTimetableView = {this.loadEditTimetableView} loadCreateTimetableView = {this.loadCreateTimetableView}
                    standardId = {this.state.standardId} activeYear={this.props.activeYear}/>
                }
                
                { 
                    this.state.view === 2 &&
                    <CreateTimetable dispatch={dispatch} actions = {actions} school = {school} subjects ={subjects}
                    standardId = {this.state.standardId} loadViewTimetable = {this.loadViewTimetable}
                    />
                }

                { 
                    this.state.view === 3 &&
                    <EditTimetable dispatch={dispatch} actions = {actions} school = {school} subjects ={subjects}
                    standardTimetable = {standardTimetable} standardId = {this.state.standardId} 
                    loadViewTimetable = {this.loadViewTimetable} timeTableId = {this.state.timeTableId}
                    activeYear = {activeYear}/>
                }

            </div>
        )
    }
}

ViewTimetable.propTypes = {
    dispatch: PropTypes.func,
    actions: PropTypes.object,
    school: PropTypes.object,
    standards:PropTypes.array
}

export default WrapperTimetable