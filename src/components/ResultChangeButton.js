import React from 'react';
import {connect} from 'react-redux';
import {setCurrentResult} from '../redux/actions/resultsActions';

class ResultChangeButton extends React.Component{
  handleChangeResult = () => {
    const {id, setCurrentResult} = this.props;
    console.log(id)
    setCurrentResult(id)
  }

  chooseBackgroundColor = () => {
    const { id, currentResult, color } = this.props;
    if (currentResult === id) {
      return {background: color[0]}
    }
    return {background: color[1]}
  }

  render(){
    const {id, color} = this.props
    return(
      <button
      style={this.chooseBackgroundColor()}
      className="result-change-btn"
      onClick = {this.handleChangeResult}
      >
        {id+1}
      </button>
    )
  }
}

const mapStateToProps = (state) => {
  return { currentResult: state.results.currentResult }
}
const mapDispatchToProps = { setCurrentResult }

export default connect(mapStateToProps, mapDispatchToProps)(ResultChangeButton);
