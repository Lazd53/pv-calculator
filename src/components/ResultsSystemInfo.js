import React from 'react';
import {connect} from 'react-redux';

import SectionHeader from './SectionHeader';
import ResultsParameters from './ResultsParameters';
import ResultChangeButton from './ResultChangeButton';
import {resultsColors} from '../utils/colors';


class ResultsSystemInfo extends React.Component{



  render(){
    const {storedResults} = this.props;
    return(
      <div>
        <SectionHeader title="System Information"/>
        <div className="result-change-container">
          {storedResults.map( ( result, i ) =>
            <ResultChangeButton key={result.id} id={result.id} color={resultsColors[i]} />
          )}
        </div>
        <ResultsParameters/>
      </div>
    )
  }
}

const mapStateToProps = (store) =>{
  const {storedResults, currentResult} = store.results
  return{
    storedResults,
    currentResultItem: storedResults.filter( result => result.id === currentResult)[0]
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps)(ResultsSystemInfo);
