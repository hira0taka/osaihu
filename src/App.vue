<template>
  <div id="app">
    <div class="btn-box">
      <router-link to="/pay" class="btn btn-primary mx-2">支払い</router-link>
      <router-link to="/bop" class="btn btn-primary mx-2">履歴</router-link>
      <router-link to="/setting" class="btn btn-primary mx-2">設定</router-link>
    </div>
    <br>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
</style>