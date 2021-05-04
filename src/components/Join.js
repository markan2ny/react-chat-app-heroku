import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    width: 300px;
    height: 300px;
    background: lightblue;
    margin-top: 100px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
`;
const JoinContainer = styled.div`
    padding: 20px;
`;
const Title = styled.h1`
    font-size: 22px;
    color: #fff;
    margin-bottom: 20px;
`;
const Input = styled.input`
    margin-top: 50px;
    display: block;
    width: 100%;
    padding: 5px;
    font-size: 18px;
    font-weight: 400;
    color: #333;
    outline: none;
    border: none;
    & + & {
        margin: 15px 0 50px;
    }
    &::placeholder {
        color: #d4c4c4;
    }
`;
const Button = styled.button`
    display: inline-block;
    width: 100%;
    padding: 10px 0;
    border: none;
    border-radius: 24px;
    cursor: pointer;
    background: #519657;
    color: #fff;
    font-weight: 700;
    font-size: 20px;
    text-transform: uppercase;
    transition: .3s;
    &:hover {
        background: #338a3e;
    }
`;

function Join() {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <Container>
           <JoinContainer>
               <Title>Join</Title>
               <div>
               <Input 
                placeholder="Name" 
                type="text" 
                onChange={(e) => setName(e.target.value)}/>
               <Input 
                placeholder="Room" 
                type="text" 
                onChange={(e) => setRoom(e.target.value)}/>
               <Link
               onClick={e => (!name || !room ) ? e.preventDefault() : null} 
               to={`/chat?name=${name}&room=${room}`}>
                    <Button>
                        Join Now
                    </Button>
               </Link>
               </div>
           </JoinContainer>
        </Container>
    )
}

export default Join
