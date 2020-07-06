import React, {Component} from 'react'
import PropTypes from 'prop-types'
import StudentTable from './StudentTable'
import { Message } from 'semantic-ui-react'

class PromoteStudents extends Component{
    constructor(props){
        super(props);
        this.state ={
            standardFrom : '',
            standardTo : '',
            yearFrom : '',
            yearTo : '',
            sameAcademicyear: false
        }
        this.selectStandardFrom = this.selectStandardFrom.bind(this)
        this.selectStandardTo = this.selectStandardTo.bind(this)
        this.resetStandards = this.resetStandards.bind(this)
    }

   selectStandardFrom = (event) =>{ 
    if(event.target.value !== ''){
        this.setState({
            standardFrom : event.target.value
        })
       }
    }

   selectYearFrom = (event) =>{ 
    if(event.target.value !== ''){
        this.setState({
            yearFrom : event.target.value
        })
        const {dispatch,actions,school} = this.props
        dispatch(actions.allStudents(school.schoolId, this.state.standardFrom, event.target.value))
       }
    }

   selectStandardTo = (event) =>{ 
    if(event.target.value !== ''){
        this.setState({
            standardTo : event.target.value
        })
       }
    }

   selectYearTo = (event) =>{ 
    if(event.target.value !== ''){
        this.setState({
            yearTo : event.target.value
        })
       }
    }

    resetStandards = () => {
        this.setState({
            standardFrom : '',
            standardTo : '',
        })
    }
    
    render(){
        const {standards} =  this.props
        const years = this.props.years
        return(
            <div>
                <h3 className='ui dividing header' style={{marginBottom : '10px'}}>Promote Students</h3>
                <form className='ui form' name='form-data'>
                {
                        this.state.sameAcademicyear &&
                        <Message negative>
                            <Message.Header style={{textAlign: 'center'}}>Same 'From' and 'To' Academic Year</Message.Header>
                            <p style={{textAlign: 'center'}}>
                                Promotion not possible when 'From' and 'To' academic years are same
                            </p>
                        </Message>
                    }
                    <div className='field'>
                        <div className='four fields'>
                            <div className="three wide field">
                                <label style={{lineHeight:'2.5em'}}>Select Standard From</label> 
                            </div>
                            <div className="three wide field" style={{marginRight: '11rem'}}>
                                <select onChange={this.selectStandardFrom}  value={this.state.standardFrom} className="ui dropdown ui compact menu ">
                                    <option value="">Standards</option>
                                    {standards && standards.map(function(standard, id){
                                        return(
                                            <option  key={id} value={standard.standardId}>{standard.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="three wide field" style={{marginLeft : '11rem'}}>
                                <label style={{lineHeight:'2.5em'}}>Select Standard To</label> 
                            </div>
                            <div className="three wide field">
                                <select onChange={this.selectStandardTo}  value={this.state.standardTo} className="ui dropdown ui compact menu ">
                                    <option value="">Standards</option>
                                    {standards && standards.map(function(standard, id){
                                        return(
                                            <option  key={id} value={standard.standardId}>{standard.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className='four fields'>
                            <div className="three wide field">
                                <label style={{lineHeight:'2.5em'}}>From Academic Year</label> 
                            </div>
                            <div className="three wide field" style={{marginRight: '11rem'}}>
                                <select onChange={this.selectYearFrom}  value={this.state.yearFrom} className="ui dropdown ui compact menu ">
                                    <option value="">Years</option>
                                    {years && years.map(function(year, id){
                                        return(
                                            <option  key={id} value={year.eduYearId}>{year.eduYearId}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="three wide field" style={{marginLeft : '11rem'}}>
                                <label style={{lineHeight:'2.5em'}}>To Academic Year</label> 
                            </div>
                            <div className="three wide field">
                                <select onChange={this.selectYearTo}  value={this.state.yearTo} className="ui dropdown ui compact menu ">
                                    <option value="">Years</option>
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
                        this.state.selectStandardFrom !== '' && this.state.yearFrom !== '' && this.props.students.length !== 0 &&
                        <StudentTable students={this.props.students} yearFrom={this.state.yearFrom}
                        yearTo={this.state.yearTo} actions={this.props.actions} dispatch={this.props.dispatch}
                        school={this.props.school} standardTo={this.state.standardTo}  standardFrom={this.state.standardFrom}
                        resetStandards={this.resetStandards} promotionFailure={this.props.promotionFailure} />
                    }
                    {
                        this.state.selectStandardFrom !== '' && this.state.yearFrom !== '' && this.props.students.length === 0 &&
                        <Message negative>
                            <Message.Header style={{textAlign: 'center'}}>No students</Message.Header>
                            <p style={{textAlign: 'center'}}>
                                There are no students available for the combination of selected standard and academic year
                            </p>
                        </Message>
                    }
                </form>                
            </div>

        )
    }
}

PromoteStudents.propTypes = {
    dispatch: PropTypes.func,
    actions: PropTypes.object,
    students: PropTypes.array,
    school: PropTypes.object,
    standards:PropTypes.array,
}

export default PromoteStudents