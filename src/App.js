import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import About from './Containers/About/About';
import Auth from './Containers/Auth/Auth';
import Banner from './Containers/Banner/Banner';
import ContactUs from './Containers/ContactUs/ContactUs';
import Explore from './Containers/Explore/Explore';
import Home from './Containers/Home';
import Kids from './Containers/Kids/Kids';
import Men from './Containers/Men/Men';
import Products from './Containers/Products/Products';
import SingleProduct from './Containers/SingleProduct/SingleProduct';
// import Products from './Containers/Products/Products';0.
import Social from './Containers/Social/Social';
import Subscribe from './Containers/Subscribe/Subscribe';
import Women from './Containers/Women/Women';
import './logo.svg'

function App() {
  return (
    <>
      <Header/>
      <Switch>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/About"} component={About} />
      <Route exact path={"/SingleProduct"} component = {SingleProduct} />
      <Route exact path={"/ContactUs"} component = {ContactUs} />
      <Route exact path={"/Products"} component={Products} />
      <Route exact path={"/auth"} component={Auth} />
      </Switch>
      <Footer/>
     
    </>
  );
}

export default App;
