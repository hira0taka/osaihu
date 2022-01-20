<template>
  <div id="detail">
   <p>detail</p>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, reactive } from "vue";
// 定数を保存するファイル(const.js)からurlを生成する関数を呼び出し
import { makeFirebaseURL } from '../const'

export default {
  name: "Detail",
  setup() {
    const data = reactive({
      payData: "",
    });

    const getPayData = async () => {
      // Pay.jsonのURLを生成
      const url = makeFirebaseURL('Pay')
      // 確認
      console.log(url)
      const payResult = await axios.get(url);
      data.payData = payResult.data;
    };

    onMounted(() => {
      getPayData();
    });
    return { data, getPayData };
  },
  props: {
    post: Object,
  },
};
</script>

<style>
.hst-box {
margin-bottom: 20px;
}
</style>