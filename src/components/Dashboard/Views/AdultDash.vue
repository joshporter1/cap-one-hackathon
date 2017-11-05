<template>
    <div class="row">
      <div class="col-lg-4 col-md-5">
        <user-card v-if="account_details.users !== undefined" :user="account_details.users[account_details.primary_user]" :card_type="account_details.card_type">
        </user-card>
        <detail-card>
          <div slot="api_details">
            <li class="list-group-item" style='border: 0px;'>
              <div class="row" >
                <div class="col-xs-8">
                  <b>Utilization:</b>
                </div>
                <div class="col-xs-4">
                  {{utilization}}%
                </div>
              </div>
            </li>
            <li class="list-group-item" style='border: 0px;'>
              <div class="row" >
                <div class="col-xs-8">
                  <b>Balance:</b>
                </div>
                <div class="col-xs-4">
                  ${{balance}}
                </div>
              </div>
            </li>
            <li class="list-group-item" style='border: 0px;'>
              <div class="row" >
                <div class="col-xs-8">
                  <b>Credit Limit:</b>
                </div>
                <div class="col-xs-4">
                  ${{limit}}
                </div>
              </div>
            </li>
            <li class="list-group-item" style='border: 0px;'>
              <div class="row" >
                <div class="col-xs-8">
                  <b>Remaining:</b>
                </div>
                <div class="col-xs-4">
                  ${{remaining}}
                </div>
              </div>
            </li>
            <li class="list-group-item" style='border: 0px;'>
              <div class="row" >
                <div class="col-xs-8">
                  <b>Total Rewards Earned:</b>
                </div>
                <div class="col-xs-4">
                  ${{rewards}}
                </div>
              </div>
            </li>
          </div>
        </detail-card>
      </div>
      <div class="col-lg-8 col-md-7">
        <h3 class="title" style="margin-top: 0">Family Tracker</h3>
        <div class='content'>
          <div class='row'>
            <div  class='col-lg-6 col-md-6 col-sm-6' v-for="customer in account_details.authorized_users">
              <pet-card :account_details="account_details" :customer_id="customer.customer_id" :credit_limit="account_details.credit_limit" :customer_details="account_details.users[customer.customer_id]"></pet-card>
            </div>
          </div>
          <chart-card
            :users="account_details.users">
          </chart-card>
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
