import React from 'react';
import {connect} from 'react-redux';

import SectionHeader from './SectionHeader';
import ResultsParameters from './ResultsParameters';

class ResultsSystemInfo extends React.Component{
  render(){
    return(
      <div>
        <SectionHeader title="System Information"/>
        <ResultsParameters/>
      </div>
    )
  }
}

const mapStateToProps = (store) =>{
  const {storedResults, currentResult} = store.results
  return{
    storedResults,
    currentResult
  }
}

export default connect(mapStateToProps)(ResultsSystemInfo);
