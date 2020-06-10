import React from 'react';
import { connect } from 'react-redux'

import { changePanelValue } from '../redux/actions/requestActions'
import SectionHeader from './SectionHeader';
import InputComponent from './InputComponent';
import {radialInput} from '../utils/radialInput'

class Orientation extends React.Component{
  constructor(props){
    super(props);
    this.svgRef = React.createRef();
  }

  componentDidMount(){
    this.drawRadialSlider()
  }

  componentDidUpdate(){
    this.drawRadialSlider()
  }

  drawRadialSlider = () => {
    const svgRef = this.svgRef.current;
    radialInput(svgRef, this.props.azimuth, "azimuth", this.props.changePanelValue)
  }

  determineDirection = () => {
    const { azimuth } = this.props
    if( azimuth > 337.5 || azimuth < 22.5 ){
      return "N"
    } else if  (azimuth < 67.5){
      return "NE"
    } else if (azimuth < 112.5){
      return "E"
    } else if (azimuth < 157.5){
      return "SE"
    } else if (azimuth < 202.5){
      return "S"
    } else if (azimuth < 247.5){
      return "SW"
    } else if (azimuth < 292.5){
      return "W"
    } else if (azimuth < 337.5){
      return "NW"
    }
  }


  render(){
    console.log(this.props)
    return (
      <div className="request-section">
        <SectionHeader title="Orientation"/>
        <form className="request-section-form">
          <div className='azimuth'>
            <InputComponent
              label="Panel Direction:"
              storeName="azimuth"
              type="number"
              required={true}
              min={0}
              max={359}
              suffix="°"
              afterText={this.determineDirection()}
            />
          <svg ref={this.svgRef}></svg>

          </div>
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

const mapStateToProps = (state) =>{
  return { azimuth: state.panelRequestInfo.azimuth}
}

const mapDispatchToProps = {
  changePanelValue
}

export default connect(mapStateToProps, mapDispatchToProps)(Orientation);
