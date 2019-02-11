// Import your own middlewares here

// Let the following lines at the end of this file
import "./styles";
import "anticore/middleware/main/mono";
import { anticore } from "anticore";
import reloader from "./reloader";

reloader(module);
anticore.defaults().populate();
