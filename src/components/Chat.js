import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import styled from 'styled-components';
import { AiOutlineArrowLeft, AiOutlineSend } from "react-icons/ai";
import Messages from './Messages';
import Header from './Header';
import { useScrollTo } from 'react-scroll-to-bottom';
import OnlineUsers from './OnlineUsers';

let socket;

var connectionOptions =  {
    "force new connection" : true,
    "reconnectionAttempts": "Infinity", 
    "timeout" : 10000,                  
    "transports" : ["websocket"]
};
const ENDPOINT = `https://v1-chat-app.herokuapp.com/`;


const Main = styled.div`
    width: 800px;
    height: 600px;
    background: #b6b8c3;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & form {
        width: 100%;
        height: 100%;
        max-height: 70px;
        background: red;
        position: relative;
    }
    & input[type="text"] {
       width: 100%;
       padding: 20px 100px 20px 10px;
       line-height: 30px;
       border: none;
       outline:none;
       font-size: 20px;
       background: #fff;
       border-radius: unset;
        
    }
    & button {
      position: absolute;
      right: 17px;
      top: 16px;
      font-size: 40px;
      color: #8e99f3;
      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      transition: .3s;
      &:hover {
          transform: scale(1.02);
          color: #26418f;
      }
    }

    @media (max-width: 1060px) {
        width: 500px;
    }
    @media (max-width: 320px) {
        width: 10px;
    }
    @media (max-width: 414px) {
        width: 350px;
    }
    

`;

const Container = styled.div`
    display: flex;
    align-items: flex-start;

    @media (max-width: 1060px) {
        flex-direction: column;
    }
`;

function Chat({location}) {

    const [users, setUsers] = useState('');
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const {name, room} = queryString.parse(location.search);
        
        socket = io(ENDPOINT, connectionOptions);
        
        setName(name);
        setRoom(room);


        socket.emit('join', {name, room},() => {
           
        });


    },[ENDPOINT, location.search]);


    useEffect(() => {
        socket.on('message', (message) => {
            setMessages(messages => [...messages, message]);
        });

        socket.on("roomData", ({ users }) => {
            setUsers(users);
        })

    }, []);

    // function for sending messages

    const sendMessage = (e) => {
        e.preventDefault();

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        } 

    } 

    console.log(users);

    return (
        <Container>
            <Main>
            <Header room={room} />
            <Messages messages={messages} name={name}/>
                    <form>
                        <input 
                            type="text"
                            value={message}
                            placeholder="Type a message...."
                            onChange={e => setMessage(e.target.value)}
                            onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
                        />
                        <button onClick={e => sendMessage(e)}>
                        <AiOutlineSend />
                        </button>
                    </form>
            </Main>
            <OnlineUsers users={users} />
        </Container>
    )
}

export default Chat
