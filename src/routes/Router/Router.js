import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import BillingPage from '../../components/BillingPage/BillingPage';
import Layout from '../../components/Layout/Layout';
import LogIn from '../../components/LogIn/LogIn';
import SignUp from '../../components/SignUp/SignUp';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />  
    },
    {
        path: '/billingPage',
        element: <BillingPage />
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