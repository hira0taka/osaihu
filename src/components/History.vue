<template>
  <div id="history">
    <table v-for="(item, key) in data.payData" :key="key">
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
        <td>{{ item.sharing }}</td>
        <td>{{ item.share_money }}円</td>
      </tr>
    </table>
    <br>
    <button @click="complete">支払い完了</button>
    <!-- <table>
      <tr>
        <th>日付</th>
        <td>{{ post.day }}</td>
      </tr>
      <tr>
        <th>支払額</th>
        <td>{{ post.money }}円</td>
      </tr>
      <tr>
        <th>メモ</th>
        <td>{{ post.memo }}</td>
      </tr>
      <tr>
        <th>支払分担</th>
        <td>{{ post.sharing }}</td>
        <td>{{ post.share_money }}円</td>
      </tr>
    </table> -->
  </div>
</template>

<script>
import axios from 'axios'
import { onMounted, reactive } from 'vue'

let url = "https://osaihu-3e519-default-rtdb.asia-southeast1.firebasedatabase.app/Pay.json"

export default {
  name: "History",
  setup() {
    const data = reactive ({
      payData: ''
    })

    const getPayData = async()=> {
      let payResult = await axios.get(url)
      data.payData = payResult.data
    }

    onMounted(()=> {
      getPayData()
    })
    return { data, getPayData }
  },
  props: {
    post: Object,
  }
};
</script>

<style>
</style>