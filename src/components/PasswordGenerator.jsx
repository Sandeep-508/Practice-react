import { useState } from "react"

const PasswordGenerator = () => {
    const [numberOfWord, setNumberOfWord] = useState(null)
    return (
        <div className="max-w-[500px]">
            <p className="text-3xl mb-8">Here's Your Password :-</p>
            <div className="flex items-center justify-between">
                <p>Number of Character in Password : </p>
                <input placeholder="Don't type Just use Up and Down Key" type="number" max={20} min={1} />
            </div>
            <div className="flex items-center justify-between">
                <p>Include UpperCase Letters : </p>
                <input type="checkbox" />
            </div>
            <div className="flex items-center justify-between">
                <p>Include LowerCase Letters : </p>
                <input type="checkbox" />
            </div>
            <div className="flex items-center justify-between">
                <p>Include  Numbers: </p>
                <input type="checkbox" />
            </div>
            <div className="flex items-center justify-between">
                <p>Include  Symbols: </p>
                <input type="checkbox" />
            </div>
        </div>
    )
}

export default PasswordGenerator