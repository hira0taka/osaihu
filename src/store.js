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
  // mutationsをstateにデータをセット
  mutations: {
    setId: (state, { id }) => {
      state.id = id
    },
    setDate: (state, { date }) => {
      state.date = date
    },
    setMoney: (state, { money }) => {
      state.money = money
    },
    setMemo: (state, { memo }) => {
      state.memo = memo
    },
    setShareYou: (state, { shareYou }) => {
      state.shareYou = shareYou
    },
    setSharePrt: (state, { sharePrt }) => {
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
        commit('setId', Result)
        // commit('setId', Result)
        // commit('setmoney', Result)
        // commit('setMemo', Result)
        // commit('setShareYou', Result)
        // commit('setSharePrt', Result)
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    payDatas: (state) => {
      return state.payDatas
    }
  },

})