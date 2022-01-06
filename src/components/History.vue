<template>
  <div id="history">
    <div>
      <ul>
       
      </ul>
    </div>
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

let url =
  "https://osaihu-3e519-default-rtdb.asia-southeast1.firebasedatabase.app/Pay.json";

export default {
  name: "History",
  setup() {
    const data = reactive({
      payData: "",
    });

    const getPayData = async () => {
      let payResult = await axios.get(url);
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