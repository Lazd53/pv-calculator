import React from 'react';
import SectionHeader from './SectionHeader';
import InputComponent from './InputComponent';

class Orientation extends React.Component{

  render(){

    return (
      <div className="request-section">
        <SectionHeader title="Orientation"/>
        <form className="request-section-form">
          <InputComponent
            label="Azimuth:"
            storeName="azimuth"
            type="number"
            required={true}
            min={0}
            max={359}
            suffix="°"
          />
          <InputComponent
            type="number"
            storeName="tilt"
            label="Tilt:"
            required={true}
            min={0}
            max={90}
            suffix="°"
          />
        </form>
      </div>
    )
  }
}

export default Orientation;
