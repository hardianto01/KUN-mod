"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.ModCustomTp = void 0);
const puerts_1 = require("puerts"),
  UE = require("ue"),
  //Info_1 = require("../../../Core/Common/Info"),
 // Log_1 = require("../../../Core/Common/Log"),
  ModManager_1 = require("../ModManager"),
  CurrFile = "None",
  PrevFile = "None",
  NextFile = "None",
  PrevPos = "None",
  CurrPos = "None",
  NextPos = "None",
  TotalNum = 0,
  CurreNum = 0;

class ModCustomTp   {

  static ShowCtpState() {
    var state = ModManager_1.ModManager.Settings.CustomTp;
    var title =
      "CustomTp State [Insert]:" +
      (state?"ON" : "OFF") +
      " (" +
      CurreNum.toString() +
      "//" +
      TotalNum.toString() +
      ")" +
      CurrPos;
    //var title = "123";
   // var readme ="123";
    var readme =
      "CurrentFile:" +
      CurrFile +
      "| PreviousFile[PageUp]: " +
      PrevFile +
      "| NextFile[PageDown]: " +
      NextFile +
      " | PreviousPos[Up]: " +
      PrevPos +
      " | NextPos[Down]: " +
      NextPos;
    ModManager_1.ModManager.ShowConfirmBox(title,readme,50);
  }
  static CustomTpEnable() {
    // ModManager_1.ModManager.AddKey("PreviousFile", "PageUp");
    // ModManager_1.ModManager.AddKey("NextFile", "PageDown");
    // ModManager_1.ModManager.AddKey("PreviousPos", "Up");
    // ModManager_1.ModManager.AddKey("NextPos", "Down");
    this.ShowCtpState();
  }

  static GetCurrPos() {}

  static CustomTpDisable() {
    ModManager_1.ModManager.RemoveKey("PreviousFile", "PageUp");
    ModManager_1.ModManager.RemoveKey("NextFile", "PageDown");
    ModManager_1.ModManager.RemoveKey("Previous", "Up");
    ModManager_1.ModManager.RemoveKey("Next", "Down");
  }
}
exports.ModCustomTp = ModCustomTp;
