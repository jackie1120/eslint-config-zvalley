## Install

第一步：安装依赖包
```
npm install -D eslint-config-zvalley
```
第二步：在eslint配置文件extends中引入(默认)配置
```
"extends": [
  "zvalley"
]
```

## Rule reference
| rule | description | eslint:recommended | zvalley:essential（默认） | zvalley:recommended |  |
| --- | --- | --- | --- | --- | --- |
| eqeqeq | Require the use of `===` and `!==` | off | error |  |  |
| no-unused-vars | Disallow unused variables | error | ["error", { "argsIgnorePattern": "^_" }] |  |  |
| quotes | Enforce the consistent use of either backticks, double, or single quotes | off | ["error", "double", { "avoidEscape": true }] |  |  |
| semi | Require or disallow semicolons instead of ASI | off | ["error", "always"] |  |  |