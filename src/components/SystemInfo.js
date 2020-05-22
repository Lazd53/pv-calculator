import React from 'react';
import SectionHeader from './SectionHeader';
import InputComponent from './InputComponent';

class SystemInfo extends React.Component{

  render(){
    const panelType = [
      {value: 0, description: "Standard"},
      {value: 1, description: "Premium"},
      {value: 2, description: "Thin Film"}]
    return (
      <div className="request-section">
        <SectionHeader title="System Information"/>
        <form className="request-section-form">
          <InputComponent
            label="System Capacity:"
            storeName="system_capacity"
            type="number"
            min={0.05}
            max={500000}
          />
          <InputComponent
            label="Panel Type:"
            storeName="module_type"
            type="select"
            options={panelType}
          />
          <InputComponent
            label="System Losses:"
            type="number"
            storeName="losses"
            min={-5}
            max={99}
          />
        </form>
      </div>
    )
  }
}

export default SystemInfo;
