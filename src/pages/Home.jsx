import { Link } from "react-router-dom"
import { ReactTyped } from "react-typed"
import FormValidationHook from "../components/FormValidationHook"
import MyValidation from "../components/MyValidation"
import FormValidationWithZod from "../components/FormValidationWithZod"

const Home = () => {
    return (
        <div className="gap-10">
            {/* <Link to={"/"} className="text-blue ps-3">Home</Link>
            <Link to={"/about"} className="text-blue ps-3">About</Link>
            <Link to={"/contact"} className="text-blue ps-3">ContactUs</Link>
            <Link to={`/blog`} className="text-blue ps-3">Blogs</Link>
            <Link to={`/timer`} className="text-blue ps-3">Timer</Link>
            <Link to={`/question`} className="text-blue ps-3">Question</Link>
            <Link to={`/form`} className="text-blue ps-3">Form Validation</Link>
            <p className="ps-3">hello i am Home section</p>
            <div className="flex items-center mt-3">
                <p className="ps-3 text-4xl">Learn</p>
                <ReactTyped className='ps-3 text-4xl' strings={["Web development", "Digital Marketing", "Ethical Hacking"]} typeSpeed={100}
                    loop={true} backSpeed={50} />
            </div> */}
            <FormValidationHook />
            <MyValidation />
            <FormValidationWithZod />
        </div>
    )
}

export default Home