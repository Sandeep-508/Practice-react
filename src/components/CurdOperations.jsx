import { useState } from "react"
import { Link } from "react-router-dom"
import SignInUsersData from "./SignInUsersData"

const CurdOperations = () => {
    const [showData, setShowData] = useState(false)
    const [storedData, setStoredData] = useState([])
    const [indexState, setIndexState] = useState(null)
    const formObj = {
        firstName: "",
        email: "",
        phoneNumber: "",
        index: ""
    }
    const [formValue, setFormValue] = useState(formObj)
    const getValue = (e) => {
        let changingName = e.target.name;
        let currentData = { ...formValue }
        currentData[changingName] = e.target.value
        setFormValue(currentData)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (indexState !== null) {
            let updatedObj = [...storedData]
            updatedObj[indexState] = formValue;
            setStoredData(updatedObj)
            setIndexState(null)
        } else {
            setStoredData(prev => [...prev, formValue])
        }
        setShowData(true)
        setFormValue(formObj)
        console.log(storedData)
    }
    const handleIndex = (index) => {
        setIndexState(index)
        console.log(`clicked update ${index}`)
    }

    const handleUpdate = (index) => {
        let updatingObj = storedData[index]
        console.log(`Updating item at index: ${index}`, updatingObj);
        setIndexState(1)
        setFormValue(updatingObj)
    }
    const handleDelete = (index) => {
        let updateAfterDelete = storedData.filter((v, i) => index !== i)
        setStoredData(updateAfterDelete)
        console.log(`Deleting item at index: ${index}`, storedData);
    }
    return (
        <div className="p-3">
            <Link to={'/'}>Home</Link>
            <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col items-start justify-start mt-6">
                <label className="mt-3">First Name</label>
                <input type="text" value={formValue.firstName} name="firstName" onChange={(e) => getValue(e)} />
                <label className="mt-3">Email</label>
                <input type="email" value={formValue.email} name="email" onChange={(e) => getValue(e)} />
                <label className="mt-3">Phone Number</label>
                <input type="number" value={formValue.phoneNumber} name="phoneNumber" onChange={(e) => getValue(e)} />
                <button type="submit">{indexState !== null ? "Update" : "Submit"}</button>
            </form>
            <SignInUsersData storeData={storedData} showState={showData} handleUpdate={handleUpdate} handleDelete={handleDelete} handleIndex={handleIndex} />
        </div>
    )
}

export default CurdOperations