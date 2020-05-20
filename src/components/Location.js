import React from 'react';
import RequestsSectionHeader from './RequestsSectionHeader';
import InputComponent from './InputComponent';

class Location extends React.Component{

  render(){

    return (
      <div className="request-section">
        <RequestsSectionHeader title="Location"/>
        <form className="request-section-form">
          <InputComponent
            label="Latitude:"
            type="number"
            required={true}
            min={-90}
            max={90}
          />
          <InputComponent
            type="number"
            label="Longitude:"
            required={true}
            min={-180}
            max={180}
          />
        </form>
      </div>
    )
  }
}

export default Location;
