export const FUEL_TYPE = {
    DIESEL: 1,
    LPG: 2,
    UNLEADED: 3
};

const VEHICLES = {
    CAR: {
        CAPACITY: 10,
        FUELTYPE: [FUEL_TYPE.DIESEL, FUEL_TYPE.LPG, FUEL_TYPE.UNLEADED]
    },
    VAN: {
        CAPACITY: 80,
        FUELTYPE: [FUEL_TYPE.DIESEL, FUEL_TYPE.LPG]
    },
    HGV: {
        CAPACITY: 150,
        FUELTYPE: [FUEL_TYPE.DIESEL]
    }
};

export const VEHICLE_TYPE = Object.keys(VEHICLES);

export default VEHICLES;