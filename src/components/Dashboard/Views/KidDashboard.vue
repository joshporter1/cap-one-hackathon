<template>
    <div class="row">
      <div class="col-lg-4 col-md-5">
        <user-card v-if="account_details.users !== undefined" :user="account_details.users[customer_id]" :card_type="account_details.card_type" :kid="true"></user-card>
        <notification-card v-on:tickle="tickle()" v-on:makeHappy="makeHappy()"></notification-card>
        <h3 class="title">Your Family</h3>
        <pet-card v-for="customer in account_details.authorized_users" :account_details="account_details" :customer_id="customer.customer_id" :credit_limit="account_details.credit_limit" :customer_details="account_details.users[customer.customer_id]"></pet-card>
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
              <!-- <router-link to="/overview"> 
                 <a>
                 <span>
                     <i style ="font-size:50px" class="ti-bell" v-bind:class="{ box: normal }">
                     </i>
                    <span v-if="normal"> Check out this weeks Summary!  </span>  
                  </span>   
                 </a>
               </router-link> -->
              </div>
            </div>
            <pet-health v-bind:status="status"></pet-health>
            <pet-profile-card :jello="jello" v-bind:status="status"></pet-profile-card>
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
              <div class="col-md-3"></div>
              
              <div class="col-md-6 text-center">
                <h3>Money left: ${{moneyLeft}} / ${{creditLimit}}</h3>
                <h4>You're doing great!</h4>
              </div>
            
              <div class="col-md-3"></div>
            </div>
        <div class="row">
          <div class="col-md-4">
          </div>
      
          <div class="col-md-4">
            <button type="button" class="btn btn-success center-block" v-on:click="showsavings = !showsavings">Deposit amount into Numus Bank</button>
          </div>
      
          <div class="col-md-4">
          </div>
        </div>
        </br>
        <div class="row">
          <div class="col-md-12 text-center">
            <form class="form-inline">
            <div class="form-group">
          
            </div>
            <div v-show="showsavings" class="form-group mx-sm-3">
              <label for="inputPassword2" class="sr-only">Password</label>
              <input v-model="amountToSave" type="number" class="form-control border-input" id="inputPassword2" placeholder="Savings Amount">
            </div>
            <a href="#" v-show="showsavings" type="submit" class="form-control border-input" v-on:click.prevent="makeHappy(amountToSave)" >Deposit Savings</a>
            </form>
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
  import PetCard from 'components/UIComponents/Cards/PetCard.vue'
  import PetProfileCard from 'components/UIComponents/Cards/PetProfileCard.vue'
  import PetHealth from 'components/UIComponents/Cards/PetHealth.vue'
  import NotificationCard from 'components/UIComponents/Cards/NotificationCard.vue'

  import { mapActions, mapGetters } from 'vuex'
  export default {
    components: {
      EditProfileForm,
      UserCard,
      MembersCard,
      NotificationCard,
      ChartCard,
      PetCard,
      PetProfileCard,
      PetHealth
    },
    data() {
      return {
        jello: false,
        preferencesChart: {
          data: {
            labels: ['62%', '32%', '6%'],
            series: [62, 32, 6]
          },
          options: {}
        },
        showsavings: false,
        status : 'sad',
        moneyLeft: 8,
        creditLimit: 20,
        amountToSave: 0
      }
    },
    methods: Object.assign({}, mapActions(['load_account_details']),
      {
        tickle () {
          let _this = this
          this.jello = true
          setTimeout(function() {
            _this.jello = false
          }, 500)
        },
        makeHappy (saved) {
          if(saved)
            this.moneyLeft = this.moneyLeft - saved;
          if (this.status == 'sad') {
            this.status = 'normal'
          } else if (this.status == 'normal') {
            this.status = 'great'
          } else if (this.status == 'great') {
            this.status = 'great'
          }
        }
      }
    ),
    mounted () {
      if(this.account_id){
        this.load_account_details(this.account_id)
      }
    },
    computed: Object.assign({}, mapGetters(['account_details']),
      {
        account_id: function() {
          return this.$route.params.account_id
        },
        customer_id: function() {
          return this.$route.params.customer_id
        }
      }
    ),
    watch: {
      account_id () {
        this.load_account_details(this.account_id)
      }
    }

  }
</script>
<style>
.box{
  
   
  
   
    position: relative;
    float: left;
    -moz-animation: .5s ease 0s normal none infinite swing;
    -moz-transform-origin: center top;
    -webkit-animation:swing .5s infinite ease-in-out;
    -webkit-transform-origin:top;
}
@-moz-keyframes swing{
    0%{-moz-transform:rotate(-20deg)}
    50%{-moz-transform:rotate(20deg)}
    100%{-moz-transform:rotate(-20deg)}
}
@-webkit-keyframes swing{
    0%{-webkit-transform:rotate(-20deg)}
    50%{-webkit-transform:rotate(20deg)}
    100%{-webkit-transform:rotate(-20deg)}
}

</style>