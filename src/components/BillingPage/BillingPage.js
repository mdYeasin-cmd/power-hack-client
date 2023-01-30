import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import BillingFormModal from '../BillingFormModal/BillingFormModal';
import FindAndAddBill from '../FindAndAddBill/FindAndAddBill';
import Layout from '../Layout/Layout';

const BillingPage = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [billingList, setBillingList] = useState([]);
    const [payBill, setPayBill] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/billing-list')
            .then(res => res.json())
            .then(data => {
                setBillingList(data);
            })
            .catch(error => console.log(error));
    }, [payBill, billingList]);

    const handleBillingInfo = (event) => {
        event.preventDefault();

        fetch('http://localhost:5000/add-billing', {
            method: 'POST',
            body: JSON.stringify(payBill),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));

    }

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/delete-billing/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Deleted Successfully.')
            })
            .catch(error => console.log(error));
    }

    const handleUpdate = (id) => {
        console.log("Update Button");
    }

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
                                    <td className="border-r">{billingListItem?._id}</td>
                                    <td className="border-r">{billingListItem.name}</td>
                                    <td className="border-r">{billingListItem.email}</td>
                                    <td className="border-r">{billingListItem.phone}</td>
                                    <td className="border-r">{billingListItem.address}</td>
                                    <td className="border-r">{billingListItem.paidAamount}</td>
                                    <td>
                                        <button onClick={() => handleUpdate(billingListItem?._id)}>Update</button> ||
                                        {/* <button className="ml-1" onClick={() => handleDelete(billingListItem?._id)}>Delete</button> */}
                                        <label htmlFor="my-modal" onClick={() => setIsOpen(true)}>Update</label>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {
                isOpen && <BillingFormModal
                    payBill={payBill}
                    setPayBill={setPayBill}
                    setIsOpen={setIsOpen}
                    handleBillingInfo={handleBillingInfo}
                />
            }
        </Layout>
    );
};

export default BillingPage;