export interface TripData {
  data: Trip[];  // El archivo JSON tiene una propiedad `data` que es un array de objetos 'Trip'
}

export type Trip = {
  data: {
    messageId: string;
    assetStatus: {
      assetName: string;
      assetType: string;
      messageStamp: string;
      messageReceivedStamp: string;
      deviceSN: string;
      productType: string;
      batteryVoltage: number;
      batteryStatus: string;
      deviceFirmware: string;
      messageType: string;
      eventHasCurrentGPS: string;
      account: string;
      installedChangeDate: string;
      speed?: number;
    };
    positionStatus: {
      city: string;
      state: string;
      street: string;
      zipCode?: string;
      country: string;
      geofenceDetails: [];
      latitude: number;
      longitude: number;
      direction: string;
      dwellTimeOutside?: number;
      geofenceStatus: string;
      address: string;
      directionDegree: number;
    };
    cargoStatus?: {
      tamperMagnetStatus: string;
    };
    reeferStatus?: {
      commPlatform: string;
      messageMode: string;
      ambientTemp?: number;
    };
    genericSensors?: {
      voltageSensorData?: {
        category: string;
        sensors: {
          sensorLabel: string;
          sensorDataElement: string;
          sensorValue: string;
        }[];
      };
      temperatureSensorData?: {
        category: string;
        sensors: {
          sensorLabel: string;
          sensorDataElement: string;
          sensorValue: string;
        }[];
      };
      otherSensorData?: {
        category: string;
        sensors: {
          sensorDataElement: string;
          sensorValue: string;
        }[];
      };
    };
    pretripStatus?: {
      pretripResults: {
        testCode: string;
      }[];
    };
    impactStatus?: {
      moving: string;
    };
  }
};