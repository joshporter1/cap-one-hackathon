     
<template>
   
    
<div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-4 center-block">
        <img width="50"   src="static/img/health.png">
        <img width="50"  src="static/img/health.png">
        <img width="50"  src="static/img/health.png">
        <img width="50"  src="static/img/health.png">
     
       </div> 
        <div class="col-md-4"></div>
 </div>
  
  
</template>

<script>
  export default {
    name: 'pet-health'
  }

</script>


<style>
.pet-enter-active, .pet-leave-active {
  transition: opacity 5s
}
.pet-enter, .pet-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>