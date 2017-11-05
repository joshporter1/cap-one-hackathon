import Sidebar from './SideBar.vue'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: 'Dashboard',
      icon: 'ti-panel',
      path: '/'
    },
    {
      name: 'Family',
      icon: 'ti-user',
      path: '/404'
    },
    {
      name: 'Transactions',
      icon: 'ti-view-list-alt',
      path: '/404'
    },
    {
      name: 'Budget',
      icon: 'ti-briefcase',
      path: '/404'
    },
    {
      name: 'ATM Locator',
      icon: 'ti-location-pin',
      path: '/404'
    },
    {
      name: 'Notifications',
      icon: 'ti-bell',
      path: '/404'
    },
    {
      name: 'Help',
      icon: 'ti-help',
      path: '/404'
    }
  ],
  displaySidebar (value) {
    this.showSidebar = value
  }
}

const SidebarPlugin = {

  install (Vue) {
    Vue.mixin({
      data () {
        return {
          sidebarStore: SidebarStore
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarStore
      }
    })
    Vue.component('side-bar', Sidebar)
  }
}

export default SidebarPlugin
