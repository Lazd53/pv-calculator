import React from 'react';
import RequestsSectionHeader from './RequestsSectionHeader';
import InputComponent from './InputComponent';

class Orientation extends React.Component{

  render(){

    return (
      <div className="request-section">
        <RequestsSectionHeader title="Orientation"/>
        <form className="request-section-form">
          <InputComponent
            label="Azimuth:"
            storeName="azimuth"
            type="number"
            required={true}
            min={0}
            max={359}
          />
          <InputComponent
            type="number"
            storeName="tilt"
            label="Tilt:"
            required={true}
            min={0}
            max={90}
          />
        </form>
      </div>
    )
  }
}

export default Orientation;
