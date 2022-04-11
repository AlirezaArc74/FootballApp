import { useLocation } from "react-router-dom"


const NoPage = () => {
    let location = useLocation()

    return(
        <div>
            <h1>
                sorry, this {location.pathname} page was not found
            </h1>
        </div>
    )
}
export default NoPage