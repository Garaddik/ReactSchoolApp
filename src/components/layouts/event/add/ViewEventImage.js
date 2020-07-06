import React, { Component } from 'react'
import AddEventImage from './AddEventImage'
import EventImageView from './EventImageView'
import { Progress } from 'semantic-ui-react'
import './AddEventImage.css'

class ViewEventImage extends Component {
    constructor(props) {
        super(props)
        const { images } = this.props
        if (images !== undefined) {
            this.state = {
                isExist: true,
                images: this.props.images,
                inprogress: 0,
                percent: 0
            }
        } else {
            this.state = {
                isExist: false,
                images: [],
                inprogress: 0,
                percent: 0
            }
        }
        this.displayAddedImage = this.displayAddedImage.bind(this)
        this.deleteParentMethod = this.deleteParentMethod.bind(this)
    }

    deleteParentMethod(image) {
        let imgs = this.state.images
        imgs = imgs.filter(function (el) { return el.eiId !== image.eiId; });
        this.setState({
            images: imgs
        })
    }
    displayAddedImage(image) {
        this.setState({
            images: [...this.state.images, image],
            isExist: true
        })
    }

    render() {
        const { images, inprogress } = this.state
        const { actions, dispatch, eventId, school } = this.props
        const deleteParentMethod = this.deleteParentMethod
        return (
            <div>
                <span className='ui indicating dividing header'/>
                <h3 className='ui indicating dividing header'> Add Images</h3>
                {
                    inprogress !== 0 &&
                    <Progress percent={this.state.percent} indicating />
                }
                <div className="ui four stackable small cards gallery-list-margin-css">
                    {
                        this.state.isExist === true &&
                        images && images.map(function (image, idx) {
                            return (
                                <EventImageView deleteParentMethod={deleteParentMethod} actions={actions} dispatch={dispatch} image={image} key={idx} eventId={eventId} school={school} />
                            )
                        })
                    }
                    <AddEventImage {...this.props} parentMethod={this.displayAddedImage} />
                </div>
            </div>
        )
    }
}

export default ViewEventImage