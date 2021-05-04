import React from 'react';
import styled from 'styled-components/macro';
import ReactEmoji from 'react-emoji';

const You = styled.div`
   display: flex;
   align-items: center;
   color: #fff;
   justify-content: flex-end;

   & div {
       background: #26418f;
       padding: 20px 10px;
       border-radius: 24px;
       margin-left: 10px;
   }
   & .youName {
       color: #111;
   }
`;
const Friend = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    & div {
        background: #fff;
        padding: 20px 10px;
        border-radius: 24px;
        margin-right: 10px;
    }
    & .friendName {
        color: #333;
    }
`;

function Message({message:{user, text}, name}) {

    let isSentByCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();

    if(user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser
        ? (
            <You>
                <p className="youName">You</p>
                <div>
                    <p>{ReactEmoji.emojify(text)}</p>
                </div>
            </You>
        )
       :
       (
        <Friend>
            <div>
                <p className="friendName">{ReactEmoji.emojify(text)}</p>
            </div>
            <p>{user}</p>
        </Friend>
       )
    )
}

export default Message
