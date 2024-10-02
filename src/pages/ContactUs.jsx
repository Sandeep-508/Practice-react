import { Link } from "react-router-dom"

const ContactUs = () => {
    return (
        <div className="gap-10">
            <Link to={"/"} className="ps-3">Home</Link>
            <Link to={"/about"} className="ps-3">About</Link>
            <Link to={"/contact"} className="ps-3">ContactUs</Link>
            <p className="ps-3">hello i am Contact section</p>
        </div>
    )
}

export default ContactUs