     
<template>
   
    
<div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-4 center-block" id="imagesMain">
        <transition name="fade">
            <p style = "color:#dd3920;" v-if="alert">Happiness Up!</p>
          </transition>
        <img width="50"  src="static/img/health.png" v-for="heart in hearts">
        <img width="50"  src="static/img/empty.png" v-for="heart in empty">
       </div> 
        <div class="col-md-4"></div>
 </div>
</template>

<script>
  export default {
    name: 'pet-health',
    props: ['status'],
    data () {
      return {
        alert: false
      }
    },
    watch: {
      status () {
        this.alert = true
        let _this = this
        setTimeout(function(){
          _this.alert = false
        }, 2500)
      }
    },
    computed: {
      hearts () {
        if (this.status == 'sad')
          return 2
        if (this.status == 'normal')
          return 3
        if (this.status == 'great')
          return 4
        else
          return 2
      },
      empty () {
        return 4 - this.hearts
      }
    }
  }

</script>


<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}

.pet-enter-active, .pet-leave-active {
  transition: opacity 5s
}
.pet-enter, .pet-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}

#imagesMain {
 
  text-align: center;
}
#imagesMain img {
  
  vertical-align: middle;
}
</style>