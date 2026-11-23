[English](README_EN.md) · 简体中文 · [日本語](README_JA.md) · [한국어](README_KO.md) · [Türkçe](README_TR.md)

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



## 📖 使用说明

这个库是给 Scripting App 用的脚本合集，一共 37 个脚本、8 个分类：壁纸、监控工具、小组件、生活打卡、效率、插件商店、工具、AI。大部分是桌面小组件，装好就能在 iOS 桌面上看信息；也有在 App 里打开用的工具（比如 GitHub 管理、图标整理）。

**需要什么：**

- 一台 iPhone 或 iPad，装好 [Scripting App](https://apps.apple.com/app/id6479691128)
- 部分脚本要你自己的账号或服务才能用，比如 qBitHelper 要连你自己的下载器、SGCC 要登录网上国网账号、CF Usage 要填 Cloudflare 账号信息——打开脚本按提示填就行

**怎么用（一步一步来）：**

1. 在上面列表里挑一个喜欢的脚本，点进它的文件夹
2. 把整个文件夹下载下来（点文件夹里的文件一个一个下，或者把整个库 Clone / 下载 ZIP 再取出来）
3. 打开 Scripting App，把下载好的文件夹导入进去
4. 想放桌面的话：长按 iOS 桌面空白处 → 点左上角 `+` → 找到 Scripting → 选你要的小组件尺寸 → 选刚导入的脚本
5. 有些脚本第一次打开要填参数（比如服务器地址、城市、账号），在 Scripting App 里打开脚本按提示填好就行

> 只有 AI Usage 是 `.scripting` 包（里面图片太多，19 MB），下载后直接导入，不用解包。

**常见问题：**

- **导入后小组件不显示？** 先在 Scripting App 里打开脚本看能不能正常跑；跑不起来多半是参数没填，或者要联网的脚本当时网络不通。
- **图片一直加载不出来？** 壁纸小组件的图片来自网上图库，网络不好会加载慢，多等一会儿或点刷新再试一次。
- **只想要一个脚本，不想下整个库？** 点进 `scripts/` 里对应文件夹，只下那一个文件夹就行。
- **这些脚本是谁写的？** 除壁纸小组件是基于原作者版本改过的，其余都是各原作者的原版，版权归原作者所有，本库只做收集。

## 脚本列表

### 壁纸

| 脚本 | 说明 | 版本 |
|---|---|---|
| [壁纸小组件](scripts/WallpaperWidget) | ACG 二次元壁纸小组件：随机展示高质量 ACG 图片，支持自定义刷新间隔、可指定图片 ID、iOS 小组件显示 | v1.2.6 |

### 监控工具

| 脚本 | 说明 | 版本 |
|---|---|---|
| [qBitHelper](scripts/qBitHelper) | qBittorrent / Transmission 远程监控：上传下载速度、历史数据图表、种子数量，三种小组件尺寸 | v1.0.6 |
| [智慧交通](scripts/智慧交通) | 城市交通状况监控：实时拥堵指数、拥堵道路排行、早晚高峰预测，支持全国多城市切换 | v1.0.0 |
| [Surge Metrics](scripts/Surge%20Metrics) | Surge iOS 运行指标小组件：累计流量、内存、DNS 缓存、接口流量排行 | v1.1.1 |
| [流媒體解鎖檢測](scripts/流媒體解鎖檢測) | 流媒体解锁检测小组件：测节点能不能看 Netflix、Disney+、YouTube、ChatGPT 等 | v1.1.0 |
| [Loon Panel](scripts/Loon%20Panel) | Loon 面板小组件：机场流量、节点测速、流媒体解锁，桌面直接切节点换模式 | v1.0.9 |

### 小组件

| 脚本 | 说明 | 版本 |
|---|---|---|
| [Calendar](scripts/Calendar) | 日历小组件：公历农历、节假日，三种尺寸 | v1.3.0 |
| [Weibo](scripts/Weibo) | 微博热搜小组件 | v1.1.0 |
| [SGCC](scripts/SGCC) | 网上国网小组件：电费余额、电量、阶梯进度与用电柱状图 | v1.0.1 |
| [App Store Region](scripts/App%20Store%20Region) | App Store 地区管理小组件，三种尺寸 | v1.0.0 |
| [万年历](scripts/万年历) | 万年历小组件：公历农历、节假日，三种尺寸 | v1.0.0 |
| [Colorful Clouds](scripts/Colorful%20Clouds) | 彩云天气小组件与天气通知 | — |

### 生活打卡

| 脚本 | 说明 | 版本 |
|---|---|---|
| [Live In Earnest](scripts/Live%20In%20Earnest) | 每日打卡，证明你还活着 | v1.0.0 |
| [Itemory](scripts/Itemory) | 个人物品档案：记购入、维修、转手收支，算持有天数与日均成本，支持订单截图识图录入 | v1.0.0 |

### 效率

| 脚本 | 说明 | 版本 |
|---|---|---|
| [RSS](scripts/RSS) | RSS 阅读器，支持 AI 摘要 | v1.0.0 |

### 插件商店

| 脚本 | 说明 | 版本 |
|---|---|---|
| [Scripting Store](scripts/Scripting%20Store) | Scripting 插件商店客户端：浏览、搜索、安装 Scripting 插件 | v2.0.2 |

### 工具

| 脚本 | 说明 | 版本 |
|---|---|---|
| [GitHub Toolkit](scripts/Github%20Toolkit) | GitHub 全能工具：仓库/Gist/Action 浏览编辑、PR 差异、收藏、Fork 同步 | v2.0 |
| [Github Repo](scripts/Github%20Repo) | GitHub 仓库管理器：仓库浏览、收藏、Fork 同步、建 PR | v3.0 |
| [GitHub Stars](scripts/GitHub%20Stars) | GitHub Stars 与仓库管理：按 Star 时间浏览、自定义列表、Fork 上游检查、贡献热力图 | v1.1.1 |
| [GitHub 規則添加](scripts/GitHub%20規則添加) | 给 GitHub 仓库快速加规则文件的小工具 | v2.0.0 |
| [Icon Library](scripts/Icon%20Library) | GitHub 公开图标库管理：多图标库、图标导入整理、订阅与导出 PNG | v1.1.2 |
| [IconShelf](scripts/IconShelf) | 图标集订阅管理：代理 App、Emby 等场景的图标集，分组、搜索、更新、备份恢复 | v0.4.0 |
| [Launch](scripts/Launch) | 多小组件启动器：文件夹自适应，一个入口管多个小组件配置 | v1.15.2 |
| [覆写模块聚合](scripts/覆写模块聚合) | Surge / Loon / Egern / Stash / Shadowrocket 的模块、插件与覆写聚合目录，可搜索、收藏、一键导入 | v1.1.0 |
| [CF Usage](scripts/CF%20Usage) | 查看 Cloudflare 账号与单个 Worker 的用量，接近额度时提醒 | v1.0.0 |
| [GitHub Secrets](scripts/GitHub%20Secrets) | 管理 GitHub 仓库 Secrets，支持加密存储与多仓库共享 | v1.0.0 |
| [Storefront](scripts/Storefront) | 管理多区 Apple 账号的余额、订阅与 TestFlight 名额 | v1.5.0 |
| [Remove Background](scripts/Remove%20Background) | 图片一键去背景（抠图） | v0.1.0 |
| [Cloudflare Panel](scripts/Cloudflare%20Panel) | Cloudflare 面板：账号用量、Worker 状态，带桌面小组件 | — |
| [App多区价格查询](scripts/App多区价格查询) | 查 App 在各区 App Store 的价格 | v1.0.0 |
| [Iconset Helper](scripts/Iconset%20Helper) | 图标集助手：整理与上传图标集 | v1.0.0 |
| [Gist](scripts/Gist) | GitHub Gist 管理：新建、编辑、查看 | v1.0.0 |
| [Video to Live Photo](scripts/Video%20to%20Live%20Photo) | 选视频、选封面帧和时长，保存为 Live Photo | v1.0.0 |
| [Border Beam](scripts/Border%20Beam) | 边框流光动效演示（Metal 着色器），可作 UI 组件参考 | v1.0.0 |

### AI

| 脚本 | 说明 | 版本 |
|---|---|---|
| [AI Usage](scripts/AI%20Usage) | 多平台 AI 用量聚合看板：Codex、Grok、Claude、Cursor、Kimi 等 11 个平台多账号用量、桌面小组件 | v1.9.0 |
| [寒霜注入工具 2](scripts/寒霜注入工具%202) | 本地 AI 代理网关：iOS 原生 TCP 真流式推流、后台保活、多引擎容灾 | v1.2.4 |
| [Codex Panel](scripts/Codex%20Panel) | Codex 用量面板小组件 | — |

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

## qBitHelper

远程监控你的 qBittorrent 或 Transmission 下载器状态，随时掌握下载进度。

**主要功能：**

- 显示上传/下载速度
- 历史数据图表展示
- 种子数量统计
- 同时支持 qBittorrent 和 Transmission
- 支持小组件三种尺寸（小/中/大）
- App Intent 快速切换客户端
- 每个客户端独立保存配置

## 智慧交通

实时查看城市交通状况的桌面小组件，让你出行前了解路况。

**主要功能：**

- 实时显示城市交通拥堵指数
- 拥堵等级可视化（畅通/缓行/拥堵/严重拥堵）
- 拥堵道路排行榜展示
- 早晚高峰拥堵预测
- 支持全国多城市切换

**数据来源：** 百度交通指数

## Live In Earnest

每日打卡，证明你还活着。

## Scripting Store

一个便捷的插件商店客户端，可在 App 内直接浏览、搜索和安装 Scripting 插件。

**主要功能：**

- 浏览插件列表
- 搜索插件（按名称/描述）
- 查看插件详情
- 一键安装插件
- 支持按时间/热度排序
- 发布自己的插件
- 个人中心管理

> **声明：** 本脚本仅做 App 适配，免访问网站。感谢原作者 [gallery.scripting.fun](https://gallery.scripting.fun) 提供网页服务。所有组件均收集自互联网，版权归原作者所有。

## 安装方法

1. 在 iOS 设备上安装 [Scripting App](https://apps.apple.com/app/id6479691128)
2. 下载对应脚本文件夹（例如 `scripts/WallpaperWidget`）
3. 导入到 Scripting App 中
4. 根据需要配置脚本参数

## 目录结构

```
scripts/
├── WallpaperWidget/          # ACG 壁纸小组件
├── qBitHelper/               # qBittorrent/Transmission 远程监控
├── 智慧交通/                  # 城市交通状况监控
├── Surge Metrics/            # Surge 运行指标小组件
├── 流媒體解鎖檢測/            # 流媒体解锁检测
├── Loon Panel/               # Loon 面板小组件
├── Calendar/                 # 日历小组件
├── Weibo/                    # 微博热搜小组件
├── SGCC/                     # 网上国网小组件
├── App Store Region/         # App Store 地区管理
├── 万年历/                    # 万年历小组件
├── Colorful Clouds/          # 彩云天气小组件
├── Live In Earnest/          # 每日打卡
├── Itemory/                  # 个人物品档案
├── RSS/                      # RSS 阅读器
├── Scripting Store/          # 插件商店
├── Github Toolkit/           # GitHub 全能工具
├── Github Repo/              # GitHub 仓库管理器
├── GitHub Stars/             # GitHub Stars 与仓库管理
├── GitHub 規則添加/           # GitHub 仓库规则添加
├── Icon Library/             # GitHub 图标库管理
├── IconShelf/                # 图标集订阅管理
├── Launch/                   # 多小组件启动器
├── 覆写模块聚合/              # 代理模块与覆写聚合目录
├── CF Usage/                 # Cloudflare 用量查看
├── GitHub Secrets/           # GitHub Secrets 管理
├── Storefront/               # 多区 Apple 账号管理
├── Remove Background/        # 图片去背景
├── Cloudflare Panel/         # Cloudflare 面板
├── App多区价格查询/           # App 各区价格查询
├── Iconset Helper/           # 图标集助手
├── Gist/                     # GitHub Gist 管理
├── Video to Live Photo/      # 视频转 Live Photo
├── Border Beam/              # 边框流光动效演示
├── AI Usage/                 # 多平台 AI 用量看板（.scripting 包）
├── 寒霜注入工具 2/            # 本地 AI 代理网关
└── Codex Panel/              # Codex 用量面板
```

每个脚本文件夹里都是完整源码（script.json、index.tsx、widget.tsx、utils 等），下载后直接导入 Scripting App 就能用。AI Usage 因含大量图片资源（19 MB），以原版 .scripting 包形式收录，下载后直接导入即可。

## 说明

- 除壁纸小组件是基于 MolTau9527 的 v1.0.3 修改的 v1.2.6 外，其余脚本均为各原作者原版收录，版权归原作者所有；本库仅作收集。
- 图片来源为 ACG 图库（loliapi.com），版权归原作者所有。

![Footer](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=120&section=footer&text=Scripting%20%E8%84%9A%E6%9C%AC&fontSize=24&fontColor=ffffff)


