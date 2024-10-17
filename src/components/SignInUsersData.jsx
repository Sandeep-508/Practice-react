import { useState } from "react"

const SignInUsersData = ({ storeData, showState, handleUpdate, handleDelete, handleIndex }) => {
    return (
        <div>
            <h2 className="text-3xl my-5">SignInUsersData</h2>
            {
                showState
                    ?
                    <div className="flex flex-wrap items-start justify-start">
                        {storeData.map((item, index) => (
                            <div className="w-2/12 px-3 mt-5">
                                <div className="mt-3">
                                    <div className="flex flex-col items-start justify-center">
                                        <p className="text-xl">First Name</p>
                                        <p>{item.firstName}</p>
                                    </div>
                                    <div className="my-2 flex flex-col items-start justify-start">
                                        <p className="text-xl">Email</p>
                                        <p>{item.email}</p>
                                    </div>
                                    <div className="flex flex-col items-start justify-start">
                                        <p className="text-xl">Phone Number</p>
                                        <p>{item.phoneNumber}</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    <button className="p-2 bg-green-800 rounded-xl" onClick={() => { handleUpdate(index); handleIndex(index) }}>Update</button>
                                    <button className="p-2 bg-red-800 rounded-xl" onClick={() => { handleDelete(index); handleIndex(index) }}>Delete</button>
                                </div>
                            </div>
                        ))
                        }
                    </div >
                    : ""
            }
        </div >
    )
}

export default SignInUsersData