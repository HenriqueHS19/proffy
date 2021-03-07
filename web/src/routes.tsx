import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import Profile from './pages/Profile';
import SuccessPage from './pages/SuccessPage';

const Routes: React.FC = function () {
    return (
        <BrowserRouter>
            <Route path = "/" exact component = { Login } />
            <Route path = "/register" component = { Register } />
            <Route path = "/forgot-password" component = { ForgotPassword } />
            <Route path = "/home" component = { Home } />
            <Route path = "/study" component = { TeacherList } />
            <Route path = "/give-classes" component = { TeacherForm } />
            <Route path = "/profile" component = { Profile } />
            <Route path = "/success" component = { SuccessPage } />
        </BrowserRouter>
    );
};

export default Routes;