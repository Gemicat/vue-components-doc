<template>
  <div id="app">
    <Header></Header>
    <div class="page-container page-component">
      <Nav></Nav>
      <div class="page-component__content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "./components/nav";
import Header from "./components/header";
export default {
  name: "app",
  components: {
    Header,
    Nav
  }
};
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  background-color: #fff !important;
}

a {
  color: #50bfff;
}

#app {
  width: 1000px;
  margin: 0 auto;
}

.page-container {
  margin-top: 80px;
}

.page-container h2 {
  font-size: 28px;
  color: #1f2d3d;
  margin: 0;
}

.page-container h3 {
  font-size: 22px;
}

.page-container h2,
.page-container h3,
.page-container h4,
.page-container h5 {
  font-weight: 400;
  color: #1f2f3d;
}

.page-container h2:hover a,
.page-container h3:hover a,
.page-container h4:hover a,
.page-container h5:hover a {
  opacity: 0.4;
}

.page-container h2 a,
.page-container h3 a,
.page-container h4 a,
.page-container h5 a {
  float: left;
  margin-left: -20px;
  opacity: 0;
  cursor: pointer;
}

.page-container h2 a:hover,
.page-container h3 a:hover,
.page-container h4 a:hover,
.page-container h5 a:hover {
  opacity: 0.4;
}

.page-container p {
  font-size: 14px;
  color: #5e6d82;
  line-height: 1.5em;
}

.page-container .tip {
  padding: 8px 16px;
  background-color: #ecf8ff;
  border-radius: 4px;
  border-left: 5px solid #50bfff;
  margin: 20px 0;
}

.page-container .tip code {
  background-color: rgba(255, 255, 255, 0.7);
  color: #445368;
}

.page-container .warning {
  padding: 8px 16px;
  background-color: #fff6f7;
  border-radius: 4px;
  border-left: 5px solid #fe6c6f;
  margin: 20px 0;
}

.page-container .warning code {
  background-color: rgba(255, 255, 255, 0.7);
  color: #445368;
}

.page-component {
  box-sizing: border-box;
  height: 100%;
}
.page-component .page-component__content {
  padding-left: 270px;
  padding-bottom: 100px;
  box-sizing: border-box;
}
.page-component .content {
  padding-top: 50px;
}
.page-component .content > h3 {
  margin: 55px 0 20px;
}
.page-component .content > p {
  margin: 14px 0;
}
.page-component .content > table {
  border-collapse: collapse;
  width: 100%;
  background-color: #fff;
  font-size: 14px;
  margin-bottom: 45px;
  line-height: 1.5em;
}
.page-component .content > table strong {
  font-weight: normal;
}
.page-component .content > table td,
.page-component .content > table th {
  border-bottom: 1px solid #dcdfe6;
  padding: 15px;
  max-width: 250px;
}
.page-component .content > table th {
  text-align: left;
  white-space: nowrap;
  color: #909399;
  font-weight: normal;
}
.page-component .content > table td {
  color: #606266;
}
.page-component .content > table th:first-child,
.page-component .content > table td:first-child {
  padding-left: 10px;
}
.page-component .content > ul:not(.timeline) {
  margin: 10px 0;
  padding: 0 0 0 20px;
  font-size: 14px;
  color: #5e6d82;
  line-height: 2em;
}
</style>