import { Link, useLocation } from "react-router-dom"
import { DataList } from "../utils/helper";

export default function Blogs() {
    const location = useLocation();
    let currentId = location.pathname.split("/")[2];
    let backCurrentId = currentId.split("").slice(1, currentId.split("").length)
    let backId = Number(backCurrentId.join(''));
    console.log(backId)
    let currentData = DataList.filter((v) => `:${v.id}` === currentId);
    console.log(currentData, currentId)
    return (
        <Link to={`/blog/#${backId}`} className="text-5xl">{currentData[0].title}</Link>
    )
}
