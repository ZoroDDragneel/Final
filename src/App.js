import React from 'react';
import './App.css';
import Navbar from './componenets/Navbar';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './componenets/pages/Home';
import Languages from './componenets/pages/Languages';
import About from './componenets/pages/About';
import Api from './componenets/pages/Api';
import StartUp from './componenets/pages/StartUp';

;
/*class App extends Component {
  render() {
    return (
      <div className="App">
        <StartUp data={data}/>
      </div>
    );
  }
}*/

function App() {
  return (
    <>
    
    <Router>
    <Navbar />
    <Switch>
      <Route path ='/' exact component={Home}/>
      <Route path='/languages' component={Languages} />
      <Route path='/about' component={About} />
      <Route path='/api' component={Api}/>
      <Route path='/start-up' component={StartUp} />
    </Switch>
    </Router>
      
    </>
  );
}

export default App;
