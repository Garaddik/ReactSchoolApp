import React, {Component} from 'react'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"

export default class GalleryList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showIndex: false,
      showBullets: true,
      infinite: true,
      showThumbnails: true,
      showFullscreenButton: true,
      showGalleryFullscreenButton: true,
      showPlayButton: true,
      showGalleryPlayButton: true,
      showNav: true,
      isRTL: false,
      slideDuration: 450,
      slideInterval: 2000,
      thumbnailPosition: 'bottom',
      showVideo: {},
      images : []
    };
  }

  componentWillReceiveProps = (newProps) => {
    let multimediaList = this.state.images
    if (newProps !== undefined && newProps.imageList !== undefined) {
      newProps.imageList.map((image, idx) =>  {
          var fileType = (image.path).split('.').pop()
          if(fileType === 'jpg' || fileType === 'jpeg' || fileType === 'png' || fileType === 'gif' || fileType === 'tiff' || fileType === 'bmp'){
            multimediaList.push({
              'original': image.path,
              'thumbnail': image.path,
              'description': image.title,
            })
            this.setState({
              images : multimediaList
            })
          }
          else{
            multimediaList.push({
              'thumbnail': '/assets/images/VideoPlaceHolder.png',
              'original': '/assets/images/VideoPlaceHolder.png',
              'embedUrl': image.path,
              'description': image.title,
              'renderItem': this._renderVideo.bind(this)
            })
            this.setState({
              images : multimediaList
            })
          }
          return(
            this.state.images
          )
      })
  }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.slideInterval !== prevState.slideInterval ||
        this.state.slideDuration !== prevState.slideDuration) {
      // refresh setInterval
      this._imageGallery.pause();
      this._imageGallery.play();
    }
  }

  _handleInputChange(state, event) {
    this.setState({[state]: event.target.value});
  }

  _handleCheckboxChange(state, event) {
    this.setState({[state]: event.target.checked});
  }

  _handleThumbnailPositionChange(event) {
    this.setState({thumbnailPosition: event.target.value});
  }

  _resetVideo() {
    this.setState({showVideo: {}});

    if (this.state.showPlayButton) {
      this.setState({showGalleryPlayButton: true});
    }

    if (this.state.showFullscreenButton) {
      this.setState({showGalleryFullscreenButton: true});
    }
  }

  _toggleShowVideo(url) {
    this.state.showVideo[url] = !(this.state.showVideo[url]);
    this.setState({
      showVideo: this.state.showVideo
    });

    if (this.state.showVideo[url]) {
      if (this.state.showPlayButton) {
        this.setState({showGalleryPlayButton: false});
      }

      if (this.state.showFullscreenButton) {
        this.setState({showGalleryFullscreenButton: false});
      }
    }
  }

  _renderVideo(item) {
    return (
      <div>
        {
          this.state.showVideo[item.embedUrl] ?
            <div>
                <a
                  className='close-video'
                  onClick={this._toggleShowVideo.bind(this, item.embedUrl)}
                >
                </a>
                <iframe
                  width='860'
                  height='515'
                  title='video'
                  src={item.embedUrl}
                  frameBorder='0'
                  allowFullScreen
                >
                </iframe>
            </div>
          :
            <a onClick={this._toggleShowVideo.bind(this, item.embedUrl)}>
              <div className='play-button'></div>
              <img src={item.original} alt=''/>
              {
                item.description &&
                  <span
                    className='image-gallery-description'
                    style={{right: '0', left: 'initial'}}
                  >
                    {item.description}
                  </span>
              }
            </a>
        }
      </div>
    );
  }

  render() {
    return (
        <ImageGallery
          items={this.state.images}
          lazyLoad={false}
          showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
          showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
          showThumbnails={this.state.showThumbnails}
          showIndex={this.state.showIndex}
          showNav={this.state.showNav}
          isRTL={this.state.isRTL}
          thumbnailPosition={this.state.thumbnailPosition}
          slideDuration={parseInt(this.state.slideDuration, 10)}
          slideInterval={parseInt(this.state.slideInterval, 10)}
        />
    );
  }
}