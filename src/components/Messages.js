import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';
import styled from 'styled-components';

const MessageContainer = styled(ScrollToBottom)`
   width: 100%;
   overflow-y: scroll;
`;
const Greetings = styled.div`
    width: 90%;
    margin: 15px auto;

`;

function Messages({messages, name}) {
    return (
        <MessageContainer>
            {
                messages.map((message, index) => {
                    return (
                        <Greetings key={index}>
                            <Message message={message} name={name}/>
                        </Greetings>
                    )
                })
            }
        </MessageContainer>
    )
}

export default Messages
