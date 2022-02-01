<template>
  <div id="sum">
    <div class="sum-result">
<h2>+200000円</h2>
<p>コメント</p>
    </div>
    <div class="sum-box">
      <table>
        <tr>
          <th>支払合計</th>
          <td>{{  }}</td>
        </tr>
        <tr>
          <th>じぶんの支払合計</th>
          <td></td>
        </tr>
        <tr>
          <th>あいての支払合計</th>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { reactive } from "vue";

export default {
  name: "Sum",
  setup() {
    const store = useStore();

    const data = reactive({
      payDatas:{}
    })

    const getData = async () => {
      await store.dispatch("fetchPay")
      data.payDatas = store.getters.allDatas
    }
    getData()

  return {
    data,
    getData
  }
  }
};
</script>

<style>
</style>