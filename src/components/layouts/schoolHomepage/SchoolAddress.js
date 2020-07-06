import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import './SchoolHomePage.css'

class SchoolAddress extends Component{

    render(){
        let address = this.props.schoolTemplate.address
        let line1= '',
        line2= '',
        city= '',
        postalCode='',
        state='',
        country = '',
        dist = ''

        if (address !== undefined) {
            line1= address.line1 || ''
            line2= address.line2 || ''
            country= address.country || ''
            state= address.state || ''
            dist= address.dist || ''
            city= address.city || ''
            postalCode= address.postalCode || ''
        }

        return (

            <Header as='h5' className='address'>
                {line1} ,
                {line2 + ' '}
                {city + ' '}
                {dist + ' '}
                {state} -
                {postalCode + ' '}
                {country + ' '}
            </Header>
      )
    }
}

export default SchoolAddress