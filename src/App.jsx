import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Demo from './componants/Demo';
import Add from './componants/Add';
import Login from './componants/Login';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Demo />} />
                <Route path="/add" element={<Add/>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </Router>
    );
}

export default App;
