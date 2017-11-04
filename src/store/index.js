import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import * as actions from './actions'
// import * as getters from './getters'
// import cart from './modules/cart'
// import products from './modules/products'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

// set up api endpoints
let CAP_API_ROOT = 'https://3hkaob4gkc.execute-api.us-east-1.amazonaws.com/prod/au-hackathon'
let ENDPOINTS = {
    accounts: '/accounts', //optional account_id
    customers: '/customers', //optional customer_id
    transactions: '/transactions', //required account_id
    rewards: '/rewards', //required account_id
    payments: '/payments', //required account_id
}
// set the axios root
axios.defaults.baseURL = CAP_API_ROOT
axios.defaults.headers.common['Content-Type'] = 'application/json';
// axios.interceptors.request.use(request => {
//   console.log('Starting Request', request)
//   return request
// })

let makeRequest = function (context, endpoint, account_id, state_name) {
    axios.post(ENDPOINTS[endpoint], JSON.stringify({'account_id': parseInt(account_id)})).then((response) => {
        if(!state_name) { state_name = endpoint } //override accounts to set single account
        context.commit('set_'+state_name, response.data[0])
    }, (err) => {
        console.log(err)
    })
}
export default new Vuex.Store({
    state: {
        accounts: [],
        account: {},
        customers: {},
        transactions: {},
        rewards: {},
        payments: {}
    },
    mutations: {
        set_accounts (state, accounts) {
          state.accounts = accounts
        },
        set_account (state, account) {
          state.account = account
        },
        set_customers (state, customers) {
          let tmp = Object.assign({}, state.customers)
          let customer = customers[0].customers[0]
          tmp[customer.customer_id] = customer
          state.customers = tmp
        },
        set_transactions (state, transactions) {
          state.transactions = transactions
        },
        set_rewards (state, rewards) {
          state.rewards = rewards
        },
        set_payments (state, payments) {
          state.payments = payments
        }
    },
    actions: {
        load_accounts (context) {
            axios.post(ENDPOINTS.accounts).then((response) => {
                context.commit('set_accounts', response.data)
            }, (err) => {
                console.log(err)
            })
        },
        load_account (context, account_id) {
            makeRequest(context, 'accounts', account_id, 'account')
        },
        load_customers (context, customer_id) {
            axios.post(ENDPOINTS.customers, JSON.stringify({'customer_id': parseInt(customer_id)})).then((response) => {
                context.commit('set_customers', response.data)
            }, (err) => {
                console.log(err)
            })
        },
        load_transactions (context, account_id) {
            makeRequest(context, 'transactions', account_id)
        },
        load_rewards (context, account_id) {
            makeRequest(context, 'rewards', account_id)
        },
        load_payments (context, account_id) {
            makeRequest(context, 'payments', account_id)
        }
    }
})
