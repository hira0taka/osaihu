import Vuex from 'vuex'
import axios from "axios"

let url =
  "https://osaihu-3e519-default-rtdb.asia-southeast1.firebasedatabase.app/Pay.json"

  // axiosを利用してデータを取得
export const actions = {
  async getPayData({ commit,state }) {
    try {
      const Result = await axios.get(url)
      commit('setData', Result)
    }catch (error) {
      console.log(error)
    }
  }
}

// actionsをmutationsにデータをコミット
export const state = () => ({
  data: null
})

// mutationsをstateにデータをセット
export const mutations = {
  setData: (state, value) => {
    state.Data = value
  }
}

// export const store = createStore ({
//     state() {
//         return {
//           payData:[
//             id: 0,
//             date: "",
//             money: 0,
//             memo: "",
//             shareYou: 0,
//             sharePrt: 0
//           ]
//         }
//     }
// })