export default class Pump {
    #transactions;
    #vehiclesServiced;
    #name;
    #isAvailable;

    constructor(name) {
        this.#transactions = [];
        this.#vehiclesServiced = 0;
        this.#name = name;
        this.#isAvailable = true;
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

    isPumpAvailable () {
        return this.#isAvailable;
    }

    setIsPumpAvailable (available) {
        this.#isAvailable = available;
    }

    getPumpName () {
        return this.#name;
    }
};