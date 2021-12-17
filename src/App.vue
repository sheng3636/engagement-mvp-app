<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="aaa">{{$t('loading')}}</div>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.aaa {
  width: 100%;
  height: 50px;
  background: chocolate;
}
</style>
