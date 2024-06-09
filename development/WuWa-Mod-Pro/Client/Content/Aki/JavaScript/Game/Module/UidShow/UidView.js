"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.UidView = void 0);
const UE = require("ue"),
  ModelManager_1 = require("../../Manager/ModelManager"),
  UiViewBase_1 = require("../../Ui/Base/UiViewBase"),
  ModManager_1 = require("../../Manager/ModManager"),
  LguiUtil_1 = require("../Util/LguiUtil");
class UidView extends UiViewBase_1.UiViewBase {
  OnRegisterComponent() {
    this.ComponentRegisterInfos = [[0, UE.UIText]];
  }
  OnStart() {

     ModManager_1.ModManager.AddKey("ShowMenu","Home");
     ModManager_1.ModManager.AddToggle("GodMode","F5");
     ModManager_1.ModManager.AddToggle("HitMultiplier","F6");
     ModManager_1.ModManager.AddToggle("AutoPickTreasure","F7"); 
     ModManager_1.ModManager.AddToggle("AutoAbsorb","F8"); 
     ModManager_1.ModManager.AddToggle("killAura","F9");     
     ModManager_1.ModManager.AddToggle("PerceptionRange","F10");
     ModManager_1.ModManager.AddToggle("NoCD","F11");
     ModManager_1.ModManager.AddToggle("PlayerSpeed","F12");

     //ModManager_1.ModManager.AddKey("MarkTp","t");//done
  //  ModManager_1.ModManager.AddToggle("Weather","Numpad6");//done
    // ModManager_1.ModManager.AddToggle("AntiDither","f8");//done
 // ModManager_1.ModManager.AddToggle("InfiniteStamina","f10");
     //ModManager_1.ModManager.AddToggle("MarkTp","t");//done
    const uidtext = ModManager_1.ModManager.Settings.Uid;
    

    LguiUtil_1.LguiUtil.SetLocalText(
      this.GetText(0),
      "FriendMyUid",
      uidtext
    );
    
  }
}
exports.UidView = UidView;
//# sourceMappingURL=UidView.js.map

