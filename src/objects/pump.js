import Utils from "../utils.js";

export default class Pump {
    #transactions;
    #vehiclesServiced;
    #name;
    #assignedVehicle;

    #DISPENSE_RATE = 1.5;

    constructor(name) {
        this.#transactions = [];
        this.#vehiclesServiced = 0;
        this.#name = name;
    }

    addTransaction ({ fuelType, quantity }) {
        const transaction = {
            name: this.#name,
            fuelType,
            quantity,
            timeStamp: new Date().getTime()
        };
        this.#transactions.push(transaction);
        this.#vehiclesServiced++;
    }

    getAllTransactions () {
        return [...this.#transactions];
    }

    getVehicleServiceCount () {
        return this.#vehiclesServiced;
    }

    getAssignedVehicle () {
        return this.#assignedVehicle;
    }

    setAssignedVehicle (vehicle) {
        this.#assignedVehicle = vehicle;
    }

    getPumpName () {
        return this.#name;
    }

    getTimeToFill (vehicle) {
        return Utils.round((vehicle.getCapacity() - vehicle.getCurrentFuelQuantity()) / this.#DISPENSE_RATE);
    }

    toString() {
        return `${this.#name}, ${this.#assignedVehicle}`;
    }
};