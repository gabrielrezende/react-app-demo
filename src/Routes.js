import React from 'react';
import { Routes, Route  } from 'react-router-dom';

import LoginForm from './Components/LoginForm';
import CreateAcount from './Components/CreateAcount';
import ForgotPassword from './Components/ForgotPassword';

    export default () => {
        return (
            <Routes>
                <Route path="/" element={<LoginForm/>} />
                <Route path="/criar-conta" element={<CreateAcount/>} />
                <Route path="/recuperar-senha" element={<ForgotPassword/>} />
            </Routes>
        )
    }