<template>
    <div class="row">
      <div class="col-lg-4 col-md-5">
        <user-card v-if="account_details.users !== undefined" :user="account_details.users[account_details.primary_user]" :card_type="account_details.card_type">
        </user-card>
        <detail-card>
          <div slot="api_details">
            <li class="list-group-item" style='border: 0px;'>
              <div class="row" >
                <div class="col-xs-6">
                  <b>Remaining:</b>
                </div>
                <div class="col-xs-6">
                  ${{remaining}}
                </div>
              </div>
            </li>
            <li class="list-group-item" style='border: 0px;'>
              <div class="row" >
                <div class="col-xs-6">
                  <b>Utilization:</b>
                </div>
                <div class="col-xs-6">
                  {{utilization}}%
                </div>
              </div>
            </li>
            <li class="list-group-item" style='border: 0px;'>
              <div class="row" >
                <div class="col-xs-6">
                  <b>Total Rewards Earned:</b>
                </div>
                <div class="col-xs-6">
                  ${{rewards}}
                </div>
              </div>
            </li>
            <li class="list-group-item" style='border: 0px;'>
              <div class="row" >
                <div class="col-xs-6">
                  <b>Balance:</b>
                </div>
                <div class="col-xs-6">
                  ${{balance}}
                </div>
              </div>
            </li>
            <li class="list-group-item" style='border: 0px;'>
              <div class="row" >
                <div class="col-xs-6">
                  <b>Credit Limit:</b>
                </div>
                <div class="col-xs-6">
                  ${{limit}}
                </div>
              </div>
            </li>
            <li class="list-group-item" style='border: 0px;'>
              <div class="row" >
                <div class="col-xs-6">
                  <b>Card:</b>
                </div>
                <div class="col-xs-6">
                  {{account_details.card_type}}
                </div>
              </div>
            </li>
          </div>
        </detail-card>
        <chart-card
          :users="account_details.users">
        </chart-card>
      </div>
      <div class="col-lg-8 col-md-7">
        <h3 class="title" style="margin-top: 0">Family Tracker</h3>
        <div class='content'>
          <div class='row'>
            <div class='col-lg-6 col-md-6 col-sm-6' v-for="customer in account_details.authorized_users">
              <pet-card :account_details="account_details" :customer_id="customer.customer_id" :credit_limit="account_details.credit_limit" :customer_details="account_details.users[customer.customer_id]"></pet-card>
            </div>
          </div>

          <div class='row'>
            <div class="col-md-12">
                <h3 class="title">Family Transactions</h3>
              <div class="card">
                <div class="content table-responsive table-full-width">
                  <table class="table table-striped">
                      <thead>
                        <th>Date</th>
                        <th>Merchant</th>
                        <th>Rewards Earned</th>
                        <th>Amount</th>
                      </thead>
                      <tbody>
                        <tr v-if="flattenTransactions" v-for="transaction in flattenTransactions">
                          <td>{{transaction.month}} {{transaction.day}}, {{transaction.year}}</td>
                          <td>{{transaction.merchant_name}}</td>
                          <td>${{transaction.rewards_earned.toFixed(2)}}</td>
                          <td>${{transaction.amount.toFixed(2)}}</td>
                        </tr>
                      </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br><br>
      </div>
    </div>
</template>
<script>
  import { mapState, mapActions, mapGetters } from 'vuex'
  import UserCard from './UserProfile/UserCard.vue'
  import MembersCard from './UserProfile/MembersCard.vue'
  import ChartCard from 'components/UIComponents/Cards/ChartCard.vue'
  import DetailCard from 'components/UIComponents/Cards/DetailCard.vue'
  import PetCard from 'components/UIComponents/Cards/PetCard.vue'

  export default {
    data() {
      return {
      }
    },
    components: {
      UserCard,
      MembersCard,
      ChartCard,
      DetailCard,
      PetCard
    },
    methods: mapActions([
      'load_account_details'
    ]),
    mounted () {
      if(this.account_id){
        this.load_account_details(this.account_id)
      }
    },
    computed: Object.assign({}, mapGetters(['account_details']),
      {
        utilization: function() {
          if(this.account_details.balance !== undefined)
            return ((this.account_details.balance / this.account_details.credit_limit) * 100).toFixed(2)
        },
        rewards: function() {
          if(this.account_details.total_rewards_earned !== undefined)
            return (this.account_details.total_rewards_earned).toFixed(2)
        },
        balance: function() {
          if(this.account_details.balance !== undefined)
            return (this.account_details.balance).toFixed(2)
        },
        limit: function() {
          if(this.account_details.credit_limit !== undefined)
            return (this.account_details.credit_limit).toFixed(2)
        },
        remaining: function() {
          return this.limit - this.balance
        },
        account_id: function() {
          return this.$route.params.account_id
        },
        customer_id: function() {
          return this.$route.params.customer_id
        },
        flattenTransactions: function() {
          var transactions = [];
          var account_transactions = this.account_details.transactions;
          Object.keys(account_transactions).forEach(function(key) {
            account_transactions[key].forEach(function(transaction) {
              transactions.push(transaction);
            });
          });
          return Array.reverse(transactions);
        }
      }
    ),
    watch: {
      account_id () {
        this.load_account_details(this.account_id)
      }
    }
  }

</script>
<style>

</style>
