import React, {Component} from 'react'
import { Button, Input, Confirm} from 'semantic-ui-react'
import PropTypes from 'prop-types'

class Subject extends Component{
constructor(props){
    super(props);
    this.state = {
        isEdit : true,
        delete: false,
        subject: {
            subjectId : this.props.subject.subjectId,
            name: this.props.subject.name
        }
    }
    this.showUpdateButton = this.showUpdateButton.bind(this)
    this.updateSubjectName = this.updateSubjectName.bind(this)
    this.updateSubject = this.updateSubject.bind(this)
    this.deleteSubject = this.deleteSubject.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
}

handleDelete = () => {
    this.setState({
        delete : true
    })
}
    showUpdateButton = () => {
        this.setState({
            isEdit : false
        })
        }
    updateSubjectName = (event) => {
       this.setState({
        subject: {
            subjectId: this.state.subject.subjectId,
            name: event.target.value
        }
       })
    }

    updateSubject = () => {
        const {dispatch,actions,school} = this.props
        dispatch(actions.updateSubject(school.schoolId,this.state.subject))
        this.setState({
            isEdit : true
        })
    }

    deleteSubject = () => {
            const {dispatch,actions,school} = this.props
            dispatch(actions.deleteSubject(school.schoolId,this.props.subject.subjectId))
        
    }

    handleCancel = () => {
        this.setState({
            open: false,
            delete : false
        })
    }

    render(){
        const subject = this.props.subject
        return(
            <div className=' four fields'>
                <div className='five wide field'>
                    {this.state.isEdit &&   <
                         Input control='input' placeholder='Enter the subject' >{subject.name}</Input>
                    }
                    {
                        !this.state.isEdit &&   
                        <Input onChange={this.updateSubjectName} control='input' placeholder='Enter the subject' defaultValue={subject.name}></Input>
                    }
                </div>
                <div className='two wide field'>
                     {this.state.isEdit &&  <Button basic color='teal' type='button' onClick={this.showUpdateButton}>Edit</Button>}
                     {!this.state.isEdit &&  <Button basic color='teal' type='button' onClick={this.updateSubject}>Update</Button>}
                </div>
                <div  className='two wide field'>
                { <Button basic color='teal' type="button" onClick={this.handleDelete}>Delete</Button>}
                    </div>

                    <div>
                        <Confirm
                        open={this.state.delete}
                        header='Are you sure you want to delete the subject, this action is irreversible'
                        onCancel={this.handleCancel}
                        onConfirm={this.deleteSubject}
                        />
                    </div>
            </div> 

        )
    }
}

Subject.propTypes = {
    dispatch: PropTypes.func,
    actions: PropTypes.object,
    subject: PropTypes.object,
    updateSubject:PropTypes.func,
    school: PropTypes.object
}

export default Subject