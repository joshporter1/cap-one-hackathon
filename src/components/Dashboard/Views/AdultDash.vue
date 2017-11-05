<template>
    <div class="row">
      <div class="col-lg-4 col-md-5">
        <user-card></user-card>
        <detail-card></detail-card>
      </div>
      <div class="col-lg-8 col-md-7">
          <h3 class="title" style="margin-top: 0">Family Status</h3>
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
