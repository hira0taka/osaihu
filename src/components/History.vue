<template>
  <div id="history">
    <button @click="complete">清算</button>
      <button @click="delate">削除</button>
      <div v-for="payData in allDatas" :key="payData.id">{{payData.date}}hi</div>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, reactive } from "vue";
import { makeFirebaseURL } from '../const'
import { mapGetters,mapActions } from 'vuex'

export default {
  name: "History",
  setup() {
    const data = reactive({
      $store.state.payDatas
      // payData: [
      //   {
      //     date: null,
      //     money: null,
      //     memo: null,
      //     shareYou: null,
      //     sharePrt: null
      //   }
      // ]
    }),
    // return {
    //   data
    // }
    const getData = () => {
      data.$store.dispatch('fetchPay')
    },
    return{
      data,
      setId
    },
    const getPayData = async () => {
    // Pay.jsonのURLを生成
      const url = makeFirebaseURL('Pay')
      const payResult = await axios.get(url);
      // 現状(0115)、firebaseのPay.jsonに入っている3個目（２番）以降のデータがおかしくて、for文でエラーが出るので
      // slice()関数で1個目と２個目（0番と１番）を切り出しています
      console.log(payResult.data.slice(0,2))
      data.payData = payResult.data.slice(0,2);
    };

    onMounted(() => {
      getPayData();
    });
    return { data, getPayData };
  },
  methods: {
  mapActions(['fetchPay']),
},
  computed:mapGetters(['allDatas']),
  crested () {
    this.feathPay()
  }
</script>

<style>
.hst-box {
  margin-bottom: 20px;
}
</style>