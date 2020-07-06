import React, { Component } from 'react';
import {Map,GoogleApiWrapper,Marker, InfoWindow} from 'google-maps-react';
import schoolIcon from './icon-forschools.png'
import busImage from './busImage.svg'
import './style.css'
const style = {
  height : '96%',
  width : '98%'
}

class Maps extends Component {
  constructor(props){
    super(props)
    this.state = {
      lat: null,
      lng: null,
      showingInfoWindow : false,
      activeMarker : null
    }
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude
          })
        }
      )
    }
    const {dispatch,actions,school} = this.props
    dispatch(actions.getAllTracks(school.schoolId))
    setInterval(function(){
      dispatch(actions.getAllTracks(school.schoolId))
    }, 120000)
  }

  onMarkerClick = (props, marker, e) => {
    const {actions, dispatch,school} = this.props
    dispatch(actions.getDriverDetails(school.schoolId, marker.name))
    this.setState({
      activeMarker: marker,
      showingInfoWindow: true
      });
    }

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };


  render() {
    const {school, tracks, driverDetails} = this.props
    return (
      <div>
        <Map
          google={this.props.google}
          style={style}
          center={{
            lat:this.state.lat,
            lng:this.state.lng
          }}
          zoom={12}
          >
            <Marker
              name={'dharwad'}
              position={{lat:this.state.lat, lng: this.state.lng}}
              icon={{
              url : schoolIcon,
              scaledSize: new this.props.google.maps.Size(90, 40)
              }}
              title={school.name}
            />
          {
            tracks && tracks.map((track,id) => {
              return(
                <Marker key={id}
                  onClick={this.onMarkerClick}
                  name={track.trackId}
                  position={{lat:track.latitude, lng:track.longitude }}
                  icon={{
                  url : busImage,
                  scaledSize: new this.props.google.maps.Size(50, 40)
                  }}
                />
              )
            })
          }
          <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div className ="info">
                {driverDetails.firstName  + "  " +  driverDetails.lastName}<br/>
                {'Contact : ' + driverDetails.phoneNumber}<br/>
                {'Route Name : ' + driverDetails.routeName}
              </div>
          </InfoWindow>
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyB-bx1WdVDKRR9sVOlYrCCYir4UOmBQZnw")
  })(Maps) 