import React from 'react';

function ResultsParameters(){

  return(
    <div className="results-parameters">
      <h3>Your System:</h3>
      <p className="results-parameters-text">System Capacity: 5kWh</p>
      <p className="results-parameters-text">Panel Type: Premium</p>
      <p className="results-parameters-text">System Losses: 5%</p>
      <p className="results-parameters-text">Mounting Type: Fixed-Open</p>
      <p className="results-parameters-text">Orientation:</p>
      <p className="results-parameters-text indent-p">Azimuth: 15 deg</p>
      <p className="results-parameters-text indent-p">Tilt: 15 deg</p>
      <p className="results-parameters-text">Location: San Francisco</p>
      <p className="results-parameters-text indent-p">Latitude: 40</p>
      <p className="results-parameters-text indent-p">Longitude: 50</p>
    </div>
  )
}



export default ResultsParameters
