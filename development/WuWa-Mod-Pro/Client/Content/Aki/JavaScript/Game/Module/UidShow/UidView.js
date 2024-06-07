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
    //const uidtext ="QQ群:746634670 | https://github.com/Gktwo/wuwa-mod"

    //  ModManager_1.ModManager.AddToggle("GodMode","Numpad0");//done
    //  ModManager_1.ModManager.AddToggle("HitMultiplier","Numpad1");//done
    //  ModManager_1.ModManager.AddToggle("AutoPickTreasure","Numpad2");//done
    //  //ModManager_1.ModManager.AddToggle("AntiDither","f4");//done
    //  ModManager_1.ModManager.AddToggle("AutoAbsorb","Numpad3");//done
    //  //ModManager_1.ModManager.AddToggle("InfiniteStamina","f6");
    //  ModManager_1.ModManager.AddToggle("killAura","Numpad4");//done
    //  ModManager_1.ModManager.AddToggle("PerceptionRange","Numpad5");//done
    //  ModManager_1.ModManager.AddToggle("Weather","Numpad6");//done
     ModManager_1.ModManager.AddKey("ShowMenu","k");//done
     ModManager_1.ModManager.AddKey("MarkTp","t");//done


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

