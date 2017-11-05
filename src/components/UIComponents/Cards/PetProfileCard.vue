<template>
   
    
    <div class="row">
        

      
            <div class="col-lg-4 col-md-4">

            </div>
   
            <div class="col-lg-4 col-md-4">
     
                  <transition appear name="slide-fade">
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
.slide-fade-enter-active {
  transition: all 1.2s ease;
}
.slide-fade-leave-active {
  transition: all 1.2s cubic-bezier(3.0, 0.5, 0.8, 3.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(100px);
  opacity: 0;
}
</style>