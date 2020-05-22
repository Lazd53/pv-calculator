import React from 'react';
import './App.css';
import RequestScreen from './RequestScreen';
import ResultsScreen from './ResultsScreen';


class App extends React.Component {
  state={ switchPage: "system" }

  handleSwitchPageButton = (page) => {
    console.log(page)
    this.state.switchPage !== page && this.setState({switchPage: page})

  }

  render(){
    const {switchPage} = this.state;
    return (
      <div className="App">
        <h1> Easy PV panel calculator</h1>
        <div className="flip-pages">
          <button
            className= {switchPage ==="system" ? "flip-page-button selected": "flip-page-button"}
            onClick = { ()=>this.handleSwitchPageButton("system")  }
          >System</button>
          <button
            className={switchPage ==="results" ? "flip-page-button selected": "flip-page-button"}
            onClick = { ()=>this.handleSwitchPageButton("results")  }
          >Results</button>
        </div>
        {switchPage==="system" && <RequestScreen/>}
        {switchPage==="results" && <ResultsScreen/>}
      </div>
    );
  }

}

export default App;
