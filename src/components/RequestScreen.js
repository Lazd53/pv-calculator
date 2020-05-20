import React from 'react';
import { connect } from 'react-redux';

import SystemInfo from './SystemInfo'
import MountingType from './MountingType'
import Orientation from './Orientation'
import SolarLocation from './SolarLocation'

import {buildRequest} from '../utils/helpers'


class RequestScreen extends React.Component{

  handleSendRequest=()=>{
    const request = buildRequest(this.props.requestInfo)
    console.log(request)
  }

  render(){
    return(
      <div className="request-screen">
        <SystemInfo/>
        <MountingType/>
        <Orientation/>
        <SolarLocation/>
        <button onClick={this.handleSendRequest}>Show me my results</button>
      </div>
    )
  }
}

const mapStateToProps = (state)=> {
  return {
    requestInfo: state.requestInfo
  }
}

export default connect(mapStateToProps)(RequestScreen)
