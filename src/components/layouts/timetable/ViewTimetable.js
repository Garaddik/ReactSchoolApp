import React, {Component} from 'react'
import ViewTable from './ViewTable'
import PropTypes from 'prop-types'
import { Button, Confirm } from 'semantic-ui-react'

class ViewTimetable extends Component{
    constructor(props){
        super(props);
        this.state ={
            selectedStandardId : this.props.standardId,
            standardName : '',
            open : false,
            delete : false
        }
        this.selectStandard = this.selectStandard.bind(this)
        this.deleteTimetable = this.deleteTimetable.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount(){
        const {dispatch,actions,school} = this.props
        dispatch(actions.allStandards(school.schoolId))
        dispatch(actions.getAllSubjects(school.schoolId))
    }

    selectStandard = (event) =>{ 
        if(event.target.value !== ''){
            this.setState({
                selectedStandardId : event.target.value
            }) 
            const {actions, dispatch, school, activeYear} = this.props
            dispatch(actions.getStandardTimetable(school.schoolId, event.target.value, activeYear.eduYearId))
        }
    }

    deleteTimetable = () => {
        const {actions, dispatch, school, standardTimetable} = this.props
        dispatch(actions.deleteTimetable(school.schoolId, this.state.selectedStandardId, standardTimetable.timeTableId))
        this.setState({
            delete: false
        })
    }

    handleDelete = () => {
        this.setState({
            delete : true
        })
    }
        
    handleConfirm = () => {
        this.setState({
            open: false
        })
        window.location.href = "/dashboard/subjects"
    }
    handleCancel = () => {
        this.setState({
            open: false,
            delete : false
        })
    }

    checkForSubjects = () => {
        const {subjects, loadCreateTimetableView} = this.props
        if(subjects.length !== 0){
            loadCreateTimetableView(this.state.selectedStandardId)
        }
        else{
            this.setState({
                open: true
            })
        }
    }
    render(){
        const {standards, standardTimetable, loadEditTimetableView} =  this.props
        return(
            <div>
                <h3 className='ui dividing header'> Timetable</h3>
                <form className='ui form' name='form-data'>
                    <div className='field'>
                        <div className='four fields'>
                            <div className="five wide field">
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
                            {standardTimetable.noTimetable && this.state.selectedStandardId !== '' &&
                                <div className="five wide field" style={{textAlign:"right"}}>
                                <Button basic color='teal' type="button" onClick={() => this.checkForSubjects() }>
                                    Create Timetable</Button>
                            </div>
                            }
                            {standardTimetable.days && this.state.selectedStandardId !== '' &&
                                <div className="five wide field" style={{textAlign:"right"}}>
                                <Button basic color='teal' type="button" onClick={() => loadEditTimetableView(this.state.selectedStandardId, standardTimetable.timeTableId)}>
                                    Edit Timetable</Button>
                            </div>
                            }
                            {standardTimetable.days && this.state.selectedStandardId !== '' &&
                                <div className="five wide field" style={{textAlign:"right"}}>
                                <Button basic color='teal' type="button" onClick={() => this.handleDelete()}>
                                    Delete Timetable</Button>
                            </div>
                            }
                        </div>
                        <div className="notimetable">
                            {standardTimetable.noTimetable && this.state.selectedStandardId !== '' &&
                            <span>No timetable available for selected standard, please create a new one</span>}
                        </div>

                    </div>
                    {
                        this.state.selectedStandardId !== '' &&
                        <ViewTable standardTimetable = {standardTimetable.days}/>
                    }
                    <div>
                        <Confirm
                        open={this.state.open}
                        header='No subjects added to create timetable, Do you want to add subjects now?'
                        onCancel={this.handleCancel}
                        onConfirm={this.handleConfirm}
                        content="Click OK to add subjects"
                        />
                    </div>

                    <div>
                        <Confirm
                        open={this.state.delete}
                        header='Are you sure you want to delete the timetable, this action is irreversible'
                        onCancel={this.handleCancel}
                        onConfirm={this.deleteTimetable}
                        />
                    </div>

                </form>
            </div>

        )
    }
}


ViewTimetable.propTypes = {
    dispatch: PropTypes.func,
    actions: PropTypes.object,
    school: PropTypes.object,
    standards:PropTypes.array,
    loadCreateTimetable: PropTypes.func
}

export default ViewTimetable