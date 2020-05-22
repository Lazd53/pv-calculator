import React from 'react';
import SectionHeader from './SectionHeader';
import InputComponent from './InputComponent';

class SolarLocation extends React.Component{

  render(){

    return (
      <div className="request-section">
        <SectionHeader title="Location"/>
        <form className="request-section-form">
          <InputComponent
            label="Latitude:"
            type="number"
            storeName="lat"
            required={true}
            min={-90}
            max={90}
          />
          <InputComponent
            label="Longitude:"
            type="number"
            storeName="lon"
            required={true}
            min={-180}
            max={180}
          />
        </form>
      </div>
    )
  }
}

export default SolarLocation;
