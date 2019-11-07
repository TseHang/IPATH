import React, {useContext} from 'react';
import './App.css';
import styled from "styled-components";

import Nav from './components/Nav';
import Footer from './components/Footer';

import bodyImg from './img/profilebb.png';

import {UserContext} from './App';

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
    flex-direction: row;
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
    const [User] = useContext(UserContext);

    return (
        <div className="profile">
            <Nav title={"iPATH 學生點數系統"}/>
            <InnerBoby>
                <div className="topBody" />
                <UserImg src={User.img}/>
                <UserInfo>
                    <p className="userName">{User.name} {User.title ? User.title : ""}</p>
                    <p className="nickName">{User.nickname}</p>
                </UserInfo>
            </InnerBoby>
            <BottomBody>
                <UserPoint>
                    <div className="dot" />
                    <p>目前持有 </p>
                    <p className="point">{User.record}</p>
                    <p> 點</p>
                    <div className="dot" />
                </UserPoint>
            </BottomBody>
            <Footer currPage={"profile"} />
        </div>
    );
}

export default Profile;