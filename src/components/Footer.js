import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

import imgEvent from '../img/icons8-event-select-50.png';
import imgEventWhite from '../img/icons8-event-select-50-2.png';
import imgShop from '../img/icons8-shop-50.png';
import imgShopWhite from '../img/icons8-shop-50-2.png';
import imgProfile from '../img/icons8-profile-50.png';
import imgProfileWhite from '../img/icons8-profile-50-2.png';

function Footer (props) {
    const blackStyle = {
        color: 'black'
    }
    const whiteStyle = {
        color: 'white'
    }

    var profileIcon = imgProfile;
    var eventIcon = imgEvent;
    var shopIcon = imgShop;
    var profileStyle = blackStyle;
    var eventStyle = blackStyle;
    var shopStyle = blackStyle;

    if (props.currPage === "profile") {
        console.log("currPage: profile");
        profileIcon = imgProfileWhite;
        profileStyle = whiteStyle;
    } else if (props.currPage === "event") {
        console.log("currPage: event");
        eventIcon = imgEventWhite;
        eventStyle = whiteStyle;
    } else if (props.currPage === "shop") {
        console.log("currPage: shop");
        shopIcon = imgShopWhite;
        shopStyle = whiteStyle;
    }

    return(
        <div className='footer'>
            <Link to='/profile'>
                <div className='footer-item-block'>
                    <img src={profileIcon} alt="Profile" />
                    <p style={profileStyle}>個人頁面</p>
                </div>
            </Link>
            <Link to='/event'>
                <div className='footer-item-block'>
                    <img src={eventIcon} alt="Event" />
                    <p style={eventStyle}>活動紀錄</p>
                </div>
            </Link>
            <Link to='/shop'>
                <div className='footer-item-block'>
                    <img src={shopIcon} alt="Shop" />
                    <p style={shopStyle}>商品兌換</p>
                </div>
            </Link>
        </div>
    );
}

export default Footer;