<template>
  <div id="sum">
    <div class="sum-result">
      <h2>{{ calcTotal }}円</h2>
      <p>コメント</p>
    </div>
    <div class="sum-detail">
      <table>
        <tr>
          <th>支払合計</th>
          <td>{{ sum }}</td>
        </tr>
        <tr>
          <th>じぶんの負担額</th>
          <td>{{ sumYou }}</td>
        </tr>
        <tr>
          <th>あいての負担額</th>
          <td>{{ sumPrt }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { reactive, computed } from "vue";

export default {
  name: "Sum",
  setup() {
    const store = useStore();

    const data = reactive({
      payDatas: [],
    });

    const getData = async () => {
      await store.dispatch("fetchPay");
      data.payDatas = store.getters.allDatas;
    };
    getData();
    console.log(store.state.payDatas)

    // 合計値を算出
    // 配列の中の連想配列をfor文で取り出し、追加していく参照

    // filterで計算に必要な要素だけをとりだし、処理する？？
    // アールエフェクトのcomputed参照
    const calc = computed(() => {
      const calcMoney = store.state.payDatas.money;
      // for (let i = 0; i < Object.keys(payDatas).length; i++) {
        for(list in payDatas) {
          calcMoney += payDatas[list].money;
          // console.log(calcMoney);
          // console.log(payDatas[list]);
      }
    });

    return {
      data,
      getData,
      calc,
    };
  },
};
</script>

<style>
</style>