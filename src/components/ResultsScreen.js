import React from 'react';
import {connect} from 'react-redux';

import ResultsSystemInfo from './ResultsSystemInfo';


class ResultsScreen extends React.Component{
  render(){
    const {paramObj} = this.props;
    return(
      <section>
        <ResultsSystemInfo/>
      </section>
    )
  }
}

const mapStateToProps = (store) =>{
  const  {results} = store
  return{
    paramObj: results.currentResult !== false
      ? results.storedResults[results.currentResult]
      : false,
    store
  }
}

export default connect(mapStateToProps)(ResultsScreen);
