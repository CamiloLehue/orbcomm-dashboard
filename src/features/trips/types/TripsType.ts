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
    timestamp: string; // ISO 8601 format
  };
  
  export type Vehicle = {
    id: string;
    plate: string;
    type: string;
  };
  
  export type Driver = {
    id: string;
    name: string;
    license_number: string;
  };
  
  export type Trip = {
    id: number;
    origin: Location;
    destination: Location;
    distance_km: number;
    estimated_time_minutes: number;
    start_time: string; // ISO 8601
    end_time: string;   // ISO 8601
    status: "completed" | "pending" | "in_progress";
    vehicle: Vehicle;
    driver: Driver;
    route: RoutePoint[];
  };
  