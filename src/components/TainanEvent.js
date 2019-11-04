import React from 'react';
import '../App.css';
import styled from "styled-components";

const EventDetail = styled.div`
    width: 83vw;
    height: 7vh;
    background-color: #ffffff;
    border-left: solid 10px #a30a13
    box-shadow: 3px 6px 21px 0 rgba(150, 150, 150, 0.5);
    margin-left: 8.5vw;
    font-size: 24px;
    margin-bottom: 2vw;
    transform: translateY(-3.5vh);
    opacity: ${(props) => props.done?1:0.5};

    .title {
        color: #4a4a4a;
        line-height: 7vh;
        margin-left: 4.5vw;
        display: inline-block;
        float: left;
    }

    .done {
        color: #a30a13;
        line-height: 7vh;
        margin-right: 4.5vw;
        display: inline-block;
        float: right;
    }
`;

function TainanEvent (props) {
    return(
        <EventDetail done={props.done}>
            <p className="title">{props.title}</p>
            <p className="done">{props.done?"完成":"未體驗"}</p>
        </EventDetail>
    );
}

export default TainanEvent;