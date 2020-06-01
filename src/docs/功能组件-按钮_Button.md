### Hello1

:::demo
```html
<template>
  <div><mk></mk></div>
</template>

<script>
export default {
  components: {
    mk: () => import('./mk.vue')
  }
}
</script>
<style>
  body {
    background: red;
  }
</style>
```
:::


:::demo
```html
<template>
  <div><mk></mk></div>
</template>

<script>
export default {
  components: {
    mk: () => import('./mk.vue')
  }
}
</script>
<style>
  body {
    background: green;
  }
</style>
```
:::