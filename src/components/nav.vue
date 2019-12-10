<template>
  <div class="page-component__nav">
    <div class="side-nav">
      <ul>
        <li v-for="(route, routeIndex) in navs" :key="routeIndex" class="nav-item">
          <a>{{route.name | formatText}}</a>
          <div class="nav-group">
            <ul>
              <li v-for="(item, index) in route.children" :key="index" class="nav-item">
                <router-link :to="{name: item.name}" active-class="active">{{item.path | formatText}}</router-link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navs: []
    };
  },
  filters: {
    formatText(text) {
      return text.replace(/_/g, ' ')
    }
  },
  created() {
    const { routes } = this.$router.options;
    this.navs = routes;
  }
};
</script>

<style scoped>
.page-component__nav {
  width: 240px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin-top: 160px;
  transition: padding-top 0.3s;
}

.side-nav {
  width: 100%;
  box-sizing: border-box;
  padding-right: 30px;
  transition: opacity 0.3s;
}
.side-nav li {
  list-style: none;
}
.side-nav ul {
  padding: 0;
  margin: 0;
  overflow: hidden;
}
.side-nav > ul > .nav-item > a {
  margin-top: 15px;
}
.side-nav > ul > .nav-item:nth-child(-n + 4) > a {
  margin-top: 0;
}
.side-nav .nav-item a {
  font-size: 16px;
  color: #333;
  line-height: 40px;
  height: 40px;
  margin: 0;
  padding: 0;
  text-decoration: none;
  display: block;
  position: relative;
  transition: 0.15s ease-out;
  font-weight: bold;
}
.side-nav .nav-item a.active {
  color: #409eff;
}
.side-nav .nav-item .nav-item a {
  display: block;
  height: 40px;
  color: #444;
  line-height: 40px;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: normal;
}
.side-nav .nav-item .nav-item a:hover,
.side-nav .nav-item .nav-item a.active {
  color: #409eff;
}
</style>
