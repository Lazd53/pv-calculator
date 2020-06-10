import * as d3 from 'd3';
import { degToRadians, radToDegrees} from './helpers.js'

export const radialInput = (ref, degrees, storeName, changePanelValue) => {
  const cRadius = 60;
  const size = 180;
  let internalDegrees = degrees
  const svg = d3.select(ref)
        .attr("width", size)
        .attr("height", size)
  svg.selectAll('g').remove()

  function linePoints(internalDegrees){
    return [
      [0,0],
      [degToRadians(internalDegrees), cRadius]
    ]
  }

  let radialLineGenerator = d3.radialLine();
  var radialData = radialLineGenerator(linePoints(internalDegrees))

  let allItems = svg.append('g')
      .attr("class", "all-items")
      .attr('transform', `translate(${size/2}, ${size/2})`)

  allItems.append("circle")
       .attr( 'r', cRadius)
       .attr("fill", "white")
       .attr( "stroke-width", 3)
       .attr( "stroke", "black")

  let dirPath = allItems.append("path")
      .attr('class', 'myOnePath')
      .attr("stroke", "black")
      .attr('d', radialData)

  allItems.append("text")
    .attr('y', -1*(cRadius + 15))
    .attr('x', -7)
    .attr("font-size", 20)
    .text("N")

  allItems.append("text")
    .attr('y', cRadius + 25)
    .attr('x', -5)
    .attr("font-size", 20)
    .text("S")

  allItems.append("text")
    .attr('y', 5)
    .attr('x', cRadius + 7)
    .attr("font-size", 20)
    .text("E")

  allItems.append("text")
    .attr('y', 5)
    .attr('x', -1*(cRadius + 25))
    .attr("font-size", 20)
    .text("W")



  let drag = d3.drag()

  let handle = allItems.append("circle")
      .attr("class", "handle")
      .attr("fill", "red")
      .attr('r', 8)
      .call(d3.drag()
           .on('drag', dragEvent)
           .on("end", dragEndEvent)
           );
  handleLocation(internalDegrees)

  function dragEvent(){
    let x = d3.event.x;
    let y = d3.event.y * -1;
    let h = Math.sqrt(x**2, y**2)
    let newAngle = Math.atan( y / x )
    let newAngleDeg = radToDegrees(newAngle)

    if (x > 0){
      internalDegrees = Math.round(90 - newAngleDeg);
    } else{
      internalDegrees = Math.round(270 - newAngleDeg);
    }
    handleDragChanges(internalDegrees)
  }

  function dragEndEvent(){
    changePanelValue(storeName, internalDegrees)
  }

  function handleDragChanges(newDeg){
    dirPath.attr('d', radialLineGenerator(linePoints(newDeg)))
    handleLocation(newDeg)
  }

  function handleLocation(deg){
     handle.attr("cx", Math.cos(degToRadians(deg-90))*cRadius)
       .attr("cy", Math.sin(degToRadians(deg-90))*cRadius)
  }

}
