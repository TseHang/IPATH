import React, { useState, useContext } from "react";
import styled from "styled-components";
import QrReader from "react-qr-reader";
import { withRouter } from "react-router-dom";
import uesrImg0001 from './img/0001.png';
import uesrImg0002 from './img/0002.png';
import uesrImg0007 from './img/0007.png';
import uesrImg0051 from './img/0051.png';
import uesrImg0052 from './img/0052.png';
import guestImg from './img/guest.png';

import {UserContext} from './App';

const Rectangle = styled.div`
  position: fixed;
  padding: 5vh 5vh 5vh 0;
  max-width: 100vw;
  height: 43vh;
  left: 0;
  bottom: 10vh;
  background-color: #444a4c;
  display: flex;

  .circle {
    position: relative;
    background-color: white;
    width: 30vh;
    height: 30vh;
    border-radius: 50%;
    margin-left: -5vh;
    left: -15vh;
  }

  .qr-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .qr-text {
    letter-spacing: 0.5px;
    text-align: center;
    margin-top: 10px;
    color: #cfcfcf;
    font-size: 24px;
  }
`;

const QRScanner = styled(QrReader)`
  width: 30vh;
  height: 30vh;
  border: solid 3px #aaaaaa;
`;

const img_list = {
  '0001': uesrImg0001,
  '0002': uesrImg0002,
  '0007': uesrImg0007,
  '0051': uesrImg0051,
  '0052': uesrImg0052,
}

function Login(props) {
  // context
  const [user, setUser] = useContext(UserContext);
  // state
  const [result, setResult] = useState(null);
  const onScan = data => {
    if (data) {
      setResult(data);
      alert(`歡迎：${data}`);

      fetch(`http://140.116.249.173:5000/api/IPath/${data}`)
        .then(response => response.json())
        .then(data => {
          const userData = {
            'name': data.data.name,
            'record': data.data.record,
            'calories': data.data.calories,
            'nickname': data.data.nickname,
            'img': img_list[data.data.nickname]
          };
          if (!userData.img) {
            userData.img = guestImg;
          }
          // set context
          setUser(userData);
        }).catch(e => console.log('error: ', e));
      
      props.history.push("/profile");
    }
  };

  return (
    <div className="login">
      {/* <p>
        <bold>{result}</bold>
      </p> */}
      <div className="Oval-Copy">
        <div className="title">
          <p className="CH-Title">iPATH 學生點數系統</p>
          <p className="EN-Title">iPATH Student Point System</p>
        </div>
        <div className="desh"></div>
      </div>
      <div className="Oval"></div>
      <Rectangle>
        <div className="circle" />
        <div className="qr-wrapper">
          <QRScanner
            delay={300}
            onError={err => alert(err)}
            onScan={onScan}
            showViewFinder={false}
            facingMode="environment"
          />
          <p className="qr-text">請掃描登入使用者身份</p>
        </div>
      </Rectangle>
    </div>
  );
}

export default withRouter(Login);