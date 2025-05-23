import { Icon } from "leaflet";
import location_blue from "../../../assets/location/location_blue.png";
import location_red from "../../../assets/location/location_red.png";
import location_green from "../../../assets/location/location_green.png";
import location_yellow from "../../../assets/location/location_yellow.png";

const iconBlue = new Icon({
    iconUrl: location_blue,
    iconSize: [50, 50],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
});


const iconRed = new Icon({
    iconUrl: location_red,
    iconSize: [50, 50],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
});

const iconGreen = new Icon({
    iconUrl: location_green,
    iconSize: [50, 50],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
})

const iconYellow = new Icon({
    iconUrl: location_yellow,
    iconSize: [50, 50],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
})

export const mapIcons = {
    blue: iconBlue,
    red: iconRed,
    green: iconGreen,
    yellow: iconYellow,
}