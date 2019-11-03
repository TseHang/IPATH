import React, { useState } from "react";
import styled from "styled-components";
import QrReader from "react-qr-reader";
import { withRouter } from "react-router-dom";

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

function Login(props) {
  const [result, setResult] = useState(null);
  const onScan = data => {
    if (data) {
      setResult(data);
      alert(`我掃到的資料是：${data}`);
      props.history.push("/profile");
    }
  };

  console.log(props);

  return (
    <div className="login">
      {/* <p>
        <bold>{result}</bold>
      </p> */}
      <div className="Oval-Copy">
        <div className="title">
          <p className="CH-Title">IPATH 學生點數系統</p>
          <p className="EN-Title">IPATH Student Point System</p>
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