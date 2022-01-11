<template>
  <div id="detail">
    
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, reactive } from "vue";

let url =
  "https://osaihu-3e519-default-rtdb.asia-southeast1.firebasedatabase.app/Pay.json";

export default {
  name: "Detail",
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