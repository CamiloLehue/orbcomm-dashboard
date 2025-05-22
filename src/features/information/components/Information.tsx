import { useParams } from "react-router";
import InfoPage from "./InfoPage";


function Information() {
   const id = useParams().id;
   
    return (
        <div className="flex flex-col gap-2 w-full h-full">
            <InfoPage id={id!} />
        </div>
    );
}

export default Information;
