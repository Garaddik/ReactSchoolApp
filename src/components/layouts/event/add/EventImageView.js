import React, { Component } from 'react'
import './AddEventImage.css'
import { Icon } from 'semantic-ui-react'
import { Modal, TextArea, Button, Header } from 'semantic-ui-react'

class EventImageView extends Component {

    constructor(props) {
    super(props)
        this.state=({
            open:false,
            description:this.props.image.description || ''
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
        const { school, actions, eventId,image } = this.props
        this.setState({
            uploadLoader: 'loading',
            open: false
        })
        actions.updateEventGalleryImageDescription(school.schoolId, eventId, image.eiId,{description: this.state.description});
    }

    handleDescriptionChange(event) {
        this.setState({
            description: event.target.value
        })
    }

    deleteImage() {
        const { actions, school, eventId, image, deleteParentMethod } = this.props
        let response = actions.deleteEventImage(school.schoolId, eventId, image.eiId)
        response.then(function (response) {
            if (response) {
                deleteParentMethod(image);
            }
        })
    }


    render() {
        return (
            <div className="ui card event-add-upload-css add-card" >
                <div className="ui floating delete-img-css" onClick={this.deleteImage}><Icon className="ui circular teal top right" name="trash" /></div>
                <div className="image">
                    <img className="upload-img-css" src={this.props.image.imagePath} alt="upload" />
                </div>
                <div className="description">
                    <div>{this.state.description}
                        <Icon className="edit-event-icon-css" name="edit" onClick={this.editDescription} />
                    </div>
                </div>

                <Modal
                    open={this.state.open}
                    size='small'>
                    <Header icon='upload' content='Upload Image!' />
                    <Modal.Content>
                        <TextArea className="modal-text-css" maxLength={150}
                            placeholder="Please add description." columns={10} control='input' value={this.state.description} onChange={this.handleDescriptionChange} />
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

export default EventImageView
