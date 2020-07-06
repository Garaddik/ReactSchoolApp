import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Student from './Student'
import NewStudent from './NewStudent'
import ImportStudents from './ImportStudents'
import { Button, Confirm } from 'semantic-ui-react'
import './Students.css'

class Students extends Component{
    constructor(props){
        super(props);
        this.state ={
            selectedStandardId : '',
            open : false,
            selectedYear : ''
        }
        this.selectStandard = this.selectStandard.bind(this)
        this.alertUser = this.alertUser.bind(this)
    }

    componentDidMount(){
        const {dispatch,actions,school} = this.props
        dispatch(actions.allStandards(school.schoolId))
    }

    componentWillReceiveProps(newProps){
        if(newProps.standardId !== ''){
            this.setState({
                selectedStandardId : newProps.standardId
            })
        }
    }

   selectStandard = (event) =>{ 
    if(event.target.value !== ''){
       this.setState({
           selectedStandardId : event.target.value
       })
        const {dispatch,actions,school, activeYear} = this.props
        dispatch(actions.allStudents(school.schoolId, event.target.value, activeYear.eduYearId))
       }
    }

    alertUser = () => {
        this.setState({
            open: true
        })
    }

    handleConfirm = () => {
        this.setState({
            open: false
        })
    }
    handleCancel = () => {
        this.setState({
            open: false
        })
    }
    
    render(){
        const {actions,dispatch,school,standards, loadStudentDetails, deleteStudent} =  this.props
        return(
            <div>
                <h3 className='ui dividing header' style={{marginTop : 'auto'}}> Students</h3>
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
                            <div className="three wide field">
                            {
                                this.state.selectedStandardId === '' ?
                                <Button basic color='teal' type="button" onClick={this.alertUser}>Import Students</Button>
                                :
                                <ImportStudents school={school} standardId={this.state.selectedStandardId} 
                                dispatch={dispatch} actions={actions} activeYear={this.props.activeYear}/>
                            }
                            <Confirm
                                open={this.state.open}
                                header='Please select a standard before importing students'
                                onCancel={this.handleCancel}
                                onConfirm={this.handleConfirm}
                                content = "Please click OK to select standard"
                            />
                            </div>
                            <div className="four wide field">
                            <a href="/assets/formats/Template.xlsx" download="Template.xlsx"><Button basic color='teal' type="button" style={{marginLeft : '20px'}}>Download Template</Button></a>
                            </div>
                        </div>
                    </div>
                    <NewStudent school={school} standardId={this.state.selectedStandardId} 
                        dispatch={dispatch} actions={actions} activeYear={this.props.activeYear}/>
                    { this.state.selectedStandardId !== '' && this.props.students && this.props.students.map((student, idx) => {
                        return(
                            <div className='field' key={idx}>
                                <Student student={student} index = {idx} key={idx} actions={actions} dispatch={dispatch}
                                    school={school} loadStudentDetails = {loadStudentDetails}
                                    standardId = {this.state.selectedStandardId}
                                    deleteStudent = {deleteStudent}
                                />
                                </div>
                        )
                    })}
                </form>
            </div>

        )
    }
}

Students.propTypes = {
    dispatch: PropTypes.func,
    actions: PropTypes.object,
    students: PropTypes.array,
    school: PropTypes.object,
    standards:PropTypes.array,
    loadStudentDetails: PropTypes.func
}

export default Students