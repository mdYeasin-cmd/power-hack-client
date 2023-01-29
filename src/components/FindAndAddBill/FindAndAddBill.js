import React from 'react';

const FindAndAddBill = ({ setIsOpen }) => {
    return (
        <div className="flex justify-between xl:mx-12 bg-gray-200 mt-10 items-center py-3">
            <div>
                <input type="text" placeholder="Search Bill" className="input input-bordered w-full max-w-xs ml-4" />
            </div>
            <div>
                <label htmlFor="my-modal" onClick={() => setIsOpen(true)} className="btn bg-[#51DBDC] border-0 mr-4">Add New Bill</label>
            </div>
            {/* Put this part before </body> tag */}

        </div>
    );
};

export default FindAndAddBill;