import React from 'react';
import SectionHeader from './SectionHeader';
import InputComponent from './InputComponent';
import {mountingType} from '../utils/systemDefinitions'

class MountingType extends React.Component{

  render(){
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
