import React, { Component } from "react"
import SchoolContact from './SchoolContact'
import { Grid, Image } from 'semantic-ui-react'
import SchoolName from './SchoolName'
import './SchoolHomePage'
import GalleryList from "./GalleryList"
import SchoolAddress from './SchoolAddress'
import SchoolDetails from "./SchoolDetails"
import logo from './logo.png'

class TemplateDetails extends Component {

  render() {
    const { school, schoolTemplate } = this.props
    return (
      <div>
        <SchoolContact school={school} />
        <div className='name-logo-wrapper'>
          <Image src={schoolTemplate.logoPath ? schoolTemplate.logoPath : logo} size='small' className='logo' />
        </div>
        <div className='name-wrapper'>
          <SchoolName school={school} />
        </div>
        <Grid celled>
          <Grid.Row centered>
            <Grid.Column width={10}>
              <GalleryList imageList={schoolTemplate.galleryList} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row centered>
            <Grid.Column width={10}>
              <SchoolDetails schoolTemplate={schoolTemplate} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row centered>
            <Grid.Column width={10}>
              <SchoolAddress schoolTemplate={schoolTemplate} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
export default TemplateDetails
