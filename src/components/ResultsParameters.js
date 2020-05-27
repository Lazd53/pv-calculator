import React from 'react';

function ResultsParameters({systemInfo}){
  return(
    <div className="results-parameters">
      <h3>Your System:</h3>
      <p className="results-parameters-text">System Capacity: {systemInfo.system_capacity}kWh</p>
      <p className="results-parameters-text">Panel Type: {systemInfo.module_type}</p>
      <p className="results-parameters-text">System Losses: {systemInfo.losses}%</p>
      <p className="results-parameters-text">Mounting Type: {systemInfo.array_type}</p>
      <p className="results-parameters-text">Orientation:</p>
      <p className="results-parameters-text indent-p">Azimuth: {systemInfo.azimuth} deg</p>
      <p className="results-parameters-text indent-p">Tilt: {systemInfo.tilt} deg</p>
      <p className="results-parameters-text">Location: San Francisco</p>
      <p className="results-parameters-text indent-p">Latitude: {systemInfo.lat} </p>
      <p className="results-parameters-text indent-p">Longitude: {systemInfo.lon} </p>
    </div>
  )
}



export default ResultsParameters
