<template>
  <div id="history">
    <button @click="complete">清算</button>
      <button @click="delate">削除</button>
      <div v-for="payData in allDatas" :key="payData.id">{{payData.date}}hi</div>
  </div>
</template>

<script>
// import axios from "axios";
import { useStore } from 'vuex';
import { reactive } from "vue";
// import { makeFirebaseURL } from '../const'
// import { mapGetters,mapActions } from 'vuex'

export default {
  name: "History",
  setup() {
    // compositionAPIで書くときはthisが使えないので、useStoreをインポートして使う
    const store = useStore();

    const data = reactive({
      payData:{}
    });

// PayDatasにcomputedを組み込む。更新した内容が反映されるようにする。
    const payDatas = store.state.payDatas;
    console.log(payDatas)

  return {
    data,
    payDatas
  }
  },
}
</script>

<style>
.hst-box {
  margin-bottom: 20px;
}
</style>