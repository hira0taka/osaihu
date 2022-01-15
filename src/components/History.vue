<template>
  <div id="history">
    <ul>
      <li v-for="payData in $store.getters.payDatas" :key="payData.id"></li>
    </ul>
    <div class="hst-box" v-for="(item, key) in data.payData" :key="key">
      <table>
        <tr>
          <th>日付</th>
          <td>{{ item.date }}</td>
        </tr>
        <tr>
          <th>支払額</th>
          <td>{{ item.money }}円</td>
        </tr>
        <tr>
          <th>メモ</th>
          <td>{{ item.memo }}</td>
        </tr>
        <tr>
          <th>支払分担</th>
          <td>You</td>
          <td>{{ item.shareYou }}円</td>
          <td>Partner</td>
          <td>{{ item.sharePrt }}円</td>
        </tr>
      </table>
      <button @click="complete">支払い完了</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, reactive } from "vue";
import { makeFirebaseURL } from '../const'

export default {
  name: "History",
  setup() {
    const data = reactive({
      payData: "",
    });

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