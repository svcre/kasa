import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/body.css';
import App from './pages/App.js';
import Fiche from './pages/fiche.js'
import Error from './pages/error.js';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    < React.StrictMode >

        <Router>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/fiche/:id' element={<Fiche />} />
                <Route path='/error' element={<Error />} />
            </Routes>
        </Router>

    </React.StrictMode>

);