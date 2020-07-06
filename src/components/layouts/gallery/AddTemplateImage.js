import React, { Component } from 'react'
import './AddTemplateImage.css'
import { Button, TextArea, Modal, Header } from 'semantic-ui-react'
import addLogo from '../../../public/add-button.png'

class AddTemplateImage extends Component {

    constructor(props) {
        super(props)
        this.fileSelectedHandler = this.fileSelectedHandler.bind(this)
        this.state = {
            uploadLoader: '',
            open: false,
            title: ''
        }
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
        this.uploadFile = this.uploadFile.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    handleDescriptionChange(event) {
        this.setState({
            title: event.target.value
        })
    }

    fileSelectedHandler(event) {
        if (event.target.files === undefined) {
            this.setState({
                logoError: 'error',
            })
        } else {
            const fileForm = new FormData()
            fileForm.append('file', event.target.files[0])
            this.setState({
                fileForm: fileForm,
                open: true
            })
        }
    }

    handleCancel() {
        this.setState({
            open: false
        })
    }

    uploadFile() {
        const { school, actions, templateId } = this.props
        this.setState({
            uploadLoader: 'loading',
            open: false
        })
        let response = actions.uploadTemplateGalleryImage(school.schoolId, templateId, this.state.fileForm, this.state.title);
        response.then(function (response) {
            if (response) {
                this.props.addOrRemoveImage()
                this.setState({
                    uploadLoader: '',
                    title: '',
                    open: false
                })
            }
        }.bind(this))
    }

    render() {
        return (
            <div className="border" >
                <input type="file" onChange={this.fileSelectedHandler} className="inputfile" id="embedpollfileinput" />
                <label htmlFor="embedpollfileinput" >
                    <div className="image ">
                        <img className="upload-img-css" src={addLogo} alt="school" />
                    </div>
                </label>
                <Modal
                    open={this.state.open}
                    size='small'>
                    <Header icon='upload' content='Upload Image!' />
                    <Modal.Content>
                        <TextArea className="modal-text-css" maxLength={150}
                            placeholder="Please add description." columns={10} control='input' value={this.state.title} onChange={this.handleDescriptionChange} />
                    </Modal.Content>
                    <Modal.Actions>
                        <Button basic color='teal' type="button" onClick={this.uploadFile}>Upload</Button>
                        <Button basic color='teal' type="button" onClick={this.handleCancel}>Cancel</Button>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

export default AddTemplateImage