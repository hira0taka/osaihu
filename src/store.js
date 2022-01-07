import Vuex from 'vuex'
import axios from "axios"

let url =
  "https://osaihu-3e519-default-rtdb.asia-southeast1.firebasedatabase.app/Pay.json"

// axiosを利用してデータを取得
export const actions = {
  async fetchPay({ commit, state }) {
    try {
      const Result = await $axios.$get(url)
      commit('setData', Result)
    } catch (error) {
      console.log(error)
    }
  }
}

// actionsをmutationsにデータをコミット
export const state = () => ({
  payData: [],
  date: null,
  money: null,
  memo: null,
  shareYou: null,
  sharePrt: null
})

// mutationsをstateにデータをセット
export const mutations = {
  setId(state, {id}) {
    state.id = id
  },
  setDate(state, {date}) {
    state.date = date
  },
  setMoney(state, {money}) {
    state.money = money
  },
  setMemo(state, {memo}) {
    state.memo = memo
  },
  setShareYou(state, {shareYou}) {
    state.shareYou = shareYou
  },
  setSharePrt(state, {sharePrt}) {
    state.sharePrt = sharePrt
  },
}

export const getters = {
  id: (state) => state.id,
  date: (state) => state.date,
  money: (state) => state.money,
  memo: (state) => state.memo,
  shareYou: (state) => state.shareYou,
  sharePrt: (state) => state.sharePrt
}