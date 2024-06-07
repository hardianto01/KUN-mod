"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.ModManager = void 0);
const puerts_1 = require("puerts"),
  UE = require("ue"),
  InputSettings_1 = require("../../InputSettings/InputSettings"),
  TeleportController_1 = require("../../Module/Teleport/TeleportController"),//传送
  CreatureController_1 = require("../../World/Controller/CreatureController"),//add
  ConfirmBoxController_1 = require("../../Module/ConfirmBox/ConfirmBoxController"),
  ConfirmBoxDefine_1 = require("../../Module/ConfirmBox/ConfirmBoxDefine"),
  ScrollingTipsController_1 = require("../../Module/ScrollingTips/ScrollingTipsController"),
  MapController_1 = require("../../Module/Map/Controller/MapController"),
  ModelManager_1 = require("../../Manager/ModelManager"),
  CharacterController_1 = require('../../NewWorld/Character/CharacterController'),
  WeatherController_1 = require("../../Module/Weather/WeatherController");//
  

  //Log_1 = require("../../Core/Common/Log"),
 // Protocol_1 = require("../../Core/Define/Net/Protocol");
class ModManager{
    //functions  // download link： https://github.com/Gktwo/wuwa-mod
    static Settings = {
      GodMode : true ,
      HitMultiplier : true,
      //FakeFreeStore : false,
      AutoPickTreasure : false,
      AntiDither : true,
      AutoAbsorb : false,
      InfiniteStamina : false,
      killAura : false,
      PerceptionRange : false,
      Weather : false,
      WeatherType : 1,
      MarkTp : true,
      CustomTp : false,
      playerSpeed :3,

      Uid : "QQ群:746634670 | Github:https://github.com/Gktwo/wuwa-mod | Discord:https://discord.gg/QYu59wctHT",

    };


    static AddToggle(desc,key){
      InputSettings_1.InputSettings.AddActionMapping(desc,key); 
    }
    static AddKey(desc,key){
      InputSettings_1.InputSettings.AddActionMapping(desc,key); 
    }

    static Toggle(func){   
      if (this.Settings.hasOwnProperty(func)) {
        this.Settings[func] = !this.Settings[func];
    }}

    static listenMod(func,key){
      if(InputSettings_1.InputSettings.IsInputKeyDown(key)===true)
        {
          this.Toggle(func);
          //this.TPtest();
          return true;
          
        }
        return false ;
    }
    static listenKey(desc,key){
      return InputSettings_1.InputSettings.IsInputKeyDown(key);
    }
    static SetUid(uid){
     //TODO

    }

    static TPtest()
    {    
      TeleportController_1.TeleportController.TeleportToPositionNoLoading(
        new UE.Vector(0, 0, 0),
        new UE.Rotator(0, 0, 0),
        "comment/message"
      );
    }
    static TpNoloadingTo(x,y,z)
    {
      TeleportController_1.TeleportController.TeleportToPositionNoLoading(
        new UE.Vector(x, y, z),
        new UE.Rotator(0, 0, 0),
        "comment/message"
      );
    }


    static MonsterBoom(entity,Delay){
      CreatureController_1.CreatureController.MonsterBoomRequest(entity,Delay)
    }

    static ChangWeather(weatherID){
      WeatherController_1.WeatherController.TestChangeWeather(weatherID)
      //1.sunny 2.Cloudy 3.ThunderRain 4.Snow 5.rain
    }

    static ShowConfirmBox(string,title){//封号那个窗口
      var newBox = new ConfirmBoxDefine_1.ConfirmBoxDataNew(50);
      newBox.SetTextArgs(string);
      newBox.SetTitle(title);
      ConfirmBoxController_1.ConfirmBoxController.ShowConfirmBoxNew(newBox);
    }

    static ShowTip(string){
      ScrollingTipsController_1.ScrollingTipsController.ShowTipsByText(string)
    }
//MENU
    // static getSettingName(value) {
    //     let keys = Object.keys(this.Settings);
    //     for(let i = 0; i < keys.length; i++) {
    //         if(this.Settings[keys[i]] === value) {
    //             return keys[i];
    //         }
    //     }
    //     return null;
    // }
    static FuncState(func,string){
      if(func)
        return string+" : ON |" ;
      else
        return string+" : OFF |" ;
    }

    static ShowMenu(){//封号那个窗口
      var newBox = new ConfirmBoxDefine_1.ConfirmBoxDataNew(50);
      var state = 
      this.FuncState(this.Settings.GodMode,"GodMode")+
      this.FuncState(this.Settings.HitMultiplier,"HitMultiplier")+
      this.FuncState(this.Settings.AutoPickTreasure,"AutoPickTreasure")+
      this.FuncState(this.Settings.AntiDither,"AntiDither")+
      this.FuncState(this.Settings.AutoAbsorb,"AutoAbsorb")+
      this.FuncState(this.Settings.killAura,"killAura")+
      this.FuncState(this.Settings.PerceptionRange,"PerceptionRange")+
      this.FuncState(this.Settings.MarkTp,"MarkTp")+
      this.FuncState(this.Settings.CustomTp,"CustomTp")+
      this.FuncState(this.Settings.InfiniteStamina,"InfiniteStamina")
      //this.FuncState(this.Settings.PerceptionRange)+


      newBox.SetTextArgs(state);
      newBox.SetTitle("KUNMODS STATE");
      ConfirmBoxController_1.ConfirmBoxController.ShowConfirmBoxNew(newBox);
    }
    static MarkTp(){
      var r = ModelManager_1.ModelManager.MapModel.GetCurTrackMark();
      var i = ModelManager_1.ModelManager.MapModel.GetMark(r[0], r[1]);
      var targetX = i.TrackTarget.X;
      var targetY = i.TrackTarget.Y;
      var v = MapController_1.MapController.GetMarkPosition(targetX, targetY);
      if(v.Z==0)
        v.Z = 300
      if(v.X==0&&v.Y==0)
        return;
      this.TpNoloadingTo(v.X * 100, v.Y * 100, v.Z * 100)

    }

    static SetPlayerSpeed(value)
    {
      CharacterController_1.CharacterController.SetTimeDilation(value)     
    }

    static CustomTp(){

    }




}
exports.ModManager = ModManager;
