import { Link } from "react-router-dom"

const Error404 = () => {
    return (
        <div>
            <Link to={"/"}>Home</Link>
            <div>Hi this is Error 404 page</div>
        </div>
    )
}

export default Error404