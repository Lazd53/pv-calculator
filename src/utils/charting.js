import {months} from './systemDefinitions'
import {resultsColors} from './colors'
import * as d3 from 'd3';

export const chartByMonths = (svgRef, data, dataFormat, dimensions) => {
  const margin = {top: 10, right: 30, bottom: 30, left: 60}
  const height = dimensions.height - margin.top - margin.right;
  const width = dimensions.width - margin.left - margin.right;
  const {desc, units, multiplier} = dataFormat
  console.log(data)
  // data.resultData = data.resultData.map( result => result * dataFormat.multiplier)
  const dataMin = d3.min(data.map( result => d3.min(result.resultData))) * multiplier
  const dataMax = d3.max(data.map( result => d3.max(result.resultData))) * multiplier

  // create SVG
  const svg = d3.select(svgRef)
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.right)
                .append("g")
                .attr("transform", `translate( ${margin.left}, ${margin.top})`)

    //x-axis
    const xScale = d3.scaleLinear()
      .domain( [ 0, 11 ] )
      .range( [0, width ] )
      // change i to months ie: 0 => Jan, 1 => Feb
      svg.append("g")
        .attr("transform", `translate(0, ${height})` )
        .call(d3.axisBottom(xScale))
        .selectAll( "text" )
        .text(d => months[d])
      // x-axis label
      svg.append("text")
        .attr("transform",
              `translate( ${width/2}, ${height + margin.top + 20})`)
        .style("text-anchor", "middle")
        .text("Month")
      // y-axis
        const yScale = d3.scaleLinear()
          .domain( [dataMin * 0.2, dataMax * 1.1] )
          .range( [height, 0 ] )
        svg.append("g")
          .call(d3.axisLeft(yScale))

        svg.append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 0 - margin.left/2)
          .attr("x", 0 - (height/2))
          .text( `${desc} (${units})`)

          data.forEach( (data, i) => {
              const resultClass = `.result${i}`
              const dataColor = data.current ? resultsColors[i][0] : resultsColors[i][1]
              let { resultData, current } = data
              resultData = resultData.map(x => x*multiplier)
            // circles
                  svg.selectAll(`circle ${resultClass}`)
                    .data(resultData)
                    .enter()
                    .append("circle")
                    .attr("class", i)
                    .attr('cx', (d,i) => xScale(i))
                    .attr('cy', (d,i) => yScale(d))
                    .attr("r", 5)
                    .style("fill", dataColor)
                    .append("title")
                    .text( (d, i) => `${Math.round(d)} ${units}`)
            // paths
                  svg.append("path")
                    .datum(resultData)
                    .attr('fill', 'none')
                    .attr("stroke", dataColor)
                    .attr("stroke-width", 1.5)
                    .attr("d", d3.line()
                      .x(function(d, i){return xScale(i)})
                      .y(function(d){return yScale(d)})
                  )
            // labels
                  // svg.selectAll(`.labels ${resultClass}`)
                  //   .data(resultData)
                  //   .enter()
                  //   .append('text')
                  //   .attr("class", "labels")
                  //   .attr("x", ( d,i ) => xScale(i)  + 5)
                  //   .attr("y", ( d,i ) => yScale(d))
                  //   .text((d,i)=> Math.round(d))
          })



}
