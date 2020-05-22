import React from 'react';
import SectionHeader from './SectionHeader';
import InputComponent from './InputComponent';

class MountingType extends React.Component{

  render(){
    const mountingType = [
      {value: 0, description: "Fixed - Open Rack"},
      {value: 1, description: "Fixed - Roof Mounted"},
      {value: 2, description: "1-Axis"},
      {value: 3, description: "1-Axis Backtracking"},
      {value: 4, description: "2-Axis"}
    ]
    return (
      <div className="request-section">
        <SectionHeader title="MountingType"/>
        <form className="request-section-form">
          <InputComponent
            label="Mounting Type:"
            storeName="mounting_type"
            type="select"
            options={mountingType}
          />
        </form>
      </div>
    )
  }
}

export default MountingType;
