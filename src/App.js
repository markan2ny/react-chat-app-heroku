import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Chat from './components/Chat';
import Join from './components/Join';
import GlobalStyle from './components/styles/GlobalStyle';

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Route path="/chat" component={Chat} />
            <Route path="/" exact component={Join} />
        </Router>
    )
}

export default App
