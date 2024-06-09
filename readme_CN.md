# wuwa-mod
Wuthering Waves pak mods

[![Discord](https://discordapp.com/api/guilds/1079432683760930823/widget.png?style=shield)](https://discord.gg/QYu59wctHT)
[![QQ群](https://i.postimg.cc/MGqtP1P8/image.png)](https://qm.qq.com/q/FVX6QpU5qi)

[View English Documentation](README.md)

---

## 如何使用

1. 将 mod 文件放入 `\Wuthering Waves\Wuthering Waves Game\Client\Content\Paks\~mod\` 目录下
   - 注: mods 目录和 mod-pro 目录的 mod 文件选择其一，mod-pro 为正在开发中的
2. 找到 `Wuthering Waves\Wuthering Waves Game\Client\Binaries\Win64\Client-Win64-Shipping.exe`
3. 使用命令行 (startupArguments) "-fileopenlog" 运行游戏
4. 按 Home 键换出菜单查看 mod 状态和对应热键
   - 注: 在关闭菜单后进行状态切换，只有 mod-pro 支持此功能

---

## 功能

| 功能编号 | 功能描述                        | 状态                             | 备注                              |
| -------- | ------------------------------- | -------------------------------- | --------------------------------- |
| 1        | 技能无冷却                      | ✔️                              |                                   |
| 2        | 自动拾取宝物                    | ⚠️                              | 注意某些任务会提前拾取箱子导致卡关 |
| 3        | 无视掉落伤害，无敌              | ✔️                              |                                   |
| 4        | 假 uid 视图                     | ✔️                              |                                   |
| 5        | 禁用反作弊                      | ✔️                              |     请勿关闭                      |
| 6        | 禁用虚化效果                    | ✔️                              |                                   |
| 7        | 禁用日志报告                    | ✔️                              |                                   |
| 8        | 倍功                            | ✔️                              |                                   |
| 9        | 增加交互范围（植物似乎无效）    | ⚠️                              | 进行中                            |
| 10       | 总是晴天                        | ⚠️                              | 夜晚仍会来临。只是天气，目前不在 modPro 中 |
| 11       | 杀戮光环                        | ✔️                              |                                   |
| 12       | 自动吸收                        | ⚠️                              |                                   |
| 13       | 跳过剧情                        | ⚠️                              | 还未加入modPro                    |
| 14       | 自定义传送                      | ❌                              | 开发中                            |

---

## 如何修改 pak

1. 使用 [Fmodel](https://github.com/4sval/FModel) 解包 pak
   - AESkey: `0xE0D4C0AA387A268B29C397E3C0CAD934522EFC96BE5526D6288EA26351CDACC9`
2. 查找并修改文件
3. 使用 ue4.26 打包
