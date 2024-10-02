import { useState } from "react"
import { AppearingData } from "../utils/helper"

const Tabbing = () => {
    const [active, setActive] = useState(0)
    const handleClick = (index) => {
        setActive(index)
    }
    return (
        <div>
            {AppearingData.map((obj, index) =>
                <div key={index} className="flex">
                    <div className="flex items-center justify-center" onClick={() => handleClick(index)}><button>{obj.btnText}</button></div>
                    <p className={`${active === index ? "block" : "hidden"}`}>{obj.data}</p>
                </div>
            )}
        </div>
    )
}

export default Tabbing