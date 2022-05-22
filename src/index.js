import Pump from "./objects/pump.js";
import Lane from "./objects/lane.js";
import Utils from "./utils.js";

let lane1;
let lane2;
let lane3;
const lanes = [];

/**
 * Initialize simulation - create lanes and pumps
 */
const initializeSimulation = () => {
    const pump1 = new Pump("Pump 1");
    const pump2 = new Pump("Pump 2");
    const pump3 = new Pump("Pump 3");
    
    lane1 = new Lane();
    lane1.addPump(pump1);
    lane1.addPump(pump2);
    lane1.addPump(pump3);
    
    const pump4 = new Pump("Pump 4");
    const pump5 = new Pump("Pump 5");
    const pump6 = new Pump("Pump 6");
    
    lane2 = new Lane();
    lane2.addPump(pump4);
    lane2.addPump(pump5);
    lane2.addPump(pump6);
    
    const pump7 = new Pump("Pump 7");
    const pump8 = new Pump("Pump 8");
    const pump9 = new Pump("Pump 9");
    
    lane3 = new Lane();
    lane3.addPump(pump7);
    lane3.addPump(pump8);
    lane3.addPump(pump9);
    lanes.push(...[lane1, lane2, lane3]);
};

/**
 * Returns the next pump available in a lane. Handles the case when pump 3 is busy then pump 1 and pump 2
 * are unavailable
 * @param {*} lane 
 * @returns pump object
 */
const getAvailablePump = (lane) => {
    const pumps = lane.getPumps();
    let availablePump = null;
    for(let i = pumps.length - 1; i >= 0; i--) {
        if(pumps[i].getAssignedVehicle()) {
            return availablePump;
        } else {
            availablePump = pumps[i];
        }
    }
    return availablePump;
};

/**
 * Returns available lane for pushing vehicle into queue
 * @returns lane object
 */

const getAvailableLane = () => {
    for(const lane of lanes) {
        if(getAvailablePump(lane) && lane.getQueue().length < 5) {
            return lane;
        }
    };
    return null;
};

/**
 * Creates a random vehicle every 1.5 - 2.2 seconds,
 * calls itself
 */

const createVehicle = () => {
    const availableLane = getAvailableLane();
    if(availableLane) {
        const vehicle = Utils.createNewVehicle();
        availableLane.addVehicleToQueue(vehicle);
    }
    setTimeout(createVehicle, Math.floor(Utils.getRandomNumber(1500, 2200)));
};

const resetPumpAvailability = (pump, timeToFill) => {
    setTimeout(() => pump.setAssignedVehicle(null), timeToFill);
};

/**
 * Assigns a vehicle to a pump, creates a transaction in pump object
 * @param {*} pump 
 * @param {*} vehicle 
 */

const assignVehicleToPump = (pump, vehicle) => {
    pump.setAssignedVehicle(vehicle);
    const timeToFill = pump.getTimeToFill(vehicle);
    pump.addTransaction({
        fuelType: vehicle.getFuelType(),
        quantity: timeToFill * 1.5
    });
    resetPumpAvailability(pump, timeToFill * 1000);
};

/**
 * Checks the pumps in a lane to see if they are available.
 * Then calls assignVehicleToPump method.
 * @param {*} lane 
 */
const laneManager = (lane) => {
    const queue = lane.getQueue();
    const availablePump = getAvailablePump(lane);
    while(availablePump && queue.length > 0) {
        const vehicle = queue.pop();
        assignVehicleToPump(availablePump, vehicle);
    }

    setTimeout(laneManager, 1000, lane);
};

/**
 * Prints all the transactions for all the pumps
 */
const getAllTransactions = () => {
    for(const lane of lanes) {
        const pumps = lane.getPumps();
        for(const pump of pumps) {
            console.log(JSON.stringify(pump.getAllTransactions()));
        }
    }
    console.log("----- Transactions -----");
    setTimeout(getAllTransactions, 10000);
};

/**
 * Start simulation
 */
initializeSimulation();
laneManager(lane1);
laneManager(lane2);
laneManager(lane3);
createVehicle();

console.log("----- Transactions -----");
setTimeout(getAllTransactions, 10000);