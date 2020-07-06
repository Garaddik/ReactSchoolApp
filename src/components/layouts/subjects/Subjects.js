import React, {Component} from 'react'
import { Button, Input} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import Subject from './Subject'

class Subjects extends Component{
    constructor(props){
        super(props);
        this.state ={
            subjectName : ''
        }
        this.addSubject = this.addSubject.bind(this)
        this.getSubject = this.getSubject.bind(this)
    }

    componentDidMount(){
        const {dispatch,actions,school} = this.props
        dispatch(actions.getAllSubjects(school.schoolId))
    }
    addSubject = () => {
        if(this.state.subjectName !== '') {
            const subject = {
                name : this.state.subjectName
            }
            const {dispatch,actions,school} = this.props
            dispatch(actions.addSubject(school.schoolId,subject))
            this.setState({
                subjectName: ''
            })
        }
    }

    getSubject = (event) => {
        this.setState({
            subjectName : event.target.value
        })
   }
    
    render(){
        const {subjects,actions,dispatch,school} =  this.props
        return(
            <div>
                <h3 className='ui dividing header'> Subjects</h3>
                <form className='ui form' name='form-data'>
                    <div className='field'>
                        <div className=' four fields'>
                            <div className='five wide field'>
                            <Input value={this.state.subjectName}onChange={this.getSubject} control='input' placeholder='Enter the subject'/>
                            </div>
                            <div className='two wide field'>
                            <Button basic color='teal' type="button" onClick={this.addSubject}>Add</Button>
                            </div>
                        </div>
                    </div>
                    {subjects && subjects.map(function(subject, idx){
                        return(
                        <div className='field' key={idx}>
                                <Subject subject={subject} key={idx} actions={actions} dispatch={dispatch} 
                                    school={school}
                                />
                        </div>         
                    )
                    })}
                </form>    
            </div>

        )
    }
}

Subjects.propTypes = {
    dispatch: PropTypes.func,
    actions: PropTypes.object,
    subjects: PropTypes.array,
    school: PropTypes.object
}

export default Subjects