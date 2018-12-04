import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import logo from './logo.svg'
import './App.css'
import Form from './Form'
import Form2 from './Form2'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Home = () => (
    <MuiThemeProvider>
      <div className="App">
        <Form2 />
      </div>
    </MuiThemeProvider>
)

const Criteria = () => (
 
    <MuiThemeProvider>
      <div className="App">
        <Form />
      </div>
    </MuiThemeProvider>
)

const MainMenu = () => {
  return (
    <div>
      <Link to="/">
        <button>Supplier</button>
      </Link>
      <Link to="/criteria">
        <button>Criteria</button>
      </Link>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
         
          <MainMenu />
          
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/criteria" component={Criteria} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App
