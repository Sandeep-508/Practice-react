import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Timer = () => {
    const [hour, setHour] = useState(0)
    const [min, setMin] = useState(0)
    const [sec, setSec] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setSec(prevSec => {
                if (prevSec === 59) {
                    setMin(prevMin => {
                        if (prevMin === 59) {
                            setHour(prevHour => {
                                return prevHour + 1
                            })
                            return 0
                        }
                        return prevMin + 1
                    })
                    return 0
                }
                return prevSec + 1
            })
        }, 60)
    }, [])

    return (
        <div>
            <Link to={"/"}>Home</Link>
            <p>{`${hour}:${min}:${sec}`}</p>
        </div>
    )
}

export default Timer
