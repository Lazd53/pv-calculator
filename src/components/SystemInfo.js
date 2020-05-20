import React from 'react';
import RequestsSectionHeader from './RequestsSectionHeader';
import InputComponent from './InputComponent';

class SystemInfo extends React.Component{

  render(){
    const panelType = [
      {value: 0, description: "Standard"},
      {value: 1, description: "Premium"},
      {value: 2, description: "Thin Film"}]
    return (
      <div className="request-section">
        <RequestsSectionHeader title="System Information"/>
        <form className="request-section-form">
          <InputComponent
            label="System Capacity:"
            type="number"
            min={0.05}
            max={500000}
          />
          <InputComponent
            label="Panel Type:"
            type="select"
            options={panelType}
          />
          <InputComponent
            type="number"
            label="System Losses:"
            min={-5}
            max={99}
          />
        </form>
      </div>
    )
  }
}

export default SystemInfo;
