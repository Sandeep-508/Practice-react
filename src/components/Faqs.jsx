import { useState } from "react"
import { Data } from "../utils/helper"

const Faqs = () => {
    const [active, setActive] = useState(0)
    let items = Data.map((obj, index) => {
        let itemsDetails = {
            obj,
            active,
            setActive
        }
        return (
            <FaqItems items={itemsDetails} index={index} key={index} />
        )
    })


    return (
        <div>

            {/* in map you should have to return something unless it will not show anything */}

            {/* {Data.map((obj, index) => (
                <div><FaqItems /></div>
            ))} */}

            {items}
        </div>
    )
}

// if any component name will be small then it would stop working

// we can't use key as a prop to access index we should be using index as index for accessing index values

const FaqItems = ({ items, index }) => {
    const handleClick = (index) => {
        items.setActive(items.index)
        items.setActive(items.active === index ? null : index)
    }
    return (
        <div>
            <h1 onClick={() => handleClick(index)}>{items.obj.heading}</h1>
            <p className={`h-0 overflow-hidden ${items.active === index ? "h-auto" : ""}`}>{items.obj.content}</p>
        </div>
    )
}

export default Faqs