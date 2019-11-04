import React from 'react';
import './App.css';
import styled from "styled-components";

import Nav from './components/Nav';
import Footer from './components/Footer';

import userImg from './img/guest.png';
import bodyImg from './img/profilebb.png';

const InnerBoby = styled.div`
    height: 47vh;
    background-color: #e8e8e8;
    text-align: center;
    background-image: url(${bodyImg});
    background-repeat: no-repeat;
    background-position: bottom;
    display: flex;
    flex-direction: column;
    align-items: center;

    .topBody {
        width: 100%;
        height: 10vh;
        background-color: #ffffff;
    }
`;

const UserImg = styled.img`
    width: 31.5vw;
    height: 31.5vw;
    border-radius: 50%;
    border: solid 10px #ffffff;
    z-index: 5;
    transform: translateY(-8vh);
`;

const UserInfo = styled.div`
    width: 100%;
    transform: translateY(-2vh);

    .nickName {
        margin-top: 2vh;
    }
`;

const BottomBody = styled.div`
    width: 100%;
    height: 19.5vh;
    background-color: #ffffff;
    text-align: center;
    position: absolute;
    bottom: 10.5vh;
    display: flex;
    justify-content: center;
`;

const UserPoint = styled.div`
    display: flex;
    flex-position: row;
    justify-content: center;
    align-items: center;

    .dot {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #d04b00;
    }

    p {
        font-size: 26px;
        color: #4a4a4a;
        display: inline-block;
        margin-left: 10px;
        margin-right: 10px;
    }

    .point {
        color: #d04b00;
    }
`;

function Profile() {
    const testing_point = 116;
    const testing_name = "Guest1";
    const testing_id = "0001";

    return (
        <div className="profile">
            <Nav title={"IPATH 學生點數系統"}/>
            <InnerBoby>
                <div className="topBody" />
                <UserImg src={userImg}/>
                <UserInfo>
                    <p className="userName">{testing_name}</p>
                    <p className="nickName">{testing_id}</p>
                </UserInfo>
            </InnerBoby>
            <BottomBody>
                <UserPoint>
                    <div className="dot" />
                    <p>目前持有 </p>
                    <p className="point">{testing_point}</p>
                    <p> 點</p>
                    <div className="dot" />
                </UserPoint>
            </BottomBody>
            <Footer currPage={"profile"} />
        </div>
    );
}

export default Profile;