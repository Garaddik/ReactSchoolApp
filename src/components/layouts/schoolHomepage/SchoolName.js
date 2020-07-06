import React,{Component} from "react"
import { Header } from 'semantic-ui-react'
import './SchoolHomePage.css'

class SchoolName extends Component {

    render() {
      const {school} = this.props
      return (
        <Header as='h2' className='school-name'>{school.name}</Header>
      )
    }
  }
export default SchoolName
