<template>
    <div class="row">
      <div class="col-lg-4 col-md-5">
        <user-card>
        </user-card>
        
        <members-card>
        </members-card>
        
      </div>
      
      <div class="col-lg-8 col-md-7">
    <div class="card">
      
    <div class="header">
      <slot name="title"></slot>
      <p class="category">
        <slot name="subTitle"></slot>
      </p>
    </div>
    
    <div class="content">
      <div class="row">
       <div class="container">
         <a>
           <i style ="font-size:50px" class="ti-bell"></i>
         </a>
         </div>
        </div>
        <pet-health></pet-health>
      <pet-profile-card></pet-profile-card>
      
       <div class="row">
         <div class="col-md-4"></div>
         <div class="col-md-4">
      <div class="progress">
       <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar"
        aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:40%">
        40% Full (Healthy!)
        </div>
     </div>
     </div>
     <div class="col-md-4"></div>
    </div>
    
    <div class="row">
      <div class="col-md-4"></div>
      
      <div class="col-md-4 text-center">
        <p>Money left: $8 / $20</p>
        <p>You're doing great!</p>
      </div>
    
    <div class="col-md-4"></div>
    </div>
    
    
        <div class="row">
      <div class="col-md-5">
        <button type="button" class="btn btn-success center-block" v-on:click="showsavings = !showsavings">Deposit amount into savings</button>
      </div>
      
      <div class="col-md-2 text-center">
        <p>or</p>
      </div>
      
      <div class="col-md-5 text-center">
      <button type="button" class="btn btn-success center-block">See what else you can buy</button>
      </div>
    
    
    </div>
    
    
        
      <div class="footer">
        <hr>
        <div class="stats">
          <slot name="footer"></slot>
        </div>
        <div class="pull-right">
        </div>
      </div>
    </div>

  </div>
</div>
    </div>
</template>
<script>
  import EditProfileForm from './UserProfile/EditProfileForm.vue'
  import UserCard from './UserProfile/UserCard.vue'
  import MembersCard from './UserProfile/MembersCard.vue'
  import ChartCard from 'components/UIComponents/Cards/ChartCard.vue'
  import PetProfileCard from 'components/UIComponents/Cards/PetProfileCard.vue'
  import PetHealth from 'components/UIComponents/Cards/PetHealth.vue'
  export default {
    components: {
      EditProfileForm,
      UserCard,
      MembersCard,
      ChartCard,
      PetProfileCard,
      PetHealth
    },
    data() {
      return {
        preferencesChart: {
          data: {
            labels: ['62%', '32%', '6%'],
            series: [62, 32, 6]
          },
          options: {}
        }
      }
    }
  }
</script>
<style>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
