


import { PositionsLast } from "../types/Vehicles";
// import lastPositionsJson from "../../../data/lastPositions.json";


// const lastPositions: PositionsLast[] = [lastPositionsJson as unknown as PositionsLast];


// export const getLastPositions = async (): Promise<PositionsLast[]> => {
//     return lastPositions;
// };

// -> cuando se haga el backend

export const getLastPositions = async (): Promise<PositionsLast[]> => {
    try {
        const response = await fetch("https://apitrack.wisensor.cl/positions/last");

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: PositionsLast[] = await response.json();

        return data;

    } catch (error) {
        console.error("Error fetching last positions:", error);
        return [];
    }

};

