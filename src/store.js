import { createStore } form 'vuex'

export const store = createStore ({
    state() {
        return {
      id: 0,
      date: "",
      money: 0,
      memo: "",
      shareYou: 0,
      sharePrt: 0,
        }
    }
})