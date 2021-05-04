import React from 'react';
import styled from 'styled-components';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background: #fff;
    color: #111;
`;

const RoomName = styled.h3`
    font-size: 20px;
    font-weight: 700;
`;


function Header({room}) {
    return (
        <Head>
            <RoomName>{room}</RoomName>
             <Link to="/">
                <AiOutlineArrowLeft />
             </Link>
        </Head>
    )
}

export default Header
