
export interface MeasurementUnits {
  dateFormat: string;
  pressureUOM: string;
  temperatureUOM: string;
  distanceUOM: string;
  fuelUOM: string;
  weightUOM: string;
  timeDuration: string;
}

export interface ApiResponse<T> {
  data: T[];
  code: number;
  message: string;
  exception: boolean;
  measurementUnits?: {
    dateFormat: string;
    pressureUOM: string;
    temperatureUOM: string;
    distanceUOM: string;
    fuelUOM: string;
    weightUOM: string;
    timeDuration: string;
  };
}

