import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login/Login';
import { auth } from './lib/firebase';
import { useStateValue } from './contexts/StateProvider';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

// Components
import Home from './components/Home/Home';
import Payment from './components/Payments/Payment';
import Orders from './components/Orders/Orders';
import NavBar from './components/NavBar/NavBar'
import Cart from './components/Cart/Cart';

const promise = loadStripe('pk_test_51I0OERIpqrol3TiqYHwhrMgRjbROcvyJIHpE6gz2KEu9oVxXgouP9gVaHMrYnj85b93KTUzmb8SiaHC0FQiTR7NN00uldJhYGK');

function App() {

  const [, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser)

      if (authUser) {
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
  }, [dispatch])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/cart">
            <NavBar />
            <Cart />
          </Route>
          <Route path="/payment">
            <NavBar />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/orders'>
            <NavBar />
            <Orders />
          </Route>
          <Route path="/">
            <NavBar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
