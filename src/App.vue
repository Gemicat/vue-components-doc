<template>
  <div id="app">
    <markdown></markdown>
  </div>
</template>

<script>
import markdown from './markdown.md'
import hljs from 'highlight.js'

export default {
  name: 'app',
  components: {
    markdown
  },
  mounted() {
    const blocks = document.querySelectorAll('pre code:not(.hljs)');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  }
}
</script>

<style lang="scss" scoped>
body, html {
 margin:0;
 padding:0;
 height:100%;
 font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
 font-weight:400;
 -webkit-font-smoothing:antialiased;
 -webkit-tap-highlight-color:transparent
}
</style>
