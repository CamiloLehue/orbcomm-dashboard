import { Polygon, Popup } from "react-leaflet";

interface GeofencePolygonProps {
  name: string;
  coordinates: [number, number][];
  color?: string;
}

const GeofencePolygon: React.FC<GeofencePolygonProps> = ({
  name,
  coordinates,
  color = "blue"
}) => (
  <Polygon
    positions={coordinates}
    pathOptions={{
      color,
      fillOpacity: 0.4,
      fill: true,
      fillColor: color
    }}
  >
    <Popup>{name}</Popup>
  </Polygon>
);

export default GeofencePolygon;