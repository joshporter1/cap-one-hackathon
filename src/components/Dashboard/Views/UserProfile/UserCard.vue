<template>
  <div class="card card-user">
    <div class="image">
      <img  alt="...">
    </div>
    <div class="content">
      <div class="author">
        <img class="avatar border-white" :src="profile" :alt="firstname">
        <h4 v-if="firstname && lastname" class="title">{{firstname}} {{lastname}}</h4>
      </div>
    </div>
    <div class="text-center">
      <div class="row">
        <div class="col-sm-12 text-left" style="margin-left: 20px">
          <h5>{{card_type}}
            <br>
            <small>Your Card</small>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    props: ['user', 'card_type', 'kid'],
    data () {
      return {
        profile: "static/img/faces/face-0.jpg"
      }
    },
    watch: {
      user (val) {
        console.log(val)
        let _this = this
        if(val !== undefined) {
          let url = 'https://randomuser.me/api/?gender='+ this.user.gender.toLowerCase() +'&inc=picture'
          if(this.kid)
            url += '&lego'
          axios.get(url).then((response) => {
            _this.profile = response.data.results[0].picture.medium
          }, (err) => {
              console.log(err)
          })
        }
      }
    },
    computed: {
      firstname () { 
        if(this.user)
          return this.user.first_name
        else
          return ''
      },
      lastname () { return this.user.last_name }
    }
  }

</script>
<style>
.card-user .content {
  min-height: 100px!important;
}
</style>
