import './App.css';
import Header from './Header';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProductCatagory from './ProductCatagory';
import ShowProducts from './ShowProducts';
import Checkout from './Checkout';
import Login from './Login';


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path = "/login">
            <Header />
            <Login />
          </Route>

          <Route path = "/home">
            <Header />
            <div className = "main__body" >
              <ProductCatagory />
              <ShowProducts />
            </div>
          </Route>

          <Route path = "/checkout">
            <Header />
            <Checkout />
          </Route>
      
          <Route path = "/" >
            <Header />
            <div className = "main__body" >
              <ProductCatagory />
              <ShowProducts />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
