<template>
  <div class='row'>
    <div class='col-md-6 col-md-offset-3 text-center'>
      <h1>Numus Pets</h1>
      <div style="height:350px;" >
          <div class="center-block" id="imagesMain">
              <img width="50"  src="static/img/health.png">
              <img width="50"  src="static/img/health.png">
              <img width="50"  src="static/img/health.png" >
              <img width="50"  src="static/img/health.png" v-if="!hide">
              <img width="50"  src="static/img/empty.png" v-if="hide">
          </div> 
          <transition 
            name="custom-classes-transition"
            enter-active-class="animated tada"
            leave-active-class="animated bounceOutRight">
              <img width="200" class="center-block" src="static/img/great.png">
          </transition>
        </div>
        <h5 class="text-center" style="margin-bottom: 0">Philippe Batigne</h5>
        <h5 class="text-center" style="margin-bottom: 0">Femi Ige</h5>
        <h5 class="text-center" style="margin-bottom: 0">Josh Porter</h5>
        <h5 class="text-center" style="margin-bottom: 0">Isara Ritthaworn</h5>
      </div>
    </div>
  </div>
</template>
<script>
  import StatsCard from 'components/UIComponents/Cards/StatsCard.vue'
  import OldChartCard from 'components/UIComponents/Cards/OldChartCard.vue'
  import PetCard from 'components/UIComponents/Cards/PetCard.vue'
  import NotificationCard from 'components/UIComponents/Cards/NotificationCard.vue'
  export default {

    components: {
      StatsCard,
      OldChartCard,
      PetCard,
      NotificationCard
    },
    /**
     * Chart data used to render stats, charts. Should be replaced with server data
     */
    computed: {
      count() {
        return this.$store.state.count
      }
    },
    data () {
      return {
        bounce: "no",
        jello: false,
        hide: true,
        statsCards: [
          {
            type: 'warning',
            icon: 'ti-server',
            title: 'Capacity',
            value: '105GB',
            footerText: 'Updated now',
            footerIcon: 'ti-reload'
          },
          {
            type: 'success',
            icon: 'ti-wallet',
            title: 'Revenue',
            value: '$1,345',
            footerText: 'Last day',
            footerIcon: 'ti-calendar'
          },
          {
            type: 'danger',
            icon: 'ti-pulse',
            title: 'Errors',
            value: '23',
            footerText: 'In the last hour',
            footerIcon: 'ti-timer'
          },
          {
            type: 'info',
            icon: 'ti-twitter-alt',
            title: 'Followers',
            value: '+45',
            footerText: 'Updated now',
            footerIcon: 'ti-reload'
          }
        ],
        usersChart: {
          data: {
            labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
            series: [
              
              [67, 152, 193, 240, 387, 435, 535, 642, 744],
              [23, 113, 67, 108, 190, 239, 307, 410, 410]
            ]
          },
          options: {
            low: 0,
            high: 1000,
            showArea: true,
            height: '245px',
            axisX: {
              showGrid: false
            },
            lineSmooth: this.$Chartist.Interpolation.simple({
              divisor: 3
            }),
            showLine: true,
            showPoint: false
          }
        },
        activityChart: {
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
              [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
              [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
            ]
          },
          options: {
            seriesBarDistance: 10,
            axisX: {
              showGrid: false
            },
            height: '245px'
          }
        },
        preferencesChart: {
          data: {
            labels: ['62%', '32%', '6%'],
            series: [62, 32, 6]
          },
          options: {}
        }

      }
    },
    methods:{
      update: function(bounce){
      console.log(bounce)
      if(bounce == "bounce"){
        console.log('yay')
        this.jello = false;
        var self = this;
        setTimeout(function(){
                self.jello = true;
            }, 50);
        
        
        
        
      }
      else{
        
     
        this.hide = !this.hide;
        this.jello = true;
        
      }
      }
    }
  }

</script>
<style>
#imagesMain {
 
  text-align: center;
}
#imagesMain img {
  
  vertical-align: middle;
}



</style>
