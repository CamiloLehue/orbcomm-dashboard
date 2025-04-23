import { Icon } from "leaflet";
import vehicleImg from "../../../assets/image.png";

export const truckIcon = new Icon({
    iconUrl: vehicleImg,
    iconSize: [50, 50],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
});