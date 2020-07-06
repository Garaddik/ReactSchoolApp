import React, { Component } from 'react'
import addLogo from '../../../../public/add-button.png'
import './AddEventImage.css'
import { Modal, TextArea, Button, Header } from 'semantic-ui-react'

class AddEventImage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: '',
            open: false
        }
        this.fileSelectedHandler = this.fileSelectedHandler.bind(this)
        this.uploadFile = this.uploadFile.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    }

    handleCancel(){
        this.setState({
            open:false
        })
    }

    handleDescriptionChange(event) {

        this.setState({
            description: event.target.value
        })
    }
    uploadFile() {
        const { school, actions, eventId } = this.props
        this.setState({
            uploadLoader: 'loading',
            open: false
        })
        let response = actions.uploadEventGalleryImage(school.schoolId, eventId, this.state.fileForm, this.state.description);
        response.then(function (response) {
            if (response) {
                this.props.parentMethod(response)
                this.setState({
                    uploadLoader: '',
                    description: '',
                    open: false
                })
            }
        }.bind(this))
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
                open: true,
                fileForm: fileForm
            })
        }
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
                            placeholder="Please add description." columns={10} control='input' value={this.state.description} onChange={this.handleDescriptionChange} />
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

export default AddEventImage