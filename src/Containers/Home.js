import React from 'react';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../Components/Footer/Footer';
import { Route } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Banner from './Banner/Banner';
import Explore from './Explore/Explore';
import Kids from './Kids/Kids';
import Men from './Men/Men';
import Social from './Social/Social';
import Subscribe from './Subscribe/Subscribe';
import Women from './Women/Women';
// import About from './About/About';

function Home(props) {
    return (
        <>
            <Header/>
            <Banner/>
            <Men />
            <Women/>
            <Kids/>
            <Explore/>
            <Social/>
            <Subscribe/>
            <Footer/>
        </>
    );
}

export default Home;