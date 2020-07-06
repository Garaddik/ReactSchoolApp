import React, { Component } from 'react'
import { Modal, TextArea, Button, Header, Icon } from 'semantic-ui-react'
import './Gallery.css'

class ViewTemplateImage extends Component {
    constructor(props) {
        super(props)
        this.state=({
            open:false,
            title:this.props.galleryImage.title || ''
        })
        this.deleteImage = this.deleteImage.bind(this)
        this.editDescription = this.editDescription.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
        this.update = this.update.bind(this)
    }

    handleCancel(){
        this.setState({
            open:false
        })
    }
    
    editDescription() {
        this.setState({
            open:true
        })
    }

    update() {
        const { school, actions, templateId, galleryImage } = this.props
        this.setState({
            uploadLoader: 'loading',
            open: false
        })
        actions.updateEventGalleryImageDescription(school.schoolId, templateId, galleryImage.galleryId, {title: this.state.title});
    }

    handleDescriptionChange(event) {
        this.setState({
            title: event.target.value
        })
    }

    deleteImage() {
        const { school, actions, templateId, galleryImage } = this.props
        let response = actions.deleteGalleryImage(school.schoolId, templateId, galleryImage.galleryId)
        response.then(function (response) {
            if (response === 'SUCCESS') {
                this.props.addOrRemoveImage()
            }
        }.bind(this))
    }
    render() {
        const { galleryImage } = this.props
        return (
            <div className="ui card event-add-upload-css add-card" >
                <div className="ui floating delete-img-css" onClick={this.deleteImage}><Icon className="ui circular teal top right" name="trash" /></div>
                <div className="image">
                    <img className="upload-img-css" src={galleryImage.path} alt="upload" />
                </div>
                <div className="description">
                    <div>{this.state.title}
                        <Icon className="edit-event-icon-css" name="edit" onClick={this.editDescription} />
                    </div>
                </div>

                <Modal
                    open={this.state.open}
                    size='small'>
                    <Header icon='upload' content='Upload Image!' />
                    <Modal.Content>
                        <TextArea className="modal-text-css" maxLength={150}
                            placeholder="Please add description." columns={10} control='input' value={this.state.title} onChange={this.handleDescriptionChange} />
                    </Modal.Content>
                    <Modal.Actions>
                        <Button basic color='teal' type="button" onClick={this.update}>Upload</Button>
                        <Button basic color='teal' type="button" onClick={this.handleCancel}>Cancel</Button>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

export default ViewTemplateImage