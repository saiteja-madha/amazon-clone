import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import { BrowserRouter as Router, Route, Switch } from "react-router";

function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/checkout">
          <Header/>
          <Home/>
        </Route>
        <Route path="/">
          <Header/>
          <Checkout/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
