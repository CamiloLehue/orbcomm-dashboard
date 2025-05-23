import { useParams } from "react-router";
import InfoPage from "./InfoPage";
import SubMenu from "../../../components/ui/SubMenu";


function Information() {
    const id = useParams().id;

    return (
        <div className="flex flex-col gap-2 w-full h-full">
            <SubMenu title="Información destacada" />
            <InfoPage id={id!} />
        </div>
    );
}

export default Information;
