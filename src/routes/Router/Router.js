import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import LogIn from '../../components/LogIn/LogIn';
import SignUp from '../../components/SignUp/SignUp';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />  
    },
    {
        path: '/login',
        element: <LogIn />  
    },
    {
        path: '/signup',
        element: <SignUp />  
    },
    
])