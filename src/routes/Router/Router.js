import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import BillingPage from '../../components/BillingPage/BillingPage';
import LogIn from '../../components/LogIn/LogIn';
import SignUp from '../../components/SignUp/SignUp';
import UpdateBillingInfo from '../../components/UpdateBillingInfo/UpdateBillingInfo';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <BillingPage />  
    },
    {
        path: '/billingPage',
        element: <BillingPage />
    },
    {
        path: '/updateBillingInfo',
        element: <UpdateBillingInfo />
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