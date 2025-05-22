export type Coordinate = {
    latitude: number;
    longitude: number;
  };
  
  export type Location = {
    name: string;
    coordinates: Coordinate;
  };
  
  export type RoutePoint = {
    lat: number;
    lng: number;
    timestamp: string; 
  };
  
  export type Routes = {
    id: number;
    origin: Location;
    destination: Location;
    distance_km: number;
    estimated_time_minutes: number;
    start_time: string; 
    end_time: string;
    status: "active" | "inactive" | "suspended";
    route: RoutePoint[];
  };
  