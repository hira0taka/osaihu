<template>
  <div id="history">
    <div class="hst-box" v-for="payData in data.payDatas" :key="payData.id">
      <button @click="complete">清算</button>
      <button @click="delate">削除</button>
      <!-- divではなくコンポーネントにすると後々のデータ管理が楽 -->
      <p >{{payData.date}} </p>
      <p>{{payData.money}}円</p>
      </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { reactive } from "vue";

export default {
  name: "History",
  setup() {
    // compositionAPIで書くときはthisが使えないので、useStoreをインポートして使う
    const store = useStore()

    const data = reactive({
      payDatas:{}
    })

// PayDatasにcomputedを組み込む。更新した内容が反映されるようにする。
    // const payDatas = store.state.payDatas;
    

    const getData = async () => {
      await store.dispatch("fetchPay")
      data.payDatas = store.getters.allDatas
      console.log(data.payDatas)
    }
    getData()

  return {
    data,
    getData
  }
  }
}
</script>

<style>
.hst-box {
  display: flex;
  justify-content: space-between;
}
</style>