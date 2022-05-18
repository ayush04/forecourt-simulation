import Pump from "./objects/pump.js";
import Lane from "./objects/lane.js";
import Vehicle from "./objects/vehicle.js";

const pump1 = new Pump("Pump 1");
const pump2 = new Pump("Pump 2");
const pump3 = new Pump("Pump 3");

const lane1 = new Lane();
lane1.addPump(pump1);
lane1.addPump(pump2);
lane1.addPump(pump3);