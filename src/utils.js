import VEHICLES, { VEHICLE_TYPE } from "./constants.js";
import Vehicle from "./objects/vehicle.js";

const round = (number) => {
    return Math.floor((number + Number.EPSILON) * 100) / 100;
};

const getRandomNumber = (from, to) => {
    const number = Math.random() * (to - from) + from;
    return round(number);
};


const createNewVehicle = () => {
    const vehicleId = Math.floor(getRandomNumber(0, 3));
    const vehicleType = VEHICLE_TYPE[vehicleId];
    const newVehicle = VEHICLES[vehicleType];
    const fuelId = Math.floor(getRandomNumber(0, newVehicle.FUELTYPE.length));
    const fuelType = newVehicle.FUELTYPE[fuelId];
    const vehicle = new Vehicle({
        type: vehicleType,
        capacity: newVehicle.CAPACITY,
        fuelType
    });
    return vehicle;
};

const Utils = {
    getRandomNumber,
    createNewVehicle,
    round
};

export default Utils;