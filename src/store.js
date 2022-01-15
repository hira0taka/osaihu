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

  // axiosを利用してデータを取得
  actions: {
    async fetchPay({ commit }) {
      try {
        // Pay.jsonのURLを生成
        const url = makeFirebaseURL('Pay')
        const Result = await axios.$get(url)
        commit('setData', Result)
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    payDatas: (state) => {
      return state.payDatas
      // id: (state) => state.id,
      // date: (state) => state.date,
      // money: (state) => state.money,
      // memo: (state) => state.memo,
      // shareYou: (state) => state.shareYou,
      // sharePrt: (state) => state.sharePrt
    }
  },

  // actionsをmutationsにデータをコミット

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
    },
  }
})