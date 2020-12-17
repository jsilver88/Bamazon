import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

const App = () => {
  return (
    <Router>
      <div className='grid-container'>
        <header className='row'>
          <div>
            <a className='brand' href='/'>
              Bamazon
            </a>
          </div>
          <div>
            <a href='/cart'>
              <i className='fas fa-shopping-cart'></i> Cart
            </a>
            <a href='/signin'>
              <i className='fas fa-user'></i> Sign In
            </a>
          </div>
        </header>

        <main>
          <Route path='/product/:id' component={ProductScreen}></Route>
          <Route path='/' component={HomeScreen} exact></Route>
        </main>

        <footer className='row center'>
          Copyright &copy; All Rights Reserved.
        </footer>
      </div>
    </Router>
  );
};

export default App;
