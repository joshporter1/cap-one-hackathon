<template>
   
    
    <div class="row">
        

      
            <div class="col-lg-4 col-md-4">

            </div>
   
            <div style="height: 250px" class="col-lg-4 col-md-4">
    
        <transition appear name="slide-fade">
            <img width="200" class="center-block" src="static/img/sad.png" v-if="!normal">
        </transition>
                  
       <transition 
       
       
         name="custom-classes-transition"
          enter-active-class="animated tada"
          
       
       
       >
               <img width="160" class="center-block" src="static/img/normal.png" v-if="normal" >
       </transition>
       
            </div>
         
             <div class="col-lg-4 col-md-4">
     
       
       
       
             </div>
  </div>
  
  

  
  
</template>
<script>
  export default {
    name: 'pet-profile-card',
    props:['normal']
  }

</script>


<style>
.slide-fade-enter-active {
  transition: all 1.2s ease;
}

.slide-fade-enter
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(100px);
  opacity: 0;
}


.slide-fade-enter-active {
  transition: all .9s ease;
}

.slide-fade-enter
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(20px);
  opacity: 0;
}


</style>