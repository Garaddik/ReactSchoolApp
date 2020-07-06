import React, {Component} from 'react'
import { Tab } from 'semantic-ui-react'
import StudentData from './StudentData'
import PromoteStudents from './promoteStudents/PromoteStudents'
import PreviousYears from './previousYears/PreviousYears'

export default class WrapperStudents extends Component {
    
  render(){
    return(
      <Tab menu={{ color :'teal', secondary: true, pointing: true }}
        panes={[
                { 
                    menuItem: 'Students', render: () => 
                    <Tab.Pane attached={false}>
                        <StudentData dispatch={this.props.dispatch} actions={this.props.actions} students={this.props.students}
                            school={this.props.school} standards={this.props.standards} studentDetails={this.props.studentDetails}
                            studentAddress={this.props.studentAddress}
                            activeYear={this.props.activeYear}
                            />
                    </Tab.Pane> },
                { menuItem: 'Promote Students', render: () => 
                    <Tab.Pane attached={false}>
                        <PromoteStudents dispatch={this.props.dispatch} actions={this.props.actions} students={this.props.students}
                            school={this.props.school} standards={this.props.standards} years={this.props.years} 
                        />
                    </Tab.Pane> },
                { menuItem: 'Previous Years', render: () => 
                    <Tab.Pane attached={false}>
                        <PreviousYears dispatch={this.props.dispatch} actions={this.props.actions} students={this.props.students}
                            school={this.props.school} standards={this.props.standards} years={this.props.years} />
                    </Tab.Pane>
                },
            ]}
       />
    )
  }
}