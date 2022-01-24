import { createStore } from 'vuex'
import axios from "axios"
import { makeFirebaseURL } from './const'


export const store = createStore({
  state() {
    return {
      payDatas: [
        {
          date: null,
          money: null,
          memo: null,
          shareYou: null,
          sharePrt: null
        }
      ]
    }
  },
  getters: {
    allDatas: (state) => {
      return state.payDatas
    }
  },
  // mutationsをstateにデータをセット
  mutations: {
    setData: (state, { id, date, money,memo, shareYou, sharePrt }) => {
      state.id = id,
      state.date = date,
      state.money = money,
      state.memo = memo,
      state.shareYou = shareYou,
      state.sharePrt = sharePrt
    }
  },
  // actionsをmutationsにデータをコミット
  // axiosを利用してデータを取得
  // fetchPayの引数にcommit
  actions: {
    async fetchPay({ commit }) {
      try {
        // Pay.jsonのURLを生成
        const url = makeFirebaseURL('Pay')
        const Result = await axios.$get(url)
        // Resultはfirebaseからとってきたデータ
        // commitでmutationのsetDataという関数に渡す
        commit('setData', Result.data)
      } catch (error) {
        console.log(error)
      }
    }
  },
})

export default {
  state,
  getters,
  actions,
  mutations
}