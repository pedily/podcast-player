import rpio from "rpio";
import { KY040 } from "../ky040.js";
import { decreaseVolume, increaseVolume, togglePause } from "../player.js";

export function setup() {
  const DATAPIN = 6;
  const SWITCHPIN = 13;
  const CLOCKPIN = 5;

  rpio.init({
    mapping: "gpio",
    mock: "raspi-3",
  });

  const knob = new KY040({
    dataPin: DATAPIN,
    clockPin: CLOCKPIN,
    switchPin: SWITCHPIN,
  });

  knob.onButtonPress(togglePause);
  // knob.onButtonRelease(console.log.bind(console, "[BUTTON] UP"));
  knob.onKnobTurnLeft(decreaseVolume);
  knob.onKnobTurnRight(increaseVolume);
}
