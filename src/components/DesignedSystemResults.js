import React from 'react';
import { connect } from 'react-redux'

import SectionHeader from './SectionHeader';
import * as d3 from 'd3';
import {months} from '../utils/systemDefinitions'
import {resultsColors} from '../utils/colors'


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

  drawChart(dataType){
    const allResultOutputs = this.props.allResults.map( result => result.outputs)
    const singleCategoryOutputs = allResultOutputs.map( output => output[dataType])
    const testData = [17.111692428588867, 26.64093589782715, 61.272701263427734, 102.51448059082031, 146.76705932617188, 164.26573181152344, 165.64744567871094, 128.68389892578125, 76.66680145263672, 35.40726089477539, 17.11806869506836, 13.451669692993164]
    const svgContainer = this.refContainer.current;
    // const dataMax = d3.max(this.props.data);
    // const yScale = d3.scaleLinear();
    const margin = {top: 10, right: 30, bottom: 30, left: 60}
    const h = 500 - margin.top - margin.right;
    const w = 500 - margin.left - margin.right;
    // create SVG
    const svg = d3.select(svgContainer)
                  .append("svg")
                  .attr("width", w + margin.left + margin.right)
                  .attr("height", h + margin.top + margin.right)
                  .append("g")
                  .attr("transform", `translate( ${margin.left}, ${margin.top})`)

    //x-axis
    const xScale = d3.scaleLinear()
      .domain( [ 0, 11 ] )
      .range( [0, w ] )

    svg.append("g")
      .attr("transform", `translate(0, ${h})` )
      .call(d3.axisBottom(xScale))

    svg.append("text")
      .attr("transform",
            `translate( ${w/2}, ${h + margin.top + 20})`)
      .style("text-anchor", "middle")
      .text("Month")

    // y-axis
      const yScale = d3.scaleLinear()
        .domain( [d3.min(testData) * 0.2, d3.max(testData) * 1.1] )
        .range( [h, 0 ] )
    svg.append("g")
      .call(d3.axisLeft(yScale))

      svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left/2)
        .attr("x", 0 - (h/2))
        .text("AC Energy (kWh)")
// circles
      svg.selectAll("circle")
        .data(testData)
        .enter()
        .append("circle")
        .attr('cx', (d,i) => xScale(i))
        .attr('cy', (d,i) => yScale(d))
        .attr("r", 5)
        .style("fill", resultsColors[0][0])
// paths
      svg.append("path")
        .datum(testData)
        .attr('fill', 'none')
        .attr("stroke", resultsColors[0][0])
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
          .x(function(d, i){return xScale(i)})
          .y(function(d){return yScale(d)})
      )
// labels
      svg.selectAll(".labels")
        .data(testData)
        .enter()
        .append('text')
        .attr("class", "labels")
        .attr("x", ( d,i ) => xScale(i)  + 5)
        .attr("y", ( d,i ) => yScale(d))
        .text((d,i)=> Math.round(d))
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
    allResults: storedResults.map( x => x.id === currentResult ? {...x, current: true} : x )
  }
}

export default connect(mapStateToProps)(DesignedSystemResults);
