<template>
<div id="bop">
<Sum />

<br>
<History />
 <!-- v-for="post in posts" v-bind:key="post.id" v-bind:post="post" -->
</div>
</template>

<script>
import Sum from './Sum.vue'
import History from './History.vue'

export default {
  name: 'Bop',
  components: {
    Sum,
    History,
  },
}
</script>

<style>

</style>