<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" :class="{toggled: $sidebar.showSidebar}" @click="toggleSidebar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar bar1"></span>
          <span class="icon-bar bar2"></span>
          <span class="icon-bar bar3"></span>
        </button>
        <a class="navbar-brand">{{routeName}}</a>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li class="open">
            <!--<a href="#" class="dropdown-toggle btn-magnify" data-toggle="dropdown">-->
            <!--  <i class="ti-panel"></i>-->
            <!--  <p>Stats</p>-->
            <!--</a>-->
          </li>
             <drop-down title="Switch Users" icon="ti-user">
               <li>
                <router-link :to="{name: 'adultdash', params: {account_id: '100400000'}}">Adult One</router-link>
              </li>
               <li>
                <router-link :to="{name: 'adultdash', params: {account_id: '109800000'}}">Adult Two</router-link>
              </li>
               <li>
                <router-link :to="{name: 'kidDashboard', params: {account_id: '100400000', customer_id: '100440000', appetite: 75, happiness: 11}}">Kid One</router-link>
              </li>
               <li>
                <router-link :to="{name: 'kidDashboard', params: {account_id: '100400000', customer_id: '100450000', appetite: 46, happiness: 22}}">Kid Two</router-link>
              </li>
              
             </drop-down>
          <li>
            <!--<a href="#" class="btn-rotate">-->
            <!--  <i class="ti-settings"></i>-->
            <!--  <p>-->
            <!--    Settings-->
            <!--  </p>-->
            <!--</a>-->
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { RouterLink } from 'vue-router'
  export default {
    computed: {
      routeName () {
        const {name} = this.$route
        return this.capitalizeFirstLetter(name)
      }
    },
    data () {
      return {
        activeNotifications: false
      }
    },
    methods: {
      capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      },
      toggleNotificationDropDown () {
        this.activeNotifications = !this.activeNotifications
      },
      closeDropDown () {
        this.activeNotifications = false
      },
      toggleSidebar () {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
      },
      hideSidebar () {
        this.$sidebar.displaySidebar(false)
      }
    }
  }

</script>
<style>

</style>