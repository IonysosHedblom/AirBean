import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '@/api/mock.js'
import { v4 as uuid } from 'uuid'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentOrder: {
      orderNum: null,
      items: [],
      totalPrice: 0,
      date: '',
    },
    menu: [],
    regUser: {
      user: {},
      userHistory: []
    },
   
  },
  mutations: {

    makeOrder(state) {
      state.regUser.userHistory.push(state.currentOrder.orderNum)
      state.regUser.userHistory.push(state.currentOrder.totalPrice)
      //Skriv efter action
    },

    getMenu(state, menuObj) {
      state.menu.push(...menuObj)

    },
    addToOrder(state, menuItem) {
      state.currentOrder.orderNum = uuid()
      let today = new Date()
      const DD = String(today.getDate()).padStart(2, '0')
      const MM = String(today.getMonth() + 1).padStart(2, '0')
      const YYYY = today.getFullYear()
      today = `${DD}/${MM}/${YYYY}`
      state.currentOrder.date = today
      if (state.currentOrder.items.includes(menuItem)) {
        menuItem.quantity++
      } else {
        menuItem.quantity = 1
        state.currentOrder.items.push(menuItem)
      }

    },
    totalPrice(state) {
      state.currentOrder.items.forEach(item => {
        state.currentOrder.totalPrice += item.price
      })
    },
    historyOrder(state, historyOrder){
      state.regUser.userHistory = historyOrder
    },

    regUser(state, userObj) {
      state.regUser.user = userObj
    }
  },
  actions: {
    async makeOrder({commit}) { //?
      // const orderId = await API.makeOrder()
      commit('makeOrder')

    },

    async getMenu({ commit }) {
      const menu = await API.fetchProducts()
      commit('getMenu', menu)
    },

    addToOrder(context, menuItem) {
      context.commit('addToOrder', menuItem)
      context.commit('totalPrice')
    },

    async historyOrder({commit}, historyOrder){
      const {userid, orderid} = historyOrder
      const history = await API.makeOrder(userid, orderid)
      commit('historyOrder', history)

    },

    async regUser({ commit }, userObj) {
      const { name, email } = userObj
      const user = await API.registerUser(name, email)
      commit('regUser', user)
    }


  },
  getters: {
    loadMenu: state => { return state.menu }

  }
})
