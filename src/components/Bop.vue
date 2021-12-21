<template>
<div id="bop">
<Sum />
<br>
<Pay />
<br>
<History />
 <!-- v-for="post in posts" v-bind:key="post.id" v-bind:post="post" -->
</div>
</template>

<script>
import Pay from './Pay.vue'
import Sum from './Sum.vue'
import History from './History.vue'

export default {
  name: 'Bop',
  components: {
    Pay,
    Sum,
    History,
  },
  data() {
  return {
    // posts: [
    //   {id:0, day:"2021/05/21", money:500, memo:"ランチ", sharing:"aki", share_money:500},
    //   {id:1, day:"2021/05/21", money:1200, memo:"ディナー", sharing:"aki", share_money:500},
    //   {id:1, day:"2021/05/21", money:1200, memo:"ごはん", sharing:"aki", share_money:500},
    // ]
  }
}
}
</script>

<style>

</style>