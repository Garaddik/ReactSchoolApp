import React, {Component} from 'react'
import PropTypes from 'prop-types'
import PreviousYearsStudents from './PreviousYearsStudents'
import { Message } from 'semantic-ui-react'

class PreviousYears extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedStandardId : '',
            selectedYear : '',
            noStudents : false
        }
        this.selectStandard = this.selectStandard.bind(this)
        this.selectYear = this.selectYear.bind(this)
    }

    selectStandard = (event) => { 
        if(event.target.value !== ''){
            this.setState({
                selectedStandardId : event.target.value
            })
            if(this.state.selectedYear !== ''){
                const {dispatch,actions,school} = this.props
                dispatch(actions.allStudents(school.schoolId, event.target.value, this.state.selectedYear))
                this.setState({
                    noStudents : true
                })
                setTimeout(function(){
                    this.setState({
                        noStudents:false
                    })
               }.bind(this),3000)
            }
        }
    }
    
    selectYear = (event) => { 
        if(event.target.value !== ''){
            this.setState({
                selectedYear : event.target.value
            })
            if(this.state.selectedStandardId !== ''){
                const {dispatch,actions,school} = this.props
                dispatch(actions.allStudents(school.schoolId, this.state.selectedStandardId, event.target.value))
                this.setState({
                    noStudents : true
                })
                setTimeout(function(){
                    this.setState({
                        noStudents:false
                    })
               }.bind(this),3000)
            }
        }
    }
    
    render(){
        const {standards} =  this.props
        const years = this.props.years
        return(
            <div>
                {
                    this.state.noStudents && this.props.students.length === 0 &&
                    <Message warning>
                        <Message.Header style={{textAlign : 'center'}}>No students found</Message.Header>
                        <p style={{textAlign : 'center'}}>
                            There are no students for the selected year and standard
                        </p>
                    </Message>
                }
                <h3 className='ui dividing header' style={{margin : '5px'}}> Promote Students</h3>
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
                            <div className="five wide field">
                                <label style={{lineHeight:'2.5em'}}>Select Year</label> 
                            </div>
                            <div className="five wide field">
                                <select onChange={this.selectYear}  value={this.state.selectedYear} className="ui dropdown ui compact menu ">
                                <option value="">Previous Years</option>
                                {years && years.map(function(year, id){
                                                return(
                                                    <option  key={id} value={year.eduYearId}>{year.eduYearId}</option>
                                                )
                                            })}
                                
                                </select>
                            </div>
                        </div>
                    </div>
                    { 
                        this.state.selectedStandardId !== '' && this.props.students.length !== 0 && 
                        <PreviousYearsStudents students={this.props.students}/>
                    }
                </form>                
            </div>

        )
    }
}

PreviousYears.propTypes = {
    dispatch: PropTypes.func,
    actions: PropTypes.object,
    students: PropTypes.array,
    school: PropTypes.object,
    standards:PropTypes.array,
}

export default PreviousYears