import React from 'react';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import { connect } from 'react-redux'
import { changePanelValue } from '../redux/actions/requestActions';
import SectionHeader from './SectionHeader';
import InputComponent from './InputComponent';
import {cities} from '../utils/locations'



class SolarLocation extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      chosenCity: "sanFrancisco",
    }
  }

  handleSelectInput = (event) => {
    this.setState({chosenCity: event.target.value })
    // fire off change to Redux for   this.state.chosenCity
  }

  handleClickMarker = (id) => {
    this.setState({chosenCity: id})
    console.log(this.state)
  }


  render(){
    // const currentCityInfo = this.state.cities.filter( city => city.id === this.state.chosenCity)[0]
    // const lat = currentCityInfo.lat
    // const lon = currentCityInfo.lon
    const bounds = [ [48.885, -125], [24.853, -72]  ]
    return (
      <div className="request-section">
        <SectionHeader title="Location"/>
        <form className="request-section-form">
          <select value={this.state.chosenCity} onChange={this.handleSelectInput}>
            { cities.map( city => <option key={city.id} value={city.id}>{city.locName}</option>) }
          </select>
          <p> Latitude: </p>
          <p> Longitude: </p>

        </form>
        <div className="map">
          <Map
            bounds={ bounds }
            zoom={this.state.zoom}
            style={{width: '100%', height: "400px"}}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
          { cities.map( city  => (
            <Marker key={city.id} position={[city.lat, city.lon]}>
              <Popup onOpen={()=>{this.handleClickMarker(city.id)}}>{city.locName}</Popup>
            </Marker>
          )) }


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

const mapDispatchToProps = {
  changePanelValue
}

export default connect(mapStateToProps, mapDispatchToProps)(SolarLocation);

//           <InputComponent
          //   label="Latitude:"
          //   type="number"
          //   storeName="lat"
          //   required={true}
          //   min={-90}
          //   max={90}
          //   suffix="°N"
          // />
          // <InputComponent
          //   label="Longitude:"
          //   type="number"
          //   storeName="lon"
          //   required={true}
          //   min={-180}
          //   max={180}
          //   suffix="°W"
          // />
