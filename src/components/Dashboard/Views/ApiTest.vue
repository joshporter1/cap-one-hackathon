<template>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="header">
          </div>
          <div class="content all-icons">
            <pet-card v-for="customer in account_details.authorized_users" :account_details="account_details" :customer_id="customer.customer_id" :credit_limit="account_details.credit_limit" :customer_details="account_details.users[customer.customer_id]"></pet-card>
            <h4 class="title">User Account {{account_id}}</h4>
            <pre>{{account_details}}</pre>
          </div>
        </div>
      </div>

    </div>
</template>
<script>
  import { mapState, mapActions, mapGetters } from 'vuex'
  import PetCard from 'components/UIComponents/Cards/PetCard.vue'


  export default {
    components: {
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
