export interface ApiZoneCoordinate {
  longitud: number;
  latitud: number;
  altitud: number;
}

export interface ApiZoneData {
  id: number;
  name: string;
  color: string;
  category: string;
  coordinates: ApiZoneCoordinate[];
}

export interface ZoneData {
  id: string;
  name: string;
  category: string;
  coordinates: [number, number][];
  color?: string;
}