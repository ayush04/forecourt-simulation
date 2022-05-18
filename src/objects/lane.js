export default class Lane {
    #pumps;
    #queue;

    constructor() {
        this.#pumps = [];
        this.#queue = [];
    }

    addPump (pump) {
        this.#pumps.push(pump);
    }

    addVehicleToQueue (vehicle) {
        this.#queue.push(vehicle);
    }
};