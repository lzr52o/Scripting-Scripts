![Scripting 脚本](header.png)

# Scripting 脚本

Scripting App 脚本合集。把喜欢的脚本文件夹下载下来，导入 Scripting App 就能用。
<div align="center">

![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1000&color=0366D6&center=true&vCenter=true&width=600&lines=%E6%AC%A2%E8%BF%8E%E6%9D%A5%E5%88%B0%20Scripting%20%E8%84%9A%E6%9C%AC;%E5%A3%81%E7%BA%B8%E5%B0%8F%E7%BB%84%E4%BB%B6%20%C2%B7%20%E6%B6%B2%E6%80%81%E7%8E%BB%E7%92%83;9%20%E4%B8%AA%E4%B8%BB%E9%A2%98%20%C2%B7%20%E6%B5%81%E5%85%89%E8%83%8C%E6%99%AF)

![访问量](https://komarev.com/ghpvc/?username=lzr52o&color=0e75b6&style=flat)

</div>

## 📊 数据统计

<div align="center">

<img src="https://github-readme-stats.vercel.app/api?username=lzr52o&show_icons=true&theme=radical" width="46%" /><img src="https://github-readme-stats.vercel.app/api/top-langs/?username=lzr52o&layout=compact&theme=radical" width="50%" />

<img src="https://github-readme-streak-stats.herokuapp.com/?user=lzr52o&theme=radical" width="96%" />

<img src="https://github-readme-activity-graph.vercel.app/graph?username=lzr52o&theme=github-compact" width="100%" />

</div>

## 🛠️ 技术栈

<div align="center">

![Skill Icons](https://skillicons.dev/icons?i=js,py,git,github,cloudflare,apple,vscode&theme=dark)

</div>

## 😄 每日一句

<div align="center">

<img src="https://www.dmoe.cc/random.php" width="160" height="140" alt="二次元随机图" /><img src="https://daily-sentence.lzr52o.workers.dev/sentence" width="440" height="140" alt="每日一句" /><img src="https://www.dmoe.cc/random.php?v=2" width="160" height="140" alt="二次元随机图" />

</div>

## 🎮 贡献图

<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://contrib-rotate.lzr52o.workers.dev/rotate?theme=dark" />
  <source media="(prefers-color-scheme: light)" srcset="https://contrib-rotate.lzr52o.workers.dev/rotate?theme=light" />
  <img alt="贡献图" src="https://contrib-rotate.lzr52o.workers.dev/rotate?theme=light" />
</picture>

</div>



## 脚本列表

| 脚本 | 说明 | 版本 |
|---|---|---|
| [壁纸小组件](scripts/WallpaperWidget) | ACG 二次元壁纸小组件：随机展示高质量 ACG 图片，支持自定义刷新间隔、可指定图片 ID、iOS 小组件显示 | v1.2.1 |

## 壁纸小组件

一个精美的 ACG（动漫）壁纸小组件，让你的 iOS 桌面充满二次元风格。

**主要功能：**

- 随机展示高质量 ACG 图片
- 支持自定义刷新间隔
- 可指定特定图片 ID
- 支持 iOS 小组件显示
- 9 个界面主题（少女粉／清新绿／天空蓝／梦幻紫／活力橙／热情红／薄荷青／阳光黄／彩虹流光），彩虹主题颜色每 1.5 秒流动一次
- iOS 26 液态玻璃界面，背景是跟主题色走的流光渐变

**本版改动（基于原作者 v1.0.3）：**

- 修复图片加载失败：接口返回的死链（404）自动换下一张，最多连试 5 张；主源全挂后走备用直链图源（dmoe.cc、t.mwm.moe），按固定顺序试
- 加载超时 8 秒 → 30 秒，主源失败重试 3 次
- 新增 9 个界面主题与流光渐变背景，设置页改成 iOS 26 原生液态玻璃

原作者：[MolTau9527](https://github.com/MolTau9527)（[Scripting-Tools](https://github.com/MolTau9527/Scripting-Tools)，MIT 协议）

## 安装方法

1. 在 iOS 设备上安装 [Scripting App](https://apps.apple.com/app/id6740200543)
2. 下载对应脚本文件夹（例如 `scripts/WallpaperWidget`）
3. 导入到 Scripting App 中
4. 根据需要配置脚本参数

## 目录结构

```
scripts/
└── WallpaperWidget/          # ACG 壁纸小组件
    ├── script.json           # 脚本配置
    ├── index.tsx             # 主入口
    ├── widget.tsx            # 小组件实现
    └── utils/                # 工具模块
        ├── api.ts            # API 接口
        ├── imageCache.ts     # 图片缓存
        ├── storage.ts        # 存储管理
        ├── theme.ts          # 主题色板
        ├── types.ts          # 类型定义
        ├── utils.ts          # 工具函数
        ├── SettingsPage.tsx  # 设置页面
        └── PreviewHome.tsx   # 预览页面
```

## 说明

- 壁纸小组件基于 MolTau9527 的 v1.0.3 修改，版权归原作者所有；本库仅作修改版收集。
- 图片来源为 ACG 图库（loliapi.com），版权归原作者所有。

![Footer](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=120&section=footer&text=Scripting%20%E8%84%9A%E6%9C%AC&fontSize=24&fontColor=ffffff)
