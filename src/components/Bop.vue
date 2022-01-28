<template>
<div id="bop">
<div class="sum">
<Sum />
</div>
<br>
 <div class="rireki">
 <History />
 <Detail />
 </div>
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
.rireki {
  display:flex;
  justify-content: space-around;
}
</style>