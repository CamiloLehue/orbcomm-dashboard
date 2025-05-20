import { useParams } from "react-router"
import InfoPage from "./InfoPage"

function Information() {

    const idInfoPage: string = String(useParams().id)

    return (
        <div className="h-full w-full flex-1 flex flex-col justify-start items-start px-1 pb-1">
          
                <InfoPage id={idInfoPage} />
          
        </div>
    )
}

export default Information