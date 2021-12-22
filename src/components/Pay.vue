<template>
  <div id="pay">
    <p>{{ data.number }}</p>
    <div class="form-group">
      <label>日付</label>
      <flat-pickr v-model="data.date" class="form form-control"></flat-pickr>
    </div>
    <div class="form-group">
      <label>支払額</label>
      <input
        type="text"
        v-model="data.money"
        placeholder="0"
        class="form form-control"
      />
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
      <br />
      <p class="role">You</p>
      <input
        type="text"
        v-model="data.shareYou"
        placeholder="0"
        class="form form-control"
      />
      <p class="role">Partner</p>
      <input
        type="text"
        v-model="data.sharePrt"
        placeholder="0"
        class="form form-control"
      />
    </div>
    <button @click="entry" class="btn btn-primary">登録</button>
  </div>
</template>

<script>
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import axios from "axios";
import { reactive } from "vue";

let url =
  "https://osaihu-3e519-default-rtdb.asia-southeast1.firebasedatabase.app/Pay.json";

export default {
  name: "Pay",
  components: {
    flatPickr,
  },
  setup() {
    const data = reactive({
      number: 0,
      date: "",
      money: 0,
      memo: "",
      shareYou: 0,
      sharePrt: 0,
    });

    const entry = () => {
      let countNum = number++;
      if (data.money == 0) {
        console.log("no-money!");
        return;
      }
      let add_url = url + "/" + data.number + ".json";
      let item = {
        date: data.date,
        money: data.money,
        memo: data.memo,
        You: data.shareYou,
        Partner: data.sharePrt,
      };
      const putPayData = async () => {
        let putResult = await axios.put(add_url,item) {
          data.number: 0
      data.date = ""
      data.money = 0
      data.memo = ""
      data.shareYou = 0
      data.sharePrt = 0
        }
      };
    };
  },
};
</script>

<style>
.form {
  text-align: right;
  width: 300px;
}
</style>