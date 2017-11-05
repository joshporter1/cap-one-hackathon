<template>
  <div class='row'>
      <div class="col-md-12">
        <div class="card">
          <div class="header">
            <h4 class="title">Monthly Transactions</h4>
          </div>
          <div class="content">
            <chartist
                v-if="this.transactions_series && this.transactions_keys"
                ratio="ct-golden-section"
                type="Bar"
                :data="chartData"
                :options="chartOptions" >
            </chartist>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  export default {
    name: 'chart-card',
    mounted() {
    },
    props: [
      'users'
    ],
    data () {
      return {
        chartOptions: {
            lineSmooth: false,
            stackBars: true
        }
      }
    },
    watch: {
      'transactions': {
        handler (val) {
        },
        deep: true
      },
      customer_id () {
      }
    },
    computed: {
      chartData () {
        return {
          labels: this.transactions_keys,
          series: this.transactions_series
        }
      },
      transactions () {
        return this.$store.state.transactions
      },
      mapped_transactions () {
        if(!this.transactions){ return {} }

        let series_tracker = {}
        let series = []
        for(let user in this.users) {
          let reduced = {}
          if(this.transactions[user]){
            series_tracker[user] = this.transactions[user].map(function (tx) {
              return {
                date: tx.month + " " + tx.year,
                amount: tx.amount
              }
            }).forEach(function(tx) {
              reduced[tx.date] = reduced[tx.date] || 0
              reduced[tx.date] += parseInt(tx.amount)
            })
          }
          series_tracker[user] = reduced
        }
        return series_tracker
      },
      transactions_series () {
        if(Object.keys(this.transactions).length === 0){ return false }
        return Object.values(this.mapped_transactions).map(function(obj) {return Object.values(obj)})
      },
      transactions_keys () {
        // let _this = this
        // if(Object.keys(this.transactions).length === 0){ return false }
        // return Object.keys(Object.values(this.mapped_transactions))
        return [
          'Nov',
          'Dec',
          'Jan',
          'Feb',
          'Mar',
          'May',
          'Apr',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct'
        ]
      }
    },
    methods: {
    }
  }

</script>
<style>
.ct-series .ct-bar {
  /* The width of your bars */
  stroke-width: 15px;
  /* Yes! Dashed bars! */
}
</style>