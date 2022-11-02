
"use strict";

let IsProgramSaved = require('./IsProgramSaved.js')
let RawRequest = require('./RawRequest.js')
let GetProgramState = require('./GetProgramState.js')
let IsInRemoteControl = require('./IsInRemoteControl.js')
let Load = require('./Load.js')
let GetRobotMode = require('./GetRobotMode.js')
let IsProgramRunning = require('./IsProgramRunning.js')
let GetSafetyMode = require('./GetSafetyMode.js')
let GetLoadedProgram = require('./GetLoadedProgram.js')
let AddToLog = require('./AddToLog.js')
let Popup = require('./Popup.js')

module.exports = {
  IsProgramSaved: IsProgramSaved,
  RawRequest: RawRequest,
  GetProgramState: GetProgramState,
  IsInRemoteControl: IsInRemoteControl,
  Load: Load,
  GetRobotMode: GetRobotMode,
  IsProgramRunning: IsProgramRunning,
  GetSafetyMode: GetSafetyMode,
  GetLoadedProgram: GetLoadedProgram,
  AddToLog: AddToLog,
  Popup: Popup,
};
