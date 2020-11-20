
# Button组件

常用的操作按钮。

### 基础用法

基础的按钮用法。

<demo-block>

::: slot source
<button-button1></button-button1>
:::

使用class属性来定义 Button 的样式。

::: slot highlight

```html
<div>
    <el-button class="zhfc-button primary">主要按钮</el-button>
    <el-button class="zhfc-button plain">次要按钮</el-button>
    <el-button class="zhfc-button danger">危险按钮</el-button>
    <el-button class="zhfc-button danger-plain">危险按钮有边框</el-button>
</div>
```


:::

</demo-block>


### 文字按钮

没有边框和背景色的按钮(有hover效果)

<demo-block>

::: slot source
 <el-button class="zhfc-button text">文字按钮</el-button>
 <el-button class="zhfc-button danger-text">文字按钮</el-button>
:::

使用type属性来定义 Button 的样式。

::: slot highlight

```html
<div>
    <el-button class="zhfc-button text">文字按钮</el-button>
    <el-button class="zhfc-button danger-text">文字按钮</el-button>
</div>
```
:::
</demo-block>

### 禁用状态


禁用状态

<demo-block>

::: slot source
<el-button class="zhfc-button primary" disabled>主要按钮</el-button>
<el-button class="zhfc-button plain" disabled>次要按钮</el-button>
<el-button class="zhfc-button danger" disabled>危险按钮</el-button>
<el-button class="zhfc-button danger-plain" disabled>危险按钮有边框</el-button>
<el-button class="zhfc-button text" disabled>文字按钮</el-button>
<el-button class="zhfc-button danger-text" disabled>文字按钮</el-button>
:::

使用type属性来定义 Button 的样式。

::: slot highlight

```html
<div>
    <el-button class="zhfc-button primary" disabled>主要按钮</el-button>
    <el-button class="zhfc-button plain" disabled>次要按钮</el-button>
    <el-button class="zhfc-button danger" disabled>危险按钮</el-button>
    <el-button class="zhfc-button danger-plain" disabled>危险按钮有边框</el-button>
    <el-button class="zhfc-button text" disabled>文字按钮</el-button>
    <el-button class="zhfc-button danger-text" disabled>文字按钮</el-button>
</div>
```
:::
</demo-block>
