import Vue from 'vue'
import Router from 'vue-router'
import hljs from "highlight.js";

const context = require.context('./', true, /\.md$/)
const routes = context.keys().map(k => {
  const fileName = k.match(/\/([^/]+)\.md/)[1]
  return {
    path: `/${fileName}`,
    name: fileName,
    component: context(k).default
  }
})

Vue.use(Router)
const router = new Router({routes})

router.afterEach(() => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll("pre code:not(.hljs)");
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  })
})

export default router