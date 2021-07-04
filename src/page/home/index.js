import React from 'react';
import "../home/style.css";
import { Topview, Portfolio, Resume } from '../../components';
import Aboutcomp from '../../components/aboutComp';
import FulllogoOpen from '../../components/anims/fullLogoOpen';



const Home = () => {
    return (
        <div>
            <FulllogoOpen/>
            <Topview/>
            <Aboutcomp/>
            <Resume/>
            <Portfolio/>
        </div>
    )
}

export default Home
