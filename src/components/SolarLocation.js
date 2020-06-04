import React from 'react';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import { connect } from 'react-redux'

import SectionHeader from './SectionHeader';
import InputComponent from './InputComponent';



class SolarLocation extends React.Component{
  state = {
    lat: 37.7749,
    lng: -122.4194,
    zoom: 4
  }
  render(){
    console.log(this.props)
    // const
    const bounds = [ [48.885, -125], [24.853, -78]  ]
    return (
      <div className="request-section">
        <SectionHeader title="Location"/>
        <form className="request-section-form">
          <InputComponent
            label="Latitude:"
            type="number"
            storeName="lat"
            required={true}
            min={-90}
            max={90}
            suffix="°N"
          />
          <InputComponent
            label="Longitude:"
            type="number"
            storeName="lon"
            required={true}
            min={-180}
            max={180}
            suffix="°W"
          />
        </form>
        <div className="map">
          <Map
            bounds={ bounds }
            zoom={this.state.zoom}
            style={{width: '100%', height: "400px"}}
            onClick={(e) => console.log(e)}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
          <Marker position={[this.props.lat, this.props.lon]}>
            <Popup>A pretty CSS3 popup</Popup>
          </Marker>

          </Map>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lat: state.panelRequestInfo.lat,
    lon: state.panelRequestInfo.lon
  }
}

export default connect(mapStateToProps)(SolarLocation);
