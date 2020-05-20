import React from 'react';

class InputComponent extends React.Component{

  createInputByType = () => {
    switch(this.props.type){
      case "number":
        return (
          <input
          type="number"
          min={this.props.min}
          max={this.props.max}
        />);
      case "select":
        return (
          <select>
            {this.props.options.map( option => {
              return (<option key={option.value} value={option.value}>{option.description}</option>)
            } )}
          </select>
        );
      default:
        console.error("Error, there is no input type")
    }
  }

  render(){
    const { label } = this.props;
    return(
      <div>
        <label> {label} <br/>
          {this.createInputByType()}
        </label>
      </div>
    )
  }
}

export default InputComponent




// title, type, required, preset, handler })
