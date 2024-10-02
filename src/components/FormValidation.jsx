import { faEye } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

const FormValidation = () => {
    const [show, setShow] = useState(false)
    const formObj = {
        firstName: "",
        lastName: "",
        password: "",
    }
    const formErrorObj = {
        firstNameError: false,
        lastNameError: false,
        passwordError: false,
    }
    const [formErrors, setFormErrors] = useState(formErrorObj)
    const [formValue, setFormValue] = useState(formObj)
    const handleSubmit = (e) => {
        e.preventDefault();
        let spreadErrors = { ...formErrors }
        if (formValue.firstName !== "") {
            spreadErrors.firstNameError = true;
        } else {
            spreadErrors.firstNameError = false;
        }

        if (formValue.lastName !== "") {
            spreadErrors.lastNameError = true
        } else {
            spreadErrors.lastNameError = false
        }

        if (formValue.password !== "") {
            spreadErrors.passwordError = true
        } else {
            spreadErrors.passwordError = false
        }
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="flex items-start justify-start flex-col gap-4">
                <div className="flex items-center justify-center gap-3">
                    <p>First Name</p>
                    <input
                        type="text"
                        className="border border-black p-3"
                        placeholder="Enter your First Name..."
                        onChange={(e) => setFormValue({ ...formValue, firstName: e.target.value })} />
                    {formErrors.firstNameError && console.log("first name")}
                </div>
                <div className="flex items-center justify-center gap-3">
                    <p>Last Name</p>
                    <input
                        type="text"
                        className="border border-black p-3"
                        placeholder="Enter your Last Name..."
                        onChange={(e) => setFormValue({ ...formValue, lastName: e.target.value })} />
                    {formErrors.lastNameError && console.log("last name")}
                </div>
                <div className="flex items-center justify-center gap-3">
                    <p>Password</p>
                    <input
                        type={show ? "text" : "password"}
                        className="border border-black p-3"
                        placeholder="Enter your Password..."
                        onChange={(e) => setFormValue({ ...formValue, password: e.target.value })} />
                    {formErrors.passwordError && console.log("password")}
                    <FontAwesomeIcon icon={faEye} onClick={() => setShow(!show)} />
                </div>
                <button type="submit" className="p-3 bg-red-500 rounded-lg">Submit</button>
            </div>
            <p>{formErrors.firstNameError ? "First Name is true" : "First Name is false"}</p>
            <p>{formErrors.lastNameError ? "Last Name is true" : "Last Name is false"}</p>
            <p>{formErrors.passwordError ? "password is true" : "password is false"}</p>
        </form>
    )
}

export default FormValidation