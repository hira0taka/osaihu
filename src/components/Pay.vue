<template>
  <div id="pay">
    <div class="form-group">
        <label>日付</label>
        <flat-pickr v-model="date" class="form form-control"></flat-pickr>
    </div>
    <div class="form-group">
        <label>支払額</label>
        <input type="text" placeholder="0" class="form form-control" />
    </div>
    <div class="form-group">
        <label>メモ</label>
        <textarea
            name="memo"
            placeholder="未入力"
            rows="2"
            class="form form-control"
          />
    </div>
    <div class="form-group">
        <label>支払分担</label>
        <br>
        <p class="role">You</p>
        <input type="text" placeholder="0" class="form form-control" />
        <p class="role">Me</p>
        <input type="text" placeholder="0" class="form form-control" />
    </div>
    <button @click="entry">登録</button>
  </div>
</template>

<script>
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

export default {
  name: "Pay",
  data() {
    return {
      date: null,
    };
  },
  components: {
    flatPickr,
  },
};
</script>

<style>
.form {
  text-align: right;
  width: 300px;
}
</style>