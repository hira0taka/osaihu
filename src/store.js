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
  // valueはactionsのresult.dataのこと。
  mutations: {
    setData: (state, value) => {
      state.payDatas = value
    }
  },
  // actionsをmutationsにデータをコミット
  // axiosを利用してデータを取得
  actions: {
    async fetchPay({ commit }) {
      try {
        // Pay.jsonのURLを生成
        const url = makeFirebaseURL('Pay')
        const result = await axios.get(url)
        console.log(result.data)
        // Resultはfirebaseからとってきたデータ
        // commitでmutationのsetDataという関数に渡す
        commit('setData', result.data)
      } catch (error) {
        console.log(error)
      }
    }
  },
})
