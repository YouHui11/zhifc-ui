import Vue from 'vue';
import Element from 'element-ui'; // 引入elementUi，因为要用到elementui里的结构
import 'element-ui/lib/theme-chalk/index.css'

import hljs from 'highlight.js' //引入高亮js
import 'highlight.js/styles/googlecode.css' //引入高亮js样式文件


import ZhfcUI from 'zhfc-libs'
import 'zhfc-libs/dist/zhfc-libs.css'
// 写了一个高亮指令，可以去解析pre code里面的标签，添加高亮
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})
export default ({
  Vue,
  options, 
  router,
  siteData
}) => {
  Vue.use(Element);
  Vue.use(ZhfcUI) // 设置为全局组件
}
