<template>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="header">
          </div>
          <div class="content all-icons">
            <h4 class="title">User Account</h4>
            {{account_details}}
          </div>
        </div>
      </div>

    </div>
</template>
<script>
  import { mapState, mapActions, mapGetters } from 'vuex'

  export default {
    mounted () {
      let customer_id = '100400000'
      let _this = this
      this.load_account_details(customer_id)
    },
    methods: mapActions([
      'load_account_details'
    ]),
    computed: mapGetters(['account_details'])
  }
</script>
<style>

</style>
