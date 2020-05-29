import React from 'react';
import { connect } from 'react-redux'

import SectionHeader from './SectionHeader';

import {chartByMonths} from '../utils/charting'


class DesignedSystemResults extends React.Component{
  constructor(props){
    super(props);
    this.refContainer = React.createRef();
  }
  componentDidMount(){
    this.drawChart("ac_monthly");
  }
  componentDidUpdage(){
    this.drawChart("ac_monthly");
  }

  drawChart = (dataType) => {

    const {allResults} = this.props
    const cleanData = this.props.allResults.map( x => (
      { current: x.current,
        resultData: x.outputs[dataType]
      }
    ))
    const dimensions = {height: 500, width: 500}
    const svgContainer = this.refContainer.current;

    chartByMonths( svgContainer, cleanData, dataType, dimensions)
  }

  render(){
    return(
      <div>
        <SectionHeader title="Results" />
        <div ref={this.refContainer} className="d3-container">
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
