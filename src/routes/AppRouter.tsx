  
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {AppRoutes} from './routes';
import {LogIn} from '../pages/index';
import './app.modules.scss'
const AppRouter: React.FC = () => (
    <BrowserRouter basename="/">
        <div  className='container-fluid cric_app'>
            <Header />

            <div>
                <Routes>
                    <Route  path={AppRoutes.LogIn}  element={<LogIn />} />   
                                    
                </Routes>
            </div>
            <Footer/>
        </div>
    </BrowserRouter>
);

export default AppRouter;