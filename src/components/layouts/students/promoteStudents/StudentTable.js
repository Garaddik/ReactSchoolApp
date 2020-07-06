import React, {Component} from 'react'
import { Table, Button, Confirm, Message } from 'semantic-ui-react'
import MyCheckbox from './MyCheckbox'

export default class StudentTable extends Component {
    constructor(props){
        super(props)
        this.state = {
            checked: false,
            promotionList : [],
            toStandardMissing: false,
            toYearMissing : false,
            noStudents : false,
            success : false,
            failedPromotion : false
        }
        this.addStudents =  this.addStudents.bind(this)
        this.promoteStudents = this.promoteStudents.bind(this)
        this.selectAll = this.selectAll.bind(this)
        this.unSelectAll = this.unSelectAll.bind(this)
    }

    addStudents = (student, removal) => {
        let studentArray = this.state.promotionList
        if(removal === 'removeStudent'){
            for( let i = 0; i < studentArray.length; i++){
                if(student.studentId === studentArray[i].studentId){
                    studentArray.splice(i, i)
                    this.setState({
                        promotionList : studentArray
                    })
                }
            }
        }
        else{
            this.state.promotionList.push(student)
        }
    }

    promoteStudents = () => {
        if(this.props.standardTo === ''){
            this.setState({
                toStandardMissing : true
            })
        }

        else if(this.props.yearTo === ''){
            this.setState({
                toYearMissing : true
            })
        }

        else if(this.state.promotionList.length === 0){
            this.setState({
                noStudents : true
            })
        }
        else {
            const {actions, yearTo, school, standardTo} = this.props
            let onFailure = actions.promoteStudents(school.schoolId, standardTo, yearTo, this.state.promotionList)
            onFailure.then((onFailure) => {
                if(onFailure){
                    this.setState({
                        failedPromotion : true
                    })
                    setTimeout(function(){
                        this.setState({
                            failedPromotion:false
                        })
                   }.bind(this),3000)
                }
                else{
                    this.setState({
                        success : true
                    })
                    setTimeout(function(){
                        this.setState({
                            success:false
                        })
                        this.props.resetStandards()
                   }.bind(this),3000)
                }
            })
            this.unSelectAll()
        }
    }

    handleStandardButton = () => {
        this.setState({
            toStandardMissing: false
        })
    }

    handleStudentButton = () => {
        this.setState({
            noStudents: false
        })
    }

    handleYearButton = () => {
        this.setState({
            toYearMissing: false
        })
    }

    selectAll = () => {
        var checkbox = document.getElementsByClassName('checkbox')
        for(let i=0; i<checkbox.length; i++){
            if(checkbox[i].className === 'ui fitted checkbox'){
                checkbox[i].click()
            }
        }
    }

    unSelectAll = () => {
        var checkbox = document.getElementsByClassName('checkbox')
        for(let i=0; i<checkbox.length; i++){
            if(checkbox[i].className === 'ui checked fitted checkbox'){
                checkbox[i].click()
            }
        }
        this.setState({
            promotionList : []
        })
    }

    render(){
        const {students} = this.props
        return(
            <div>
                {
                    this.state.success && 
                    <Message positive>
                        <Message.Header style={{textAlign: 'center'}}>Selected Students Promoted to the selected standard</Message.Header>
                    </Message>
                }
                {
                    this.state.failedPromotion && 
                    <Message negative>
                        <Message.Header style={{textAlign: 'center'}}>Promotion Failed</Message.Header>
                        <p style={{textAlign: 'center'}}>
                            Some students have already been promoted, please check the selected students
                        </p>
                    </Message>
                }
                <Button basic color='teal' type="button" onClick={this.selectAll}>Select all</Button>
                <Button basic color='teal' type="button" onClick={this.unSelectAll}>Clear</Button>
            <Table celled structured>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell rowSpan='1' textAlign='center' width='2'>Roll No</Table.HeaderCell>
                        <Table.HeaderCell rowSpan='1' textAlign='center' width='4'>Name</Table.HeaderCell>
                        <Table.HeaderCell rowSpan='1' textAlign='center' width='2'>Select/Unselect</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    { students.map((student, index) => {
                        return(
                            <Table.Row key={index}>
                                <Table.Cell textAlign='center'>{index + 1}</Table.Cell>
                                <Table.Cell textAlign='center'>
                                    {student.firstName + ' ' + student.lastName}
                                </Table.Cell>
                                <Table.Cell textAlign='center'>
                                   <MyCheckbox studentId={student.studentId} addStudents={this.addStudents} />
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
            <Button basic color='teal' type="button" onClick={this.promoteStudents}>Promote</Button>
            <Confirm style={{textAlign : 'center'}}
                open={this.state.toStandardMissing}
                header='Please select a standard to promote'
                onCancel={this.handleStandardButton}
                onConfirm={this.handleStandardButton}
                content = "Please click OK to select standard"
            />
            <Confirm style={{textAlign : 'center'}}
                open={this.state.noStudents}
                header='No students selected to promote'
                onCancel={this.handleStudentButton}
                onConfirm={this.handleStudentButton}
                content = "Please click OK to select students"
            />
            <Confirm style={{textAlign : 'center'}}
                open={this.state.toYearMissing}
                header='Please select "To Academic Year" to promote'
                onCancel={this.handleYearButton}
                onConfirm={this.handleYearButton}
                content = "Please click OK to select students"
            />
            </div>
        )
    }
}
