<template>
  <div id="app">
    <div>
      <router-view></router-view>
    </div>
    <br />
    <div class="btn-box">
      <router-link to="/" class="btn btn-primary mx-2">履歴</router-link>
      <router-link to="/setting" class="btn btn-primary mx-2">設定</router-link>
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