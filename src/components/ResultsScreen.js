import React from 'react';
import {connect} from 'react-redux';

import ResultsSystemInfo from './ResultsSystemInfo';
import DesignedSystemResults from './DesignedSystemResults';


class ResultsScreen extends React.Component{
  render(){
    const {paramObj} = this.props;
    return(
      <section>
        <DesignedSystemResults/>
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
