import React, { useEffect, useState } from 'react';
import BillingFormModal from '../BillingFormModal/BillingFormModal';
import FindAndAddBill from '../FindAndAddBill/FindAndAddBill';
import Layout from '../Layout/Layout';

const BillingPage = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [billingList, setBillingList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/billing-list')
            .then(res => res.json())
            .then(data => setBillingList(data));
    }, []);

    return (
        <Layout>
            <FindAndAddBill
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            <div>
                <div className="overflow-x-auto xl:mx-12 mt-4">
                    <table className="table w-full border">
                        <thead className="text-center">
                            <tr className='border'>
                                <th className="border-r" style={{ borderRadius: 0 }}>Billing ID</th>
                                <th className="border-r">Full Name</th>
                                <th className="border-r">Email</th>
                                <th className="border-r">Phone</th>
                                <th className="border-r">Address</th>
                                <th className="border-r">Paid Amount</th>
                                <th style={{ borderRadius: 0 }}>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                billingList.map(billingListItem => <tr key={billingListItem._id} className="border-b">
                                <td className="border-r">{billingListItem._id}</td>
                                <td className="border-r">{billingListItem.name}</td>
                                <td className="border-r">{billingListItem.email}</td>
                                <td className="border-r">{billingListItem.phone}</td>
                                <td className="border-r">{billingListItem.address}</td>
                                <td className="border-r">{billingListItem.paidAamount}</td>
                                <td>
                                    <button>Delete</button>
                                </td>
                            </tr>)
                            }
                            {/* <tr className="border-b">
                                <td className="border-r">Cy Ganderton</td>
                                <td className="border-r">Quality Control Specialist</td>
                                <td className="border-r">yeasin200011@gmail.com</td>
                                <td className="border-r">Cy Ganderton</td>
                                <td className="border-r">Quality Control Specialist</td>
                                <td className="border-r">Blue</td>
                                <td>Blue</td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
            {
                isOpen && <BillingFormModal setIsOpen={setIsOpen} />
            }
        </Layout>
    );
};

export default BillingPage;