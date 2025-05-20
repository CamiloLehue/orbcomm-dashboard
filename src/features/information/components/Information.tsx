import { useParams } from "react-router"
import InfoPage from "./InfoPage"

function Information() {

    const idInfoPage: string = String(useParams().id)

    return (
        <div>
            <InfoPage id={idInfoPage} />
        </div>
    )
}

export default Information