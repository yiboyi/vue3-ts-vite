src文件夹
api：存放http请求的接口
assets：存放一些静态资源，如icon、图片
components：存放通用组件
design：存放全局样式文件
enums：存放全局的ts字典
hooks：存放封装的自定义hook
layouts：存放布局方案
locales：存放国际化的语言资料
router：存放路由相关
settings：存放一些全局的设置
store：存放状态管理相关
utils：存放通用的工具类函数
views：存放项目的页面

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

  - `feat` 增加新功能
  - `fix` 修复问题/BUG
  - `style` 代码风格相关无影响运行结果的
  - `perf` 优化/性能提升
  - `refactor` 重构
  - `revert` 撤销修改
  - `test` 测试相关
  - `docs` 文档/注释
  - `chore` 依赖更新/脚手架配置修改等
  - `workflow` 工作流改进
  - `ci` 持续集成
  - `types` 类型定义文件更改
  - `wip` 开发中

-安装依赖

npm install

```

- 运行

```bash
npm run dev
```

- 打包

```bash
npm run build
```  