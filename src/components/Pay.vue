<template>
  <div id="pay">
    <!-- <div class="form-group">
      <label>ID</label>
      <input type="text" v-model="data.id" class="form form-control" />
    </div> -->
    <div class="form-group">
      <label>日付</label>
      <flat-pickr v-model="data.date" class="form form-control" name="date" :config="flatOption"></flat-pickr>
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
import {Japanese} from 'flatpickr/dist/l10n/ja.js';
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
      data: [
        {
          id: null,
          date: null,
          money: null,
          memo: null,
          shareYou: null,
          sharePrt: null
        }
      ],
      flatOption:{
        locate: Japanese,
        enableTime: true,
        dateFormat: "Y-m-d H:i"
      }
    })

    const record = () => {
      if (data.money == 0) {
        console.log("no-money!")
      }

      // let add_url = url + '/' + data.id + '.json'
      // `文字${変数}`はテンプレートリテラル（stringの中に変数を組み込む）
      const add_url = `Pay/${data.id}`
      // Pay/id.jsonのurlを生成
      const url = makeFirebaseURL(add_url)
      // 確認
      console.log(url)
      let item = {
        'date': data.date,
        'money': data.money,
        'memo': data.memo,
        'You': data.shareYou,
        'Partner': data.sharePrt
      }
      axios.post(add_url, item).then(()=>{
          data.id = 0
          data.date = ""
          data.money = 0
          data.memo = ""
          data.shareYou = 0
          data.sharePrt = 0
      }) 
      // const putPayData = async () => {
      //   let putResult = await axios.post(add_url, {
      //     number: 0
      //     data.date = ""
      //     data.money = 0
      //     data.memo = ""
      //     data.shareYou = 0
      //     data.sharePrt = 0
      //   })
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