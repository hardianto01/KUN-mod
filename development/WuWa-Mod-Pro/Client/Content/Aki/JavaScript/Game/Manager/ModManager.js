"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.ModManager = void 0);
const puerts_1 = require("puerts"),//一个格子跳到game下
  UE = require("ue"),
  Info_1 = require("../../Core/Common/Info"),
  Log_1 = require("../../Core/Common/Log"),
  Protocol_1 = require("../../Core/Define/Net/Protocol"),
  InputSettings_1 = require("../InputSettings/InputSettings"),
  InputController_1 = require("../Input/InputController"),
  TeleportController_1 = require("../Module/Teleport/TeleportController"),//传送
  CreatureController_1 = require("../World/Controller/CreatureController"),//add
  ConfirmBoxController_1 = require("../Module/ConfirmBox/ConfirmBoxController"),
  ConfirmBoxDefine_1 = require("../Module/ConfirmBox/ConfirmBoxDefine"),
  ScrollingTipsController_1 = require("../Module/ScrollingTips/ScrollingTipsController"),
  MapController_1 = require("../Module/Map/Controller/MapController"),
  ModelManager_1 = require("../Manager/ModelManager"),
  CharacterController_1 = require("..//NewWorld/Character/CharacterController"),
  UidView_1 = require("../Module/UidShow/UidView"),
  LguiUtil_1 = require("../Module/Util/LguiUtil"),
  WeatherController_1 = require("../Module/Weather/WeatherController"),
  WorldDebugModel_1 = require("../World/Model/WorldDebugModel");//
  
class ModManager{
    //functions  // download link： https://github.com/Gktwo/wuwa-mod
    static Settings = {
      GodMode : true ,
      HitMultiplier : false,
      AutoPickTreasure : false,
      AntiDither : false,
      AutoAbsorb : false,
      NoCD : false,
      InfiniteStamina : false,
      killAura : false,
      PerceptionRange : false,
      Weather : false,
      WeatherType : 1,
      MarkTp : false,
      CustomTp : false,
      playerSpeedValue :3,
      PlayerSpeed :false,
      ShowMenu:false,


      Uid : "QQ群:746634670 | Github:https://github.com/Gktwo/wuwa-mod | Discord:https://discord.gg/QYu59wctHT",

    };
    // OnStart() { cant use 
    //   this.AddKey("ShowMenu","k");
    //   this.AddToggle("GodMode","p");
    // }
    // OnTick(){/cant use
    //       //add my code
    // if(this.listenKey("ShowMenu","k"))
    //   {
    //     this.ShowMenu();
    //   }//done

    //   this.listenMod('GodMode',"p");//done
    //   //ModManager_1.ModManager.listenMod('HitMultiplier',"6");//done    
    // //  ModManager_1.ModManager.listenMod('AutoPickTreasure',"Numpad2");//done
    // //  //ModManager_1.ModManager.listenMod('AntiDither',"f4");//done
    // //  ModManager_1.ModManager.listenMod('AutoAbsorb',"Numpad3");//done
    // //  //ModManager_1.ModManager.listenMod('InfiniteStamina',"f7");
    // //  ModManager_1.ModManager.listenMod('killAura',"Numpad4");//done
    // // ModManager_1.ModManager.listenMod('PerceptionRange',"Numpad5");
    // //  if(ModManager_1.ModManager.listenMod('Weather',"Numpad6")){
    // //   ModManager_1.ModManager.ChangWeather(ModManager_1.ModManager.Settings.WeatherType)
    // //  }
    //  //ModManager_1.ModManager.listenKey('PlayerSpeed',"Numpad7");
    // //  if(ModManager_1.ModManager.listenKey("MarkTp","t")){
    // //   ModManager_1.ModManager.MarkTp();
    // //  }//done
    //  //ModManager_1.ModManager.listenMod('CustomTp',"Numpad7");
    //  //ModManager_1.ModManager.listenKey('Previous',"PageUp");
    //  //ModManager_1.ModManager.listenKey('Next',"PageDown");
    // }

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
      if(InputController_1.InputController.IsMyKeyUp(key))
        {
          
          if (this.Settings.hasOwnProperty(func)) {
            this.Settings[func] = !this.Settings[func];
            this.ShowTip("Toggle");
                          
          }
          return true;  
        }
        return false ;
    }
    static listenKey(desc,key){
      //this.ShowTip("Toggle");
      
      return InputController_1.InputController.IsMyKeyUp(key);

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

    // static SetUidView(string){
    //   //UidView_1.UidView.setlo
    //   LguiUtil_1.LguiUtil.SetLocalText(
    //     this.GetText(0),
    //     "FriendMyUid",
    //     string
    //   );

    // }

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
      this.FuncState(this.Settings.GodMode,"GodMode F5")+
      this.FuncState(this.Settings.HitMultiplier,"HitMultiplier F6")+
      this.FuncState(this.Settings.AutoPickTreasure,"AutoPickTreasure F7")+
      //this.FuncState(this.Settings.AntiDither,"AntiDither")+
      this.FuncState(this.Settings.AutoAbsorb,"AutoAbsorb F8" )+
      this.FuncState(this.Settings.killAura,"killAura F9")+
      this.FuncState(this.Settings.PerceptionRange,"PerceptionRange F10")+
      this.FuncState(this.Settings.NoCD,"NoCD F11" )+
      this.FuncState(this.Settings.PlayerSpeed,"PlayerSpeed F12" )+
      "DisableAntiCheat : ON " ;
      //this.FuncState(this.Settings.NoCD,"NoCD")
      //this.FuncState(this.Settings.MarkTp,"MarkTp")+
      //this.FuncState(this.Settings.CustomTp,"CustomTp")+
      //this.FuncState(this.Settings.InfiniteStamina,"InfiniteStamina")



      newBox.SetTextArgs(state);
      newBox.SetTitle("KunMods State(Home)");
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
    static GetEntityList(){
      return  ModelManager_1.ModelManager.CreatureModel.GetAllEntities()
    }
    //example
    // static SetTimeDilation(t) {
    //   var e = ModelManager_1.ModelManager.CreatureModel;
    //   for (const r of e.GetAllEntities()) r.IsInit && r.Entity.SetTimeDilation(t);
    //   for (const a of e.DelayRemoveContainer.GetAllEntities())
    //     a.IsInit && a.Entity.SetTimeDilation(t);
    // }
    static SpawnEntity(){

    }

    static SetPlayerSpeed(value)
    {
      CharacterController_1.CharacterController.SetTimeDilation(value)     
    }
    //自定义传送

    static CustomTp(){
      this.AddKey("PreviousFile","PageUp");
      this.AddKey("NextFile","PageDown");
      this.AddKey("Previous","Up");
      this.AddKey("Next","Down");


    }




}
exports.ModManager = ModManager;
