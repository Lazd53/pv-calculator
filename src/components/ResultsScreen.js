import React from 'react';
import ResultsParameters from './ResultsParameters';

class ResultsScreen extends React.Component{
  render(){
    const {paramObj} = this.props;
    return(
      <section>
        {paramObj && <ResultsParameters parameters={paramObj}/>}
      </section>
    )
  }
}

const mapStateToProps = (store) =>{
  return{
    paramObj: store.currentResult
      ? store.storedResults[store.currentResult]
      : false
  }
}

export default ResultsScreen;
