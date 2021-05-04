import React from 'react';
import styled from 'styled-components';
import { FcVoicePresentation } from "react-icons/fc";

const OnlineContainer = styled.div`
    
    width: 50%;
    margin-left: 20px;

    & h4 {
        font-size: 20px;
        color: #fff;
        margin-bottom: 20px;
    }
    & span {
        font-size: 18px;
        display: flex;
        align-items: center;
    }

`;

const UserIcon = styled(FcVoicePresentation)`

    display: inline-block;
    font-size: 30px;

`;

function OnlineUsers({users}) {
    return (
        <OnlineContainer>
            <h4>Online User(s)</h4>
            {
               users ?
                   users.map(user => (
                       
                       <span key={user}><UserIcon/>{user.name}</span>
                   ))
                :
                null
            }
        </OnlineContainer>
    )
}

export default OnlineUsers
