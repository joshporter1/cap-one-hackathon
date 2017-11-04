<template>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="header">
          </div>
          <div class="content all-icons">
            <h4 class="title">User Account {{account_id}}</h4>
            <pre>{{pretty_account_details}}</pre>
          </div>
        </div>
      </div>

    </div>
</template>
<script>
  import { mapState, mapActions, mapGetters } from 'vuex'

  export default {
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
        pretty_account_details: function() {
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
