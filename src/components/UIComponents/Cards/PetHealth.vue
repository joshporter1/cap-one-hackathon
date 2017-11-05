     
<template>
   
    
<div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-4 center-block" id="imagesMain">
        <img width="50"   src="static/img/health.png">
        <img width="50"  src="static/img/health.png">
        <img width="50"  src="static/img/empty.png">
        <img width="50"  src="static/img/empty.png">
     
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

#imagesMain {
 
  text-align: center;
}
#imagesMain img {
  
  vertical-align: middle;
}
</style>