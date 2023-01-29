import React, { useState } from 'react';
import BillingFormModal from '../BillingFormModal/BillingFormModal';
import FindAndAddBill from '../FindAndAddBill/FindAndAddBill';
import Layout from '../Layout/Layout';

const BillingPage = () => {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <Layout>
            <FindAndAddBill 
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            {
                isOpen && <BillingFormModal setIsOpen={setIsOpen} />
            }
            {/* <BillingFormModal /> */}
        </Layout>
    );
};

export default BillingPage;