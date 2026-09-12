(function () {
  "use strict";

  window.MERGE_GAME_CONFIG = {
    id: "xdu-merge",
    assetBase: "assets/badges/",
    spawnLevelCount: 5,

    ui: {
      title: "合成西电",
      description: "高校校徽合成小游戏"
    },

    // 等级按软科2026中国大学排名从低到高排列，最终合成西安电子科技大学（全国第39名）。
    levels: [
      { radius: 13, image: "whut.webp" },
      { radius: 16, image: "ccnu.webp" },
      { radius: 20, image: "jiangnan.webp" },
      { radius: 25, image: "bupt.webp" },
      { radius: 31, image: "swjtu.webp" },
      { radius: 39, image: "nenu.webp" },
      { radius: 49, image: "suda.webp" },
      { radius: 61, image: "hzau.webp" },
      { radius: 75, image: "zzu.webp" },
      { radius: 91, image: "hrbeu.svg" },
      { radius: 109, image: "bjtu.webp" },
      { radius: 129, image: "xdu.svg" }
    ]
  };
}());
