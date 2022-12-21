import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './page/Home';
import { Login } from './page/Login';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    );
}

export default App;
