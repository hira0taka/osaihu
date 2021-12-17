<template>
  <div id="history">
    <table>
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
    </table>
    <button @click="complete">支払い完了</button>
  </div>
</template>

<script>
export default {
  name: "History",
  props: {
    post: Object,
  },
};
</script>

<style>
</style>