import React, { Component } from 'react'
import AddTemplateImage from './AddTemplateImage'
import ViewTemplateImage from './ViewTemplateImage'
import { Redirect } from 'react-router-dom'
import { Button, Icon} from 'semantic-ui-react'

class GalleryList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: false,
            tempalteUrl: ""
        }
        this.addOrRemoveImage = this.addOrRemoveImage.bind(this)
        this.loadDashboard = this.loadDashboard.bind(this)
    }

    addOrRemoveImage() {
        const { actions, dispatch } = this.props
        dispatch(actions.getSelectedSchoolTemplate(this.props.school.schoolId))
    }

    loadDashboard = () => {
        this.setState({
            templateUrl: '/dashboard/template',
            redirect: true
        })
    }

    render() {
        const { redirect, templateUrl } = this.state
        const { templateId } = this.props.match.params
        const { school, schoolTemplate, actions } = this.props
        let galleryList = schoolTemplate.galleryList
        const addOrRemoveImage = this.addOrRemoveImage
        return (
            <div>
                {redirect && <Redirect to={templateUrl} />}
                <div className='ui dividing header' style={{display:'flex', flexDirection:'row'}}>
                    <Button icon className="back-button" type="button"
                        onClick={() => this.loadDashboard()}>
                            <Icon name='arrow left'/>
                        </Button>
                    <h3> School Images</h3>
                </div>
                <div className="ui four stackable small cards gallery-list-margin-css">
                    {
                        galleryList && galleryList.map(function (galleryImage, idx) {
                            return (
                                <ViewTemplateImage addOrRemoveImage={addOrRemoveImage} key ={idx}
                                    templateId={templateId} school={school} galleryImage={galleryImage} actions={actions} />)
                        })
                    }
                    <AddTemplateImage templateId={templateId} school={school} actions={this.props.actions}
                        addOrRemoveImage={this.addOrRemoveImage}
                    />                </div>
            </div>

        )
    }
}

export default GalleryList