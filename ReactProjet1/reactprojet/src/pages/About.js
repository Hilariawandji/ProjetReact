import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Navigation/>
            <Logo/>
            <h1> A propos de nous </h1><br/>
            <p> bienvenue </p>
        </div>
    );
};

export default About;