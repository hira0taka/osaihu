<template>
<div id="bop">
<Sum />

<br>
<History />
 <!-- v-for="post in posts" v-bind:key="post.id" v-bind:post="post" -->
 <Detail />
</div>
</template>

<script>
import Sum from './Sum.vue'
import History from './History.vue'
import Detail from './Detail.vue'

export default {
  name: 'Bop',
  components: {
    Sum,
    History,
    Detail
  },
}
</script>

<style>

</style>