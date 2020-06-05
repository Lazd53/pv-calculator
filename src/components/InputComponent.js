import React from 'react';
import { connect } from 'react-redux';
import { changePanelValue } from '../redux/actions/requestActions';

class InputComponent extends React.Component{

  handleNumberInput = (event) => {
    const {changePanelValue, min, max, storeName} = this.props;
    const value = event.target.value;
     if (value > max){
       changePanelValue(storeName, max);
     } else if ( value < min){
       changePanelValue(storeName, min);
     } else {
       changePanelValue(storeName, value)
     }
  }

  handleSelectInput = (event) => {
    const {changePanelValue, storeName} = this.props;
    changePanelValue(storeName, event.target.value)
  }

  createInputByType = () => {
    const {type, min, max, panelRequestInfo, storeName, suffix} = this.props

    switch(type){
      case "number":
        return (
          <div className="input-suffix-container"
            data-content={suffix}
          >
            <input
              type="number"
              min={min}
              max={max}
              onChange = {this.handleNumberInput}
              value = {panelRequestInfo[storeName]}
              className="input-fields"
            />
          </div>
        );
      case "select":
        return (
          <select
            className="input-fields"
            value = {panelRequestInfo[storeName]}
            onChange = {this.handleSelectInput}
          >
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
      <div className="input-component">
        <label>
          <h4 className="input-component-title">{label}</h4>
          {this.createInputByType()}
        </label>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {panelRequestInfo: state.panelRequestInfo}
}

const mapDispatchToProps ={
  changePanelValue
}


export default connect(mapStateToProps, mapDispatchToProps)(InputComponent)
