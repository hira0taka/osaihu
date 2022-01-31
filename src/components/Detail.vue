<template>
  <div id="detail">
   <div class="dtl-box" v-for="payData in data.payDatas" :key="payData.id">
      <!-- divではなくコンポーネントにすると後々のデータ管理が楽 -->
      <div class="res-group">
      <label>日付</label>
      <p>{{payData.date}} </p>
      </div>
      <div class="res-group">
      <label>支払額</label>
      <p>{{payData.money}}円</p>
      </div>
      <div class="res-group">
      <label>メモ</label>
      <p>{{payData.memo}}</p>
      </div>
      <div class="roleBox">
      <label>支払分担</label>
      <div class="res-group">
      <label>じぶん</label>
      <p>{{payData.shareYou}}円</p>
      </div>
      <div class="res-group">
      <label>あなた</label>
      <p>{{payData.sharePrt}}円</p>
      </div>
      </div>
      </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { reactive } from "vue";

export default {
  name: "Detail",
  setup() {
    const store = useStore();
    const data = reactive({
      payData: "",
    });

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
   },
};
</script>

<style>
.res-group {
  display: flex;
}
</style>