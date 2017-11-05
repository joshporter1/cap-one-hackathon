<template>
   
    
    <div class="row">
        

      
            <div class="col-lg-4 col-md-4">

            </div>
   
            <div class="col-lg-4 col-md-4">
     
                  <transition name="pet">
                     <img width="200" class="center-block" src="static/img/great.png">
                  </transition>
       
       
            </div>
         
             <div class="col-lg-4 col-md-4">
     
       
       
       
             </div>
  </div>
  
   
  
  
</template>
<script>
  export default {
    name: 'pet-profile-card'
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