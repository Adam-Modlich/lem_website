import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Component } from 'react';

export class MapContainer extends Component {
  
  render() {
    const style = {
      width: '500px',
      height: '500px'
    }

    const containerStyle = {
      position: 'relative',  
      width: '500px',
      height: '500px'
    }
    return (
      <Map google={this.props.google} zoom={14} 
      containerStyle={containerStyle}
      style={style}

      >
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCNj6nEA0jr-yJ0-ISVcDVEyYmtVwvl6bI")
})(MapContainer)