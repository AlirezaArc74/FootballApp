import { useEffect, useState } from "react"

const Couches = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

const handleResize = () => {
    setWindowWidth(window.innerWidth)
}

    useEffect(() => {
        window.addEventListener('resize', handleResize)
    }, [])
    return(
        <div>
            <h1>
                Couches Page
                <h1 className="bg-red-400"> {windowWidth} </h1>
            </h1>
        </div>
    )
}
export default Couches