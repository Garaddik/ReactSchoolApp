import React , {Component} from 'react'
import { Checkbox } from 'semantic-ui-react'

export default class MyCheckbox extends Component {
    constructor(props){
        super(props)
        this.state = {
            checked : this.props.checked,
            students : []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = () => {
        if(this.state.checked === true){
            this.setState({
                checked : !this.state.checked
            })
            const student = {studentId : this.props.studentId}
            this.props.addStudents(student, 'removeStudent')
        }
        else{
            this.setState({
                checked : !this.state.checked
            })
            const student = {studentId : this.props.studentId}
            this.props.addStudents(student)
        }
    }
    render(){
        return(
            <Checkbox 
                checked={this.state.checked}
                onChange={this.handleChange}
                style={{marginBottom : 'auto'}}
            />
        )
    }
}