import React from 'react';
import './App.css';

import Nav from './components/Nav';
import Footer from './components/Footer';

function Profile() {
    return (
        <dev>
            <Nav />
            <h1>Profile Page</h1>
            <Footer currPage={"profile"} />
        </dev>
    );
}

export default Profile;