import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/body.css';
import App from './pages/App.js';
import Fiche from './pages/fiche.js';
import About from './pages/about.js';
import Error from './pages/error.js';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    < React.StrictMode >

        <Router>
            <Routes>
                <Route path='*' element={<Error />} />
                <Route path='/' element={<App />} />
                <Route exact path='/about' element={<About />} />
                <Route path='/fiche/:id' element={<Fiche />} />
            </Routes>
        </Router>

    </React.StrictMode>

);