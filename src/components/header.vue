<template>
  <div class="headerWrapper">
    <header class="header">
      <div class="container">
        <div class="logo">
          <img src="../assets/logo.png">
          <span>Vue.js</span>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.headerWrapper {
  width: 1000px;
  height: 80px;
  position: fixed;
  top: 0;
}

.header {
  height: 80px;
  background-color: #fff;
  color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  line-height: 80px;
  z-index: 100;
  position: relative;
}

.container {
  height: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #dcdfe6;
}
.logo {
  font-size: 1.5em;
  color: #273849;
}

.logo img {
  vertical-align: middle;
  margin-right: 6px;
  width: 40px;
  height: 40px;
}
</style>