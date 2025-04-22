import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    Polyline,
    LayersControl,
    ScaleControl
} from 'react-leaflet';
import { LatLngExpression, Icon } from 'leaflet';
import { useEffect, useState } from 'react';
import vehicleImg from '../../assets/image.png';

const { BaseLayer, Overlay } = LayersControl;

const truckIcon = new Icon({
    iconUrl: vehicleImg,
    iconSize: [50, 50],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
});

const route: LatLngExpression[] = [
    [-41.4717, -72.9369],
    [-41.4720, -72.9350],
    [-41.4725, -72.9335],
    [-41.4730, -72.9320],
    [-41.4735, -72.9305],
    [-41.4740, -72.9290],
];

const MapView = () => {
    const [markerIndex, setMarkerIndex] = useState(0);
    const [address, setAddress] = useState<string>('Cargando dirección...');

    // 🔄 Cada vez que cambia la posición, consultar la dirección
    useEffect(() => {
        const fetchAddress = async (lat: number, lon: number) => {
            try {
                const response = await fetch(
                    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
                );
                const data = await response.json();
                setAddress(data.display_name || 'Dirección no encontrada');
            } catch (error) {
                console.error('Error al obtener dirección:', error);
                setAddress('Error al obtener dirección');
            }
        };

        const [lat, lon] = route[markerIndex] as [number, number];
        fetchAddress(lat, lon);
    }, [markerIndex]);

    useEffect(() => {
        const interval = setInterval(() => {
            setMarkerIndex((prev) => (prev < route.length - 1 ? prev + 1 : prev));
        }, 9000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="rounded-b-xl overflow-hidden p-1 bg-zinc-900">
            <MapContainer center={route[0]} zoom={16} style={{ height: '500px', width: '100%' }}>
                <LayersControl position="topright">
                    <BaseLayer checked name="OpenStreetMap">
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    </BaseLayer>

                    <BaseLayer name="Esri Satellite">
                        <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
                    </BaseLayer>

                    <Overlay checked name="Ruta">
                        <Polyline positions={route} color="black" />
                    </Overlay>

                    <Overlay checked name="Camión">
                        <Marker position={route[markerIndex]} icon={truckIcon}>
                            <Popup>
                                <strong>Camión en movimiento</strong>
                                <br />
                                {address}
                            </Popup>
                        </Marker>
                    </Overlay>
                </LayersControl>
                <ScaleControl position="bottomleft" />
            </MapContainer>
        </div>
    );
};

export default MapView;