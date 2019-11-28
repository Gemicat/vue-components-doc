<template>
  <div id="app">
    <Header></Header>
    <div class="page-container page-component">
      <div class="page-component__nav">
        <div v-for="(route, routeIndex) in navs" :key="routeIndex">
          <div>{{route.name}}</div>
          <router-link v-for="(item, index) in route.children" :to="{name: item.name}" :key="index">{{item.name}}</router-link>
        </div>
      </div>
      <div class="page-component__content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/header'
export default {
  name: "app",
  components: {
    Header
  },
  data() {
    return {
      navs: []
    }
  },
  created() {
    this.navs = this.$router.options.routes
  }
};
</script>

<style scoped>
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
}

#app {
  width: 1000px;
  margin: 0 auto; 
}
</style>


<style lang="scss">
.hljs {
  font-size: 12px;
  line-height: 1.5;
}
.page-component {
  box-sizing: border-box;
  height: 100%;

  &.page-container {
    padding: 0;
  }

  .page-component__nav {
    width: 240px;
    position: fixed;
    top: 0;
    bottom: 0;
    margin-top: 80px;
    transition: padding-top 0.3s;

    > .el-scrollbar__wrap {
      height: 100%;
      overflow-x: auto;
    }

    &.is-extended {
      padding-top: 0;
    }
  }

  .side-nav {
    height: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-right: 0;

    & > ul {
      padding-bottom: 50px;
    }
  }

  .page-component__content {
    padding-left: 270px;
    padding-bottom: 100px;
    box-sizing: border-box;
  }

  .content {
    padding-top: 50px;

    > {
      h3 {
        margin: 55px 0 20px;
      }

      table {
        border-collapse: collapse;
        width: 100%;
        background-color: #fff;
        font-size: 14px;
        margin-bottom: 45px;
        line-height: 1.5em;

        strong {
          font-weight: normal;
        }

        td,
        th {
          border-bottom: 1px solid #dcdfe6;
          padding: 15px;
          max-width: 250px;
        }

        th {
          text-align: left;
          white-space: nowrap;
          color: #909399;
          font-weight: normal;
        }

        td {
          color: #606266;
        }

        th:first-child,
        td:first-child {
          padding-left: 10px;
        }
      }

      ul:not(.timeline) {
        margin: 10px 0;
        padding: 0 0 0 20px;
        font-size: 14px;
        color: #5e6d82;
        line-height: 2em;
      }
    }
  }
}
</style>
