import React from 'react';
import {Map, TileLayer, Marker, Popup, Tooltip} from 'react-leaflet';
import { connect } from 'react-redux'
import { changeCoordinates } from '../redux/actions/requestActions';
import SectionHeader from './SectionHeader';
import InputComponent from './InputComponent';
import {cities} from '../utils/locations'



class SolarLocation extends React.Component{

  handleSelectInput = (event) => {
    this.handleRedux( event.target.value )
  }

  handleClickMarker = (id) => {
    this.handleRedux(id)
  }

  handleRedux = (newId) => {
    const chosenCityProps = cities.filter( x => x.id === newId)[0]
    this.props.changeCoordinates( {
      lat:chosenCityProps.lat,
      lon:chosenCityProps.lon,
      cityId: newId,
      cityName: chosenCityProps.locName
    })
  }

  round = (num, places) => {
    return Number.parseFloat(num).toFixed(places)
  }

  render(){
    const bounds = [ [48.885, -125], [24.853, -72]  ]
    const {props, round, handleClickMarker, handleSelectInput} = this
    return (
      <div className="request-section">
        <SectionHeader title="Location"/>
        <form className="request-section-form input-component">
          <select
            value={props.cityId}
            onChange={handleSelectInput}
            className="input-fields"
            >
            { cities.map( city => <option key={city.id} value={city.id}>{city.locName}</option>) }
          </select>
          <p className="location-coords"> Latitude: {Math.round(props.lat, 2)} °N <br/> Longitude: {Math.round(props.lon*-1, 2)} °W </p>

        </form>
        <div className="map">
          <Map
            bounds={ bounds }
            style={{width: '90%', height: "400px"}}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
          { cities.map( city  => (
              <Marker onClick={()=>{handleClickMarker(city.id)}} key={city.id} opacity={10} position={[city.lat, city.lon]}>
                <Tooltip>{city.locName}</Tooltip>
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
    lon: state.panelRequestInfo.lon,
    cityId: state.panelRequestInfo.cityId,
    cityName: state.panelRequestInfo.cityName

  }
}

const mapDispatchToProps = {
  changeCoordinates
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
