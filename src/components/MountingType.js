import React from 'react';
import RequestsSectionHeader from './RequestsSectionHeader';
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
        <RequestsSectionHeader title="MountingType"/>
        <form className="request-section-form">
          <InputComponent
            label="Mounting Type:"
            storeName="mountingType"
            type="select"
            options={mountingType}
          />
        </form>
      </div>
    )
  }
}

export default MountingType;
