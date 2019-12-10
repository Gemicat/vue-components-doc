import Vue from 'vue'
import Router from 'vue-router'
import hljs from "highlight.js";
import Blank from './components/blank'

const context = require.context('./', true, /\.md$/)
const routes = []
const routeMap = {
  '其他': []
}
context.keys().map(k => {
  const fileName = k.match(/\/([^/]+)\.md/)[1]
  // 如果存在中划线，则前一部分为分组，否则进入默认分组
  if (fileName.includes('-')) {
    const fileNameSplit = fileName.split('-')
    routeMap[fileNameSplit[0]] = routeMap[fileNameSplit[0]] || []
    routeMap[fileNameSplit[0]].push({
      path: `${fileNameSplit[1]}`,
      name: fileName,
      component: context(k).default
    })
  } else {
    routeMap['其他'].push({
      path: `${fileName}`,
      name: fileName,
      component: context(k).default
    })
  }
})

Object.keys(routeMap).forEach(k => {
  if (routeMap[k].length) {
    routes.push({
      name: k,
      path: `/${k}`,
      component: Blank,
      children: routeMap[k]
    })
  }
})

Vue.use(Router)
const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  try {
    !to.name ? next({name: routes[0].children[0].name}) : next()
  } catch(e) {
    next()
  }
})

router.afterEach(() => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll("pre code:not(.hljs)");
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  })
})

export default router