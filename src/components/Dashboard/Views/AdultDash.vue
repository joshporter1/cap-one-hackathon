<template>
    <div class="row">
      <div class="col-lg-4 col-md-5">
        <user-card>

        </user-card>
        <detail-card>
          <div slot="api_details">
            <li class="list-group-item" style='border: 0px;'>
              <div class="row" >
                <div class="col-xs-8">
                  <b>Utilization:</b>
                </div>
                <div class="col-xs-4">
                  {{((account_details.balance / account_details.credit_limit) * 100).toFixed(2)}}%
                </div>
              </div>
            </li>
            <li class="list-group-item" style='border: 0px;'>
              <div class="row" >
                <div class="col-xs-8">
                  <b>Total Rewards Earned:</b>
                </div>
                <div class="col-xs-4">
                  ${{(account_details.total_rewards_earned).toFixed(2)}}
                </div>
              </div>
            </li>
            <li class="list-group-item" style='border: 0px;'>
              <div class="row" >
                <div class="col-xs-8">
                  <b>Balance:</b>
                </div>
                <div class="col-xs-4">
                  ${{(account_details.balance).toFixed(2)}}
                </div>
              </div>
            </li>
            <li class="list-group-item" style='border: 0px;'>
              <div class="row" >
                <div class="col-xs-8">
                  <b>Credit Limit:</b>
                </div>
                <div class="col-xs-4">
                  ${{(account_details.credit_limit).toFixed(2)}}
                </div>
              </div>
            </li>
          </div>
        </detail-card>
      </div>
      <div class="col-lg-8 col-md-7">
        <div class='card'>
          <div class='header'>
            <h3 class="title">Family Status</h3>
          </div>
          <br>
          <div class='content'>
            <div class='row'>
              <div  class='col-md-3' v-for="customer in account_details.authorized_users">
                <pet-card :account_details="account_details" :customer_id="customer.customer_id" :credit_limit="account_details.credit_limit" :customer_details="account_details.users[customer.customer_id]"></pet-card>
              </div>
            </div>
          </div>
          <br><br>
        </div>
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
    data(){
      return {
        preferencesChart: {
          data: {
            labels: ['62%', '32%', '6%'],
            series: [62, 32, 6]
          },
          options: {}
        }
      }
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
        account_id: function() {
          return this.$route.params.account_id
        },
        customer_id: function() {
          return this.$route.params.customer_id
        },
        pretty_account_details: function () {
          return JSON.stringify(this.account_details, null, 2);
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
