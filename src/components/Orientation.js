import React from 'react';
import RequestsSectionHeader from './RequestsSectionHeader';
import InputComponent from './InputComponent';

class Orientation extends React.Component{

  render(){

    return (
      <div className="request-section">
        <RequestsSectionHeader title="Orientation"/>
        <InputComponent
          label="Azimuth:"
          type="number"
          required={true}
        />
        <InputComponent
          type="number"
          label="Tilt:"
          required={true}
        />
      </div>
    )
  }
}

export default Orientation;
