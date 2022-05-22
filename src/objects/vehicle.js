import Utils from "../utils.js";

export default class Vehicle {
    #type;
    #capacity;
    #fuelType;
    #currentFuelQuantity;

    constructor({ type, capacity, fuelType }) {
        this.#type = type;
        this.#capacity = capacity;
        this.#fuelType = fuelType;
        this.#currentFuelQuantity = Utils.getRandomNumber(0, capacity * 0.25);
    }

    full() {
        this.#currentFuelQuantity = this.#capacity;
    }

    getCurrentFuelQuantity () {
        return this.#currentFuelQuantity;
    }

    getFuelType () {
        return this.#fuelType;
    }

    getVehicleType () {
        return this.#type;
    }

    getCapacity () {
        return this.#capacity;
    }

    toString() {
        return `${this.#type}, ${this.#capacity}, ${this.#fuelType}, ${this.#currentFuelQuantity}`;
    }
};