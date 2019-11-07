import React, {useState, useContext} from 'react';
import styled from "styled-components";
import './App.css';

import Nav from './components/Nav';
import Footer from './components/Footer';
import TainanEvent from './components/TainanEvent';

import ipathImg from './img/IPATH.jpg';
import tainanImg from './img/Tainan.jpg';
import backIcon from './img/back.png';
import bodyImg from './img/selecbb.png';
import sport_bodyImg from './img/tainan_sportbb.png';

import {UserContext} from './App';

const InnerBody = styled.div`
    width: 100%;
    height: 38vh;
    text-align: center;
    position: relative;
    background-image: url(${props => props.src});
    background-repeat: np-repeat;
    object-fit: fill;
    background-color: #e8e8e8;

    .innerTitle{
        width: 100%;
        font-size: 27px;
        position: absolute;
        top: 5vh;
    }

    .nameBlock1 {
        margin-top: 3vh;

        .userName {
            margin-bottom: 2vh;
        }
    }

    .nameBlock2{
        height: 20vw;
        display: inline-block;
        transform: translateY(-3vh);
        text-align: left;

        .userName{
            margin-bottom: 2vh;
        }
    }

    .pointHint {
        font-size: 24px;

        p {
            display: inline-block;
        }
        .point {
            color: #a30a13;
            margin-left: 5px;
            margin-right: 5px;
        }
        .dot {
            width: 15px;
            height: 15px;
            background-color: #a30a13;
            border-radius: 50%;
            display: inline-block;
            margin-left: 10px;
            margin-right: 10px;
        }
    }
`;

const EventBlockLeft = styled.div`
    width: 43vw;
    height: 30vh;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: inline-block;
    border: soild 2px transparent;
    box-sizing:border-box;
    border-radius: 10%;
    margin-top: 15vh;
    position: relative;
    margin-right: 2vw;
`;

const EventBlockRight = styled.div`
    width: 43vw;
    height: 30vh;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: inline-block;
    border: soild 2px transparent;
    box-sizing:border-box;
    border-radius: 10%;
    margin-top: 15vh;
    position: relative;
    margin-left: 2vw;
`;

const BlockTitle = styled.div`
    width: 100%;
    height: 6vh;
    text-align: center;
    background-color: #000000;
    border-top: solid 1px #ffffff;
    border-bottom: solid 1px #ffffff;
    position: absolute;
    top: 12vh;

    p {
        width: 100%;
        color: #ffffff
        letter-spacing: 2px;
        font-size: 30px;
        line-height: 6vh;
    }
`;

const BottomBody = styled.div`
    width: 100%
    height: 28.5vh;
    background-color: #ffffff;
    text-align: center;

    .updateHint {
        width: 100%;
        color: #9b9b9b;
        font-size: 22px;
        padding: 4vh;
    }

    .complete {
        width: 35vw;
        height: 8.5vh;
        text-align: center;
        border-radius: 42px;
        margin-left: 32.5vw;
        transform: translateY(-4.25vh);

        p {
            font-size: 31px;
            color: #ffffff;
            line-height: 8.5vh;
            letter-spacing: 4.5px;
        }
    }
`;

const BackBtn = styled.img`
    width: 2vh;
    height: 2vh;
    position: absolute;
    top: 12.5vh;
    left: 11vw;
    z-index: 2;
`;

const UserImg = styled.img`
    width: 20vw;
    height: 20vw;
    border-radius: 50%;
    border: solid 10px #ffffff;
    position: relative;
    z-index: 2;
    margin-top: 4.5vh;
`;

// SPORT PAGE
const HintBox = styled.div`
    font-size: 24px;
    color: #4a4a4a;
    letter-spacing: 2px;

    .calHint {
        p {
            display: inline-block;
        }
        .calories {
            color: #d04b00;
            margin-left: 5px;
            margin-right: 5px;
        }
    }

    .pointHint {
        margin-top: 3vh;
        p {
            display: inline-block;
        }
        .point {
            color: #0c5ebe;
            margin-left: 5px;
            margin-right: 5px;
        }
        .dot {
            width: 15px;
            height: 15px;
            background-color: #0c5ebe;
            border-radius: 50%;
            display: inline-block;
            margin-left: 10px;
            margin-right: 10px;
        }
    }
`;

function Event(props) {
    // page state: ["event", "tainan", "sportUndo", "sportDone"]
    const [User] = useContext(UserContext);
    const [page, setPage] = useState("event");
    console.log(User);

    if (page === "event") {
        return (
            <div className="event">
                <Nav title={"IPATH 學生點數系統"} back={false} />
                <InnerBody src={bodyImg} style={{height: '54.5vh'}}>
                    <p className="innerTitle">活動選擇</p>
                    <EventBlockLeft src={ipathImg} onClick={() => {setPage("sportUndo")}}>
                        <BlockTitle>
                            <p>智能運動地墊系統</p>
                        </BlockTitle>
                    </EventBlockLeft>
                    <EventBlockRight src={tainanImg}  onClick={() => {setPage("tainan")}}>
                        <BlockTitle>
                            <p>踏溯台南點數系統</p>
                        </BlockTitle>
                    </EventBlockRight>
                </InnerBody>
                <BottomBody style={{height: '12vh'}}>
                    <p className="updateHint">・・活動陸續更新・・</p>
                </BottomBody>
                <Footer currPage={"event"} />
            </div>
        );
    } else if (page === "tainan") {
        return (
            <div>
                <BackBtn src={backIcon} alt="back" onClick={() => {setPage("event")}} />
                <Nav title={"踏溯台南點數系統"} />
                <InnerBody src={sport_bodyImg}>
                    <UserImg src={User.img} alt="userImg" style={{'transform':'translateX(-10vw)', 'display':'inline-block'}}/>
                    <div className="nameBlock2">
                        <p className="userName">{User.name}</p>
                        <p className="nickName">{User.nickname}</p>
                    </div>
                    <div className="pointHint">
                        <div className="dot" />
                        <p>踏溯持有點數 </p>
                        <p className="point">{User.record}</p>
                        <p> 點</p>
                        <div className="dot" />
                    </div>
                </InnerBody>
                <BottomBody>
                    <TainanEvent title={"成大成人之道"} done={true} />
                    <TainanEvent title={"漁鹽生態"} done={false}/>
                    <TainanEvent title={"城南舊事"} done={true} />
                </BottomBody>
                <Footer currPage={"event"} />
            </div>
        );
    } else if (page === "sportUndo") {
        return (
            <div>
            <BackBtn src={backIcon} alt="back" onClick={() => {setPage("event")}} />
                <Nav title={"IPATH 學生點數系統"} />
                <InnerBody src={sport_bodyImg}>
                    <UserImg src={User.img} alt="userImg"/>
                    <div className="nameBlock1">
                        <p className="userName">{User.name}</p>
                        <p className="nickName">{User.nickname}</p>
                    </div>
                </InnerBody>
                <BottomBody>
                    <div className="complete" style={{'backgroundColor':'#939393'}}>
                        <p>未完成遊戲</p>
                    </div>
                    <HintBox>
                        <div className="calHint">
                            <p>已消耗卡路里</p>
                            <p className="calories">{User.calories}</p>
                            <p>大卡</p>
                        </div>
                        <div className="pointHint">
                            <div className="dot" />
                            <p>目前持有 </p>
                            <p className="point">{User.record}</p>
                            <p> 點</p>
                            <div className="dot" />
                        </div>
                    </HintBox>
                </BottomBody>
                <Footer currPage={"event"} />
            </div>
        );
    } else if (page === "sportDone") {
        return (
            <div>
            <BackBtn src={backIcon} alt="back" onClick={() => {setPage("event")}} />
                <Nav title={"IPATH 學生點數系統"} />
                <InnerBody src={sport_bodyImg}>
                    <UserImg src={User.img} alt="userImg"/>
                    <div className="nameBlock1">
                        <p className="userName">{User.name}</p>
                        <p className="nickName">{User.nickname}</p>
                    </div>
                </InnerBody>
                <BottomBody>
                    <div className="complete" style={{'background-color':'#eb8256'}}>
                        <p>已完成遊戲</p>
                    </div>
                    <HintBox>
                        <div className="calHint">
                            <p>已消耗卡路里</p>
                            <p className="calories">{User.calories}</p>
                            <p>大卡</p>
                        </div>
                        <div className="pointHint">
                            <div className="dot" />
                            <p>目前持有 </p>
                            <p className="point">{User.record}</p>
                            <p> 點</p>
                            <div className="dot" />
                        </div>
                    </HintBox>
                </BottomBody>
                <Footer currPage={"event"} />
            </div>
        );
    }
}

export default Event;