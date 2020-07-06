import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Card, Image } from 'semantic-ui-react'
import './Schools.css'
import {GET_SCHOOL} from '../../../actions/actionType'

class School extends Component{  
  constructor(props){
    super(props)
    this.selectSchool = this.selectSchool.bind(this)
  }

  selectSchool = (school) => {
    const {dispatch} = this.props
    const selectedSchool = {
      type: GET_SCHOOL,
      school : school
    }
    dispatch(selectedSchool)
    window.location.href = "/schools/" + school.schoolId
  }

  render(){
    var {school} = this.props
    return(
      <div>
        <ul>
          <Card.Group>
            <Card
             onClick = {() => this.selectSchool(school)}>
               <Card.Content>
                <Image floated='right' size='large' src={school.template ? school.template.logoPath : null}  />
                <Card.Header> {school.name} </Card.Header>
                <Card.Meta className='contact-details'>
                  Contact number : {school.phoneNumber}<br/>
                  E-mail : {school.email}<br/>
                </Card.Meta>
              </Card.Content>
            </Card>
          </Card.Group>
      </ul>
    </div> 
    )
  }
}

School.propTypes = {
  school: PropTypes.object
}

export default School