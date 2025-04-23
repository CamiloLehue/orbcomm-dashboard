import { LatLng } from 'leaflet';

export interface Vehicle {
    id: string;
    name: string;
    type: string;
    location: LatLng;
    batteryStatus: string;
    speed?: number;
}