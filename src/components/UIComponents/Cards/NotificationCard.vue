<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="header">
            <h4 class="title">Notifications</h4>
          </div>
          <div class="content table-responsive table-full-width">
            <table class="table">
              <tbody>
                <tr v-for="(item, index) in tableData">
                  <td v-for="column in tableColumns" v-if="hasValue(item, column)">{{itemValue(item, column)}}</td>
                  <td v-on:click="removeIndex(index)"><button class='btn btn-danger'>Delete</button></td>
                </tr>
                <tr v-if="tableData.length === 0">
                  <td>No more notifications!<span style = "color:#dd3920;"> Happiness Up!</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        props: {
          columns: Array,
          data: Array,
          type: {
            type: String, // striped | hover
            default: ''
          },
          title: {
            type: String,
            default: ''
          },
          subTitle: {
          type: String,
          default: ''

          }
        },
        tableData: [{
          notification: 'This is the third week in a row you bought socks!',
          date: '11/5/2017'
        },
        {
          notification: 'You spent $5 more than last week!',
          date: '11/5/2017'
        },
        {
          notification: 'Credit limit Increase in one week!',
          date: '11/5/2017'
        },
        {
          notification: 'You went to Mcdonalds alot this week',
          date: '11/5/2017'
        }],
        tableColumns: ['Date', 'Notification']
      }
    },
    methods: {
      hasValue (item, column) {
        return item[column.toLowerCase()] !== 'undefined'
      },
      itemValue (item, column) {
        return item[column.toLowerCase()]
      },
      removeIndex(value) {
        
        
        this.tableData.splice(value, 1);
        
        if(this.tableData.length == 0){
           this.$emit('input',"no");
          
        }else{
          this.$emit('input',"bounce");
        
        }
      }
    }
  }
</script>
<style>
</style>
