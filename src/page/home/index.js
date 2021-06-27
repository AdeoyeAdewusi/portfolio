import React from 'react';
import "../home/style.css";
import { Topview, Portfolio, Resume } from '../../components';
import Aboutcomp from '../../components/aboutComp';



const Home = () => {
    return (
        <div>
            <Topview/>
            <Aboutcomp/>
            <Resume/>
            <Portfolio/>
        </div>
    )
}

export default Home
