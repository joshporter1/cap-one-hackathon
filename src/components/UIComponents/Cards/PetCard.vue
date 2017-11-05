<template>
  <div class='row'>
      <div class="col-lg-3 col-sm-6">
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
            <p>Happiness</p>
            {{happiness}}%
          </div>
              </div>
            </div>
            <div class="footer">
              <hr/>
              <div class="stats">{{customer_name}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
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
        // happiness: 0
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
        this.crunchTransactions()
      }
    },
    computed: {
      customer_name () {
        if(this.customer_details)
          return this.customer_details.first_name
      },
      happiness () {
        return this.appetite
      },
      transactions () {
        return this.$store.state.transactions[this.customer_id]
      },
      image () {
        if (this.happiness <= 20) {
          return 'static/img/pet-status/minior.gif'
        } else if (this.happiness > 20 && this.happiness <= 40) {
          return 'static/img/pet-status/minior-red.gif'
        } else if (this.happiness > 40 && this.happiness <= 60) {
          return 'static/img/pet-status/minior-orange.gif'
        } else if (this.happiness > 60 && this.happiness <= 80) {
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
            let negative_appetite = diff * (1/7)
            appetite -= negative_appetite
          }
          let add_appetite = (element.amount/_this.credit_limit) * 100;
          appetite += add_appetite;
          if(appetite > 100)
            appetite = 100;
          prevDate = transaction_date;
        }, this);
        this.appetite = parseInt(appetite)
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