import React, { useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Payment from './components/Payment';
import Orders from './components/Orders';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './components/Login';
import { auth } from './lib/firebase';
import { useStateValue } from './contexts/StateProvider';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Nav from './components/Nav';

const promise = loadStripe('pk_test_51I0OERIpqrol3TiqYHwhrMgRjbROcvyJIHpE6gz2KEu9oVxXgouP9gVaHMrYnj85b93KTUzmb8SiaHC0FQiTR7NN00uldJhYGK');

function App() {

  const [, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser)

      if(authUser) {
         // the user just logged in / the user was logged in
         dispatch({
           type: 'SET_USER',
           user: authUser
         })

      } else {
        // the user logged out
         dispatch({
           type: 'SET_USER',
           user: null
         })
      }
    })
  }, [])

  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/login">
            <Login/>
        </Route>
        <Route path="/checkout">
          <Nav/>
          <Checkout/>
        </Route>
        <Route path="/payment">
          <Nav/>
          <Elements stripe={promise}>
            <Payment/>
          </Elements>
        </Route>
        <Route path='/orders'>
          <Nav/>
          <Orders/>
        </Route>
        <Route path="/">
          <Nav/>
          <Home/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
