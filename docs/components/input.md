# Input 输入框



通过鼠标或键盘输入字符

<demo-block>

::: slot source
<el-input class="zhfc-input demo-input_1" v-model="input1" placeholder="请输入内容"></el-input>
<el-input class="zhfc-input demo-input_1" v-model="input2" suffix-icon="zhfc-icon-search" placeholder="请输入内容"></el-input>
:::

新增class样式 **class="zhfc-input** 来修改 input 的样式。远程搜索输入框使用后缀图标 **suffix-icon="zhfc-icon-search"**

::: slot highlight

```html
<el-input class="zhfc-input" v-model="input1" placeholder="请输入内容"></el-input>
<el-input class="zhfc-input" v-model="input2" suffix-icon="zhfc-icon-search" placeholder="请输入内容"></el-input>


<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```

<script>

export default {
  data() {
    return {
      input1: '',
      input2: '',
    }
  }
}
</script>

<style>
    .demo-input_1 {
        width: 224px;
        margin-right: 10px;
    }
</style>
:::



</demo-block>
