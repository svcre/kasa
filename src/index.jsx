import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/body.css';
import App from './pages/App.js';
import Fiche from './pages/fiche.js';
import Error from './pages/error.js';
import About from './pages/about.js'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    < React.StrictMode >

        <Router>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/about' element={<About />} />
                <Route path='/fiche/:id' element={<Fiche />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </Router>

    </React.StrictMode>

);