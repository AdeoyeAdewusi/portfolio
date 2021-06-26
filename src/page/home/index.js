import React from 'react';
import "../home/style.css";
import { Topview, Portfolio } from '../../components';
import Aboutcomp from '../../components/aboutComp';



const Home = () => {
    return (
        <div>
            <Topview/>
            <Aboutcomp/>
            <Portfolio/>
        </div>
    )
}

export default Home
