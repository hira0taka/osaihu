<template>
  <div id="pay">
    <div class="form-group">
      <label>日付</label>
      <flat-pickr v-model="data.date" class="form form-control" name="date"></flat-pickr>
    </div>
    <div class="form-group">
      <label>支払額</label>
      <input
        type="text"
        v-model="data.money"
        placeholder="0"
        class="form form-control"
      >円
    </div>
    <div class="form-group">
      <label>メモ</label>
      <textarea
        v-model="data.memo"
        name="memo"
        placeholder="未入力"
        rows="2"
        class="form form-control"
      />
    </div>
    <div class="form-group">
      <label>支払分担</label>
      <br>
      <p class="role">じぶん</p>
      <input
        type="text"
        v-model="data.shareYou"
        placeholder="0"
        class="form form-control"
      >円
      <p class="role">あいて</p>
      <input
        type="text"
        v-model="data.sharePrt"
        placeholder="0"
        class="form form-control"
      />円
    </div>
    <button @click="record" class="btn btn-primary">記録する</button>
  </div>
</template>

<script>
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import axios from "axios";
import { reactive } from "vue";
import { makeFirebaseURL } from '../const'

export default {
  name: "Pay",
  components: {
    flatPickr,
  },
  setup() {
    const data = reactive({
      data: {
          date: null,
          money: null,
          memo: null,
          shareYou: null,
          sharePrt: null
        }
    })

    const record = () => {
      if (data.money == 0) {
        console.log("no-money!")
        return
      }
      // `文字${変数}`はテンプレートリテラル（stringの中に変数を組み込む）
      // const add_url = `Pay/${data.id}`
      const add_url = `Pay`
      // Pay/id.jsonのurlを生成
      const url = makeFirebaseURL(add_url)
      // 確認
      console.log(url)
      // firebaseに保存されるデータ＝item
      let item = {
        'date': data.date,
        'money': data.money,
        'memo': data.memo,
        'shareYou': data.shareYou,
        'sharePartner': data.sharePrt
      }
      axios.post(url, item).then(()=>{
          data.date = ""
          data.money = 0
          data.memo = ""
          data.shareYou = 0
          data.sharePrt = 0
      }) 
      }
      return {
        data,
        record
        }
  },
};
</script>

<style>
.form {
  text-align: right;
  width: 300px;
}
.form-group {
  display: flex;
}
</style>