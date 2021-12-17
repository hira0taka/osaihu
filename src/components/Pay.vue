<template>
  <div id="pay">
    <table>
      <tr>
        <th>日付</th>
        <td><flat-pickr v-model="date" class="form-control"></flat-pickr></td>
      </tr>
      <tr>
        <th>支払額</th>
        <td><input type="text" placeholder="0" class="form-control" />円</td>
      </tr>
      <tr>
        <th>メモ</th>
        <td>
          <textarea
            name="memo"
            placeholder="未入力"
            cols="30"
            rows="2"
            class="form-control"
          />
        </td>
      </tr>
      <tr>
        <th>支払分担</th>
        <td>You<input type="text" placeholder="0" class="form-control" />円</td>
        <td>Me<input type="text" placeholder="0" class="form-control" />円</td>
      </tr>
    </table>
    <div>
      <button @click="entry">登録</button>
    </div>
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
</style>