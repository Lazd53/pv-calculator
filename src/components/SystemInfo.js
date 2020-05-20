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
        <InputComponent
          label="System Capacity:"
          type="number"
          required={true}
        />
        <InputComponent
          label="Panel Type:"
          type="select"
          options={panelType}
          required={true}
        />
        <InputComponent
          type="number"
          label="System Losses:"
          required={true}
        />
      </div>
    )
  }
}

export default SystemInfo;
