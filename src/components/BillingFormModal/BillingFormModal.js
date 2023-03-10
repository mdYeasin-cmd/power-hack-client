import React from 'react';

const BillingFormModal = ({payBill, setPayBill, handleBillingInfo}) => {

    const handleInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const paidBillInfo = {...payBill};
        console.log(paidBillInfo);
        paidBillInfo[field] = value;

        setPayBill(paidBillInfo);
    }

    return (
        <>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <div>

                        <h2 className="text-3xl w-3/6 mx-auto py-2 rounded-lg font-semibold text-center bg-[#51DBDC] bg-opacity-50">Add New Bill</h2>

                        <form onSubmit={handleBillingInfo}>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input
                                    onChange={handleInputBlur}
                                    type="text"
                                    name="name"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    onChange={handleInputBlur}
                                    type="email"
                                    name="email"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input
                                    onChange={handleInputBlur}
                                    type="text"
                                    name="phone"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input
                                    onChange={handleInputBlur}
                                    type="text"
                                    name="address"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Paid Amount</span>
                                </label>
                                <input
                                    onChange={handleInputBlur}
                                    type="text"
                                    name="paidAamount"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <div className="form-control w-full">

                                <div className="flex items-center justify-between">
                                    <input
                                        type="submit"
                                        className="btn bg-[#51DBDC] hover:bg-[#51DBDC] hover:bg-opacity-95 border-0 mt-4"
                                        value="Submit"
                                    />

                                    <label htmlFor="my-modal" className="btn bg-[#51DBDC] hover:bg-[#51DBDC] hover:bg-opacity-95 border-0 mt-4">Close</label>
                                </div>

                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    );
};

export default BillingFormModal;