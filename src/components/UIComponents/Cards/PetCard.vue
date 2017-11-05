<template>
  <div class='row'>
      <div class="col-md-12">
        <div class="card">
          <div class="content">
            <div class="row">
              <div class="col-xs-5">
                <div class="icon-big text-center">
                  <img class="avatar border-white" :src=image alt="">
                </div>
              </div>
              <div class="col-xs-7">
                <div class="numbers">
                  <!-- <i class="ti-face-smile"></i> -->
                  <p>Appetite</p> {{appetite}}%
                  <p>Happiness</p>{{happiness}}
                </div>
              </div>
            </div>
            <div class="footer">
              <hr/>
              <div class="stats">
                <router-link :to="{name: 'kidDashboard', params: {account_id: account_id, customer_id: customer_id, appetite: appetite, happiness: happiness}}">{{customer_name}}</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  import {RouterLink} from 'vue-router'

  export default {
    name: 'pet-card',
    mounted() {
      this.crunchTransactions()
    },
    props: [
      'account_details', 
      'customer_id', 
      'credit_limit',
      'customer_details'
    ],
    data () {
      return {
        appetite: 50,
        happiness: 50
      }
    },
    watch: {
      'transactions': {
        handler (val) {
          this.crunchTransactions()
        },
        deep: true
      },
      customer_id () {
        this.appetite = 100
        this.happiness = 100
        this.crunchTransactions()
      }
    },
    computed: {
      account_id () {
        return this.$route.params.account_id
      },
      customer_name () {
        if(this.customer_details)
          return this.customer_details.first_name
      },
      transactions () {
        return this.$store.state.transactions[this.customer_id]
      },
      image () {
        if (this.appetite <= 20) {
          return 'static/img/pet-status/minior.gif'
        } else if (this.appetite > 20 && this.appetite <= 40) {
          return 'static/img/pet-status/minior-red.gif'
        } else if (this.appetite > 40 && this.appetite <= 60) {
          return 'static/img/pet-status/minior-orange.gif'
        } else if (this.appetite > 60 && this.appetite <= 80) {
          return 'static/img/pet-status/minior-yellow.gif'
        } else {
          return 'static/img/pet-status/minior-green.gif'
        }
      }
    },
    methods: {
      crunchTransactions () {
        if(!this.transactions) { return }
        let _this = this
        var MONTHS = {};
        MONTHS["January"]   = 0;
        MONTHS["February"]  = 1;
        MONTHS["March"]     = 2;
        MONTHS["April"]     = 3;
        MONTHS["May"]       = 4;
        MONTHS["June"]      = 5;
        MONTHS["July"]      = 6;
        MONTHS["August"]    = 7;
        MONTHS["September"] = 8;
        MONTHS["October"]   = 9;
        MONTHS["November"]  = 10;
        MONTHS["December"]  = 11;
        
        let appetite = 50;
        let prevDate = null;
        this.transactions.forEach(function(element) {
          let transaction_date = new Date(element.year, MONTHS[element.month], element.day);

          //figure out how much time since last transaction, 
          //subtract appetite
          if(prevDate != null){
            let diff = _this.dayDiff(prevDate, transaction_date);
            let negative_appetite = diff * (1/100)
            appetite -= negative_appetite
          }
          let add_appetite = (element.amount/_this.credit_limit) * 100;
          appetite += add_appetite;
          
          if(this.customer_id === 100420000)
            appetite = 91;

          if(this.customer_id === 100430000)
            appetite = 71;

          if(this.customer_id === 100440000)
            appetite = 34;

          if(this.customer_id === 100450000)
            appetite = 11;

          if(appetite > 100)
            appetite = 100;

          prevDate = transaction_date;
        }, this);
        this.appetite = parseInt(appetite)

        let transaction_date = new Date(this.transactions[0].year, MONTHS[this.transactions[0].month], this.transactions[0].day);
        let end_date = new Date();
        let numDays = this.dayDiff(transaction_date, end_date);
        let numWeeks = numDays/7;
        const alignment = parseInt((Math.random() * 5) + 2); //2 is good, 5 is bad at checking online.
        let happiness = 50;
        for(let i = 0; i < numWeeks; i++){
          let didCheck = (Math.random() * alignment) + 1;
          didCheck = Math.ceil(didCheck);
          if(didCheck === alignment){
            happiness += 10 * Math.ceil((Math.random() * 5) + 1)
          } else {
            happiness -= (5 * 7)
          }
          if(happiness < 0){
            happiness = 0;
          } else if(happiness > 100){
            happiness = 100;
          }
        }
        this.happiness = happiness;
      },
      dayDiff( date1, date2 ) {
        //Get 1 day in milliseconds
        var one_day=1000*60*60*24;

        // Convert both dates to milliseconds
        var date1_ms = date1.getTime();
        var date2_ms = date2.getTime();

        // Calculate the difference in milliseconds
        var difference_ms = date2_ms - date1_ms;
          
        // Convert back to days and return
        return Math.round(difference_ms/one_day); 
      }
    }
  }

</script>
<style>
</style>