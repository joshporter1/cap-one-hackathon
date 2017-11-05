<template>
    <div class="row">
      <div class="col-lg-4 col-md-5">
        <user-card>

        </user-card>
        <detail-card></detail-card>
        <members-card>

        </members-card>
      </div>
      <div class="col-lg-8 col-md-7">
        <chart-card :chart-data="preferencesChart.data"  chart-type="Pie">
          <h4 class="title" slot="title">Monthly Spending</h4>
          <span slot="subTitle"> October 2017</span>
          <span slot="footer">
            <i class="ti-timer"></i> Campaign set 2 days ago</span>
          <div slot="legend">
            <i class="fa fa-circle text-info"></i> Open
            <i class="fa fa-circle text-danger"></i> Bounce
            <i class="fa fa-circle text-warning"></i> Unsubscribe
          </div>
        </chart-card>
      </div>
      <div class="col-lg-8 col-md-7">
        <chart-card :chart-data="preferencesChart.data"  chart-type="Pie">
          <h4 class="title" slot="title">Monthly Spending</h4>
          <span slot="subTitle"> October 2017</span>
          <span slot="footer">
            <i class="ti-timer"></i> Campaign set 2 days ago</span>
          <div slot="legend">
            <i class="fa fa-circle text-info"></i> Open
            <i class="fa fa-circle text-danger"></i> Bounce
            <i class="fa fa-circle text-warning"></i> Unsubscribe
          </div>
        </chart-card>
      </div>
    </div>
</template>
<script>
  import EditProfileForm from './UserProfile/EditProfileForm.vue'
  import UserCard from './UserProfile/UserCard.vue'
  import MembersCard from './UserProfile/MembersCard.vue'
  import ChartCard from 'components/UIComponents/Cards/ChartCard.vue'
  import DetailCard from 'components/UIComponents/Cards/DetailCard.vue'
  export default {
    components: {
      EditProfileForm,
      UserCard,
      MembersCard,
      ChartCard,
      DetailCard
    },
    data(){
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

</style>
