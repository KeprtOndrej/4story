import './css/App.css';
import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import HomePage from "./components/HomePage";
import FortConquestPage from "./components/FortConquestPage";
import LoginPage from "./components/LoginPage";
import NoPage from "./components/NoPage";
import GlobalMenu from "./components/GlobalMenu";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <GlobalMenu/>
                <Routes>
                    <Route path='/' element={<HomePage />}/>
                    <Route path='/dobko' element={<FortConquestPage/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='*' element={<NoPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}
