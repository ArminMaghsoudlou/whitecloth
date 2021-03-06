import React from 'react';
import {Switch, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ChefList from "./components/ChefList";
import Details from "./components/Details";
import Cart from "./components/Cart/";
import Default from "./components/Default";
import Footer from "./components/Footer";
import Modal from './components/Modal';
import ContactPage from './pages/Contact';
import FaqPage from './pages/Faq';
import HowPage from './pages/How-it-works';
import ChefSignUp from './pages/ChefSignUp';
import About from './pages/About';
import Blog from './pages/Blog';


function App() {
  return (
    <React.Fragment>
    <Navbar />
    <Switch>
      <Route exact path="/" component={ChefList} />
      <Route exact path="/details" component={Details} />
      <Route exact path="/chef-signup" component={ChefSignUp} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/faq" component={FaqPage} />
      <Route exact path="/howitworks" component={HowPage} />
      <Route exact path="/contact" component={ContactPage} />
      <Route exact path="/about" component={About} />
      <Route exact path="/blog" component={Blog} />
      <Route component={Default} />
    </Switch>
    <Footer />
    <Modal />
  </React.Fragment>
  );
}

export default App;
