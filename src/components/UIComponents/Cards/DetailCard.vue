<template>
  <div class="card">
    <div class='content'>
    <ul class="list-group">
      <li class="list-group-item" style='border: 0px;'><h4>{{title}}</h4></li>
      <hr style='margin-top: 0px, margin-bottom: 0px;'>
      <li class="list-group-item" style='border: 0px;' v-for="detail in details">
        <div class="row" >
          <div class="col-xs-8">
            <b>{{detail.category}}:</b>
          </div>
          <div class="col-xs-4">
            {{detail.preSymbol + detail.value.toFixed(2) + detail.postSymbol}}
          </div>
        </div>
      </li>
      <slot name="api_details"></slot>
    </ul>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['user'],
    created: function () {
      console.log('user data from parent component:')
      console.log(this.user) //prints out an empty string
    },
    data () {
      return {
        title: 'Details',
        details: []
      }
    }
  }

</script>
<style>

</style>
