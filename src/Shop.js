import React, {useState} from 'react';
import './App.css';
import styled from "styled-components";

import Nav from './components/Nav';
import Footer from './components/Footer';
import FooterExit from './components/FooterExit';

import checkIncon from './img/check.png';
import bodyImg from './img/productbb.png';
import drinkImg from './img/drink_bag.png';
import FAImg from './img/drink_bag.png';

// SHOP PAGE
const UserInfo = styled.div`
    width: 100%;
    height: 14vh;
    text-align: center;
    line-height: 1.5;
    padding-top: 3vh;
    background-image: url(${props => props.src});

    h1 {
        font-size: 29px;
        color: #4a4a4a;
    }
`;

const CurrPoint = styled.div`
    p {
        font-size: 24px;
        color: #4a4a4a;
        display: inline-block;
        margin-left: 5px;
        margin-right: 5px;
    }

    .dot {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #0c5ebe;
        display: inline-block;
    }

    .point {
        color: #0c5ebe;
    }
`;

const ItemInfo = styled.div`
    width: 100%;
    height: 52.5vh;
    background-color: #ffffff;
    text-align: center;
    padding-top: 5vh;

    .shopHint {
        font-size: 25px;
        color: #033793;
    }
`;

const BlockRight = styled.div`
    width: 43vw;
    height: 30vh;
    background-color: #94aaad;
    border: soild 2px transparent;
    box-sizing:border-box;
    border-radius: 10%;
    margin-top: 3vh;
    position: relative;
    margin-right: 2vw;
    background-image: url(${FAImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
`;

const BlockLeft = styled.div`
    width: 43vw;
    height: 30vh;
    background-color: #94aaad;
    border: soild 2px transparent;
    box-sizing:border-box;
    border-radius: 10%;
    margin-top: 3vh;
    position: relative;
    margin-right: 2vw;
    background-image: url(${drinkImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
`;

const ItemBlockLeft = styled.div`
    display: inline-block;
    line-height: 1.5;

    .itemName {
        font-size: 22px;
        margin-top: 2vh;
    }

    .itemCost {
        font-size: 22px;
    }
`;

const ItemBlockRight = styled.div`
    display: inline-block;
    line-height: 1.5;

    .itemName {
        font-size: 22px;
        margin-top: 2vh;
    }

    .itemCost {
        font-size: 22px;
    }
`;

// CONFIRM PAGE
const ConfirmBody = styled.div`
    width: 100%;
    height: 66.5vh;
    background-color: #ffffff;
    text-align: center;
    padding-top: 3vh;

    .itemName {
        font-size: 25px;
        color: #4a4a4a;
    }
`;

const ConfirmBlock = styled.div`
    width: 45vw;
    height: 26vh;
    background-color: #94aaad;
    border: soild 2px transparent;
    box-sizing:border-box;
    border-radius: 10%;
    position: absolute;
    top: 32vh;
    left: 27.5vw;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
`;

const Cost = styled.div`
    width: 100%;
    font-size: 26px;
    position: absolute;
    bottom: 32vh;

    p {
        display: inline-block;
        letter-spacing: 2px;
    }

    .point {
        color: #0c5ebe;
    }
`;

const Btn = styled.div`
    position: absolute;
    bottom: 20vh;
    left: 10vw;
`;

const CencelBtn = styled.button`
    width: 38vw;
    height: 7.5vh;
    font-size: 27px;
    letter-spacing: 3.2px;
    color: #ffffff;
    display: inline-block;
    border: soild 2px transparent;
    box-sizing:border-box;
    border-radius: 38.5px;
    background-color: #939393;
    margin-left: 2vw;
`;

const ConfirmBtn = styled.button`
    width: 38vw;
    height: 7.5vh;
    font-size: 27px;
    letter-spacing: 3.2px;
    color: #ffffff;
    display: inline-block;
    border: soild 2px transparent;
    box-sizing:border-box;
    border-radius: 38.5px;
    background-color: #033793;
    margin-left: 2vw;
`;

// SUCCESS PAGE
const SuccessBody = styled.div`
    width: 100%;
    height: 66.5vh;
    background-color: #ffffff;
    text-align: center;
    position: relative;
    padding-top: 13vh;
`;

const SuccessIcon = styled.div`
    padding-bottom: 9vh;

    .rectangle {
        width: 53vw;
        height: 20.5vh;
        border-radius: 29px;
        border: solid 3px #033793;
        padding-top: 3vh;
        display: inline-block;
    
        .complete {
            font-size: 60px;
            color: #033793;
            letter-spacing: 1.5px;
            padding-bottom: 3vh;
        }

        .hint {
            font-size: 26px;
            color: #4a4a4a;
        }
    }
`;

const Circle = styled.img`
    width: 13vw;
    height: 13vw;
`;

const RemainedPoint = styled.div`
    p {
        font-size: 26px;
        color: #4a4a4a;
        display: inline-block;
        margin-left: 5px;
        margin-right: 5px;
    }

    .dot {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #0c5ebe;
        display: inline-block;
    }

    .point {
        color: #0c5ebe;
    }
`;

function Shop() {
    const testing_point = 116;
    const testing_item1 = "紅茶 + 飲料提袋";
    const testing_item2 = "FA紀念包";
    const testing_cost1 = 100;
    const testing_cost2 = 100;
    const testing_name = "Guest1";

    const [page, setPage] = useState("shop");
    const [item, setItem] = useState(null);
    const [cost, setCost] = useState(0);
    const [currPoint, setCurrPoint] = useState(testing_point);

    if (page === "shop") {
        return (
            <div>
                <Nav title={"IPATH 學生點數系統"}/>
                <UserInfo src={bodyImg}>
                    <h1>{testing_name}</h1>
                    <CurrPoint>
                        <div className="dot"></div>
                        <p>目前持有 </p>
                        <p className="point">{testing_point}</p>
                        <p> 點</p>
                        <div className="dot"></div>
                    </CurrPoint>
                </UserInfo>
                <ItemInfo>
                    <p className="shopHint">請選擇欲兌換之商品</p>
                    <ItemBlockLeft onClick={() => {setPage("confirm"); setItem(testing_item1); setCost(testing_cost1);}}>
                        <BlockLeft />
                        <p className="itemName">{testing_item1}</p>
                        <p className="itemCost">{testing_cost1} 點</p>
                    </ItemBlockLeft>
                    <ItemBlockRight onClick={() => {setPage("confirm"); setItem(testing_item2); setCost(testing_cost2);}}>
                        <BlockRight />
                        <p className="itemName">{testing_item2}</p>
                        <p className="itemCost">{testing_cost2} 點</p>
                    </ItemBlockRight>
                </ItemInfo>
                <Footer currPage={"shop"} />
            </div>
        );
    } else if (page === "confirm") {
        return (
            <div>
                <Nav title={"IPATH 學生點數系統"}/>
                <ConfirmBody>
                    <p className="itemName">{item}</p>
                    <ConfirmBlock src={item === "FA紀念包" ? drinkImg : drinkImg}/>
                    <Cost>
                        <p>本次兌換需要 </p>
                        <p className="point">{cost}</p>
                        <p> 點</p>
                    </Cost>
                    <Btn>
                        <CencelBtn onClick={() => {setPage("shop"); setItem(null); setCost(0)}}>取消兌換</CencelBtn>
                        <ConfirmBtn onClick={() => {setPage("success"); setCurrPoint(currPoint-cost)}}>確認兌換</ConfirmBtn>
                    </Btn>
                    
                </ConfirmBody>
                <Footer currPage={"shop"} />
            </div>
        );
    } else if (page === "success") {
        return (
            <div>
                <Nav title={"IPATH 學生點數系統"}/>
                <SuccessBody>
                    <SuccessIcon>
                        <Circle src={checkIncon} alt="circle" style={{transform: 'translateX(5vw)'}}/>
                        <div className="rectangle">
                            <p className="complete">完成兌換</p>
                            <p className="hint">記得領取您的商品</p>
                        </div>
                        <Circle src={checkIncon} alt="circle" style={{transform: 'translateX(-5vw)'}}/>
                    </SuccessIcon>
                    <RemainedPoint>
                        <div className="dot"></div>
                        <p>剩餘點數 </p>
                        <p className="point">{currPoint}</p>
                        <p> 點</p>
                        <div className="dot"></div>
                    </RemainedPoint>
                </SuccessBody>
                <FooterExit />
            </div>
        );
    }
}

export default Shop;