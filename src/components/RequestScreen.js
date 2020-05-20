import React from 'react';

import SystemInfo from './SystemInfo'
import MountingType from './MountingType'
import Orientation from './Orientation'
import Location from './Location'

class RequestScreen extends React.Component{
  render(){
    return(
      <div className="request-screen">
        <SystemInfo/>
        <MountingType/>
        <Orientation/>
        <Location/>
      </div>
    )
  }
}

export default RequestScreen
