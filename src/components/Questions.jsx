import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose, faCoffee, faCross, faEye, faL } from "@fortawesome/free-solid-svg-icons"
import { act, useState } from "react"
import Faqs from './Faqs'
import ToDoList from "./ToDoList"
import Tabbing from "./Tabbing"

const Question = () => {
    // first
    const [active, setActive] = useState(false)
    // second
    const [activeModal, setActiveModal] = useState(false)
    // third
    const Data = [
        {
            heading: "hi i am",
            content: "this is"
        },
        {
            heading: "hi i am",
            content: "this is"
        },
        {
            heading: "hi i am",
            content: "this is"
        },
        {
            heading: "hi i am",
            content: "this is"
        }
    ]
    const [activeIndex, setActiveIndex] = useState(1)
    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? "null" : index)
    }
    // forth
    return (
        // first
        <div className="relative">
            <div className="flex items-center justify-center gap-3">
                <input type={active ? "text" : "password"} className="w-[200px] border border-black" />
                {/* <FontAwesomeIcon icon={faCoffee} className="text-green-800 hover:text-black size-40 ease-in-out duration-300" /> */}
                <FontAwesomeIcon icon={faEye} className="size-10" onClick={() => setActive(!active)} />
            </div>
            {/* second */}
            <div>
                <div className={`fixed w-full min-h-screen z-10 bg-black top-0 ${activeModal ? "left-[0%]" : "left-[-100%]"}`}>
                    <div className="w-[400px] h-[400px] bg-white left-1/2 top-1/2 flex items-center justify-center absolute -translate-x-1/2 -translate-y-1/2">
                        Here the content
                        <FontAwesomeIcon icon={faClose} className="size-10" onClick={() => setActiveModal(false)} />
                    </div>
                </div>
                <button className="relative z-30 p-3 border border-[#FF5300] text-white bg-black" onClick={() => setActiveModal(!activeModal)}>Modal</button>
            </div>
            {/* third */}
            <div>
                {Data.map((obj, index) => <div key={index}>
                    <h1 className="text-[40px] text-center" key={index} onClick={() => handleClick(index)}>{obj.heading} {index} heading</h1>
                    <div className={`${activeIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} ease-in-out duration-300 grid`}>
                        <p className="text-[20px] text-center overflow-hidden">{obj.content} {index} content</p>
                    </div>
                </div>)}
            </div>
            {/* forth */}
            <Faqs />
            {/* fifth */}
            <ToDoList />
            {/* sixth */}
            <Tabbing />
        </div>
    )
}

export default Question