import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Login } from './components/views/Login';
import { Register } from './components/views/Register';
import { Products } from './components/views/Products';
import { PrivateRoute } from './hooks/PrivateRoute';
import { UnPrivate } from './hooks/UnPrivate';
import { NavBar } from './components/fixed/NavBar';
import { Favorites } from './components/views/Favorites';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path="/" component={Login} />
        <UnPrivate path="/login" component={Login} />
        <UnPrivate path="/register" component={Register} />
        <PrivateRoute path="/products" component={Products} />
        <PrivateRoute path="/favorites" component={Favorites} />
      </Router>
    </div>
  );
}

export default App;
