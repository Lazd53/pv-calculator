import React from 'react';
import { connect } from 'react-redux'

import SectionHeader from './SectionHeader';

import {chartByMonths} from '../utils/charting'


class DesignedSystemResults extends React.Component{
  constructor(props){
    super(props);
    this.svgRef = React.createRef();
  }
  componentDidMount(){
    this.drawChart("poa_monthly");
  }
  componentDidUpdate(){
    this.drawChart("poa_monthly");
  }

  drawChart = (dataType) => {
    const dataFormat = {
      ac_monthly: { desc: "AC Energy", units: "kWh", multiplier: 1},
      poa_monthly: { desc: "Solar Radiation", units: "kWh/ft²", multiplier: 0.093}
    }
    const {allResults} = this.props
    const cleanData = this.props.allResults.map( x => (
      { current: x.current,
        resultData: x.outputs[dataType]
      }
    ))
    const dimensions = {height: 500, width: 500}
    const svgRef = this.svgRef.current;

    chartByMonths( svgRef, cleanData, dataFormat[dataType], dimensions)
  }

  render(){
    return(
      <div>
        <SectionHeader title="Results" />
        <div ref={this.refContainer} className="d3-container">
          <svg  ref={this.svgRef}></svg>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {storedResults, currentResult} = state.results
  return{
    allResults: storedResults.map( x => x.id === currentResult ? {...x, current: true} : {...x, current: false} )
  }
}

export default connect(mapStateToProps)(DesignedSystemResults);
