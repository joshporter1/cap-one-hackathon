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
      path: '#'
    },
    {
      name: 'Transactions',
      icon: 'ti-view-list-alt',
      path: '#'
    },
    {
      name: 'Budget',
      icon: 'ti-briefcase',
      path: '#'
    },
    {
      name: 'ATM Locator',
      icon: 'ti-location-pin',
      path: '#'
    },
    {
      name: 'Notifications',
      icon: 'ti-bell',
      path: '#'
    },
    {
      name: 'Help',
      icon: 'ti-help',
      path: '#'
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
