<template>
  <div class="card card-user">
    <div class="image">
      <img  alt="...">
    </div>
    <div class="content">
      <div class="author">
        <img class="avatar border-white" src="static/img/faces/phil.png" alt="...">
        <h4 class="title">{{name}}
          <br>
          <a href="#">
            <small>{{screenName}}</small>
          </a>
        </h4>
      </div>
    </div>
    <hr>
    <div class="text-center">
      <div class="row">
        <div v-for="(info,index) in details" :class="getClasses(index)">
          <h5>{{info.title}}
            <br>
            <small>{{info.subTitle}}</small>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        name: 'Philippe Batigne',
        screenName: '@chetfaker',
        details: [
          {
            title: '$572.73',
            subTitle: 'Available'
          },
          {
            title: '$327.67',
            subTitle: 'Rewards'
          },
          {
            title: '12%',
            subTitle: 'Utilization'
          }
        ],
        columns: ['title', 'subTitle']
      }
    },
    methods: {
      getClasses (index) {
        var remainder = index % 3
        if (remainder === 0) {
          return 'col-md-3 col-md-offset-1'
        } else if (remainder === 2) {
          return 'col-md-4'
        } else {
          return 'col-md-3'
        }
      },
      hasValue (item, column) {
        return item[column.toLowerCase()] !== 'undefined'
      },
      itemValue (item, column) {
        return item[column.toLowerCase()]
      }
    }
  }

</script>
<style>

</style>
