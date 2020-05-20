import React from 'react';
import RequestsSectionHeader from './RequestsSectionHeader';
import InputComponent from './InputComponent';

class Location extends React.Component{

  render(){

    return (
      <div className="request-section">
        <RequestsSectionHeader title="Orientation"/>
        <InputComponent
          label="Latitude:"
          type="number"
          required={true}
        />
        <InputComponent
          type="number"
          label="Longitude:"
          required={true}
        />
      </div>
    )
  }
}

export default Location;
