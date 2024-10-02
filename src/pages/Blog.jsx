import { Link, useLocation } from "react-router-dom"
import Icon from "../common/Icon"
import { DataList } from "../utils/helper"

const Blog = () => {
    let path = useLocation()
    let hash = Number(path.hash.split("#")[1])
    console.log(hash)
    return (
        <div>
            <Link to={"/"}>Blog</Link>
            <Icon icon="gitHubIcon" />
            <div className="max-w-[1140px] mx-auto">
                <div className="flex flex-row flex-wrap gap-3">
                    {DataList.map((obj, index) =>
                        <div key={index} style={{ flexBasis: "23%" }} id={`${obj.id}`} className={`mt-4 shadow-2xl p-4 ${obj.id === hash ? "!bg-black !shadow-xl" : ""}`}>
                            <h2 className="text-3xl block mt-4">{obj.title}</h2>
                            <p className="mt-4">{obj.Body.slice(0, 150)}</p>
                            <button className="bg-red-700 p-3 rounded-xl mt-4"><Link to={`/blogs/:${obj.id}`}>Read More</Link></button>
                        </div>)}
                </div>
            </div>
        </div>
    )
}

export default Blog