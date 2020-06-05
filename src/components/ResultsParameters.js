import React from 'react';
import {accessMountingType, accessPanelType} from '../utils/systemDefinitions';
import {latitude, longitude} from '../utils/helpers';

function ResultsParameters({systemInfo}){
  return(
    <div className="results-parameters">
      <h3>Your System:</h3>
      <p className="results-parameters-text">System Capacity: {systemInfo.system_capacity}kWh</p>
      <p className="results-parameters-text">Panel Type: {accessPanelType(systemInfo.module_type)}</p>
      <p className="results-parameters-text">System Losses: {systemInfo.losses}%</p>
      <p className="results-parameters-text">Mounting Type: <br/><span>{accessMountingType(systemInfo.array_type)}</span></p>
      <p className="results-parameters-text">Orientation:</p>
      <p className="results-parameters-text indent-p">Azimuth: {systemInfo.azimuth}°</p>
      <p className="results-parameters-text indent-p">Tilt: {systemInfo.tilt}°</p>
      <p className="results-parameters-text">Location: {systemInfo.cityName}</p>
      <p className="results-parameters-text indent-p">Latitude: {latitude(systemInfo.lat)} </p>
      <p className="results-parameters-text indent-p">Longitude: {longitude(systemInfo.lon)} </p>
    </div>
  )
}



export default ResultsParameters
