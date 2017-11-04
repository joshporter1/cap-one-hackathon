var AppetiteProcessor = {
    processFullUser(customer_id){
      fetch('https://3hkaob4gkc.execute-api.us-east-1.amazonaws.com/prod/au-hackathon/transactions',
      {
        method: 'post',
        body: JSON.stringify(
          { "customer_id" : customer_id }
        )
      }).then(function(response){
        response.json().then(function(data){
          AppetiteProcessor.crunchTransactions(data[0].customers[0].transactions, data[0].account_id);
        });
      });
    },
    crunchTransactions(transactions, account_id){
      //sort this stuff by date...
      transactions.sort(fieldSorter(['year', 'month', 'day']));
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

      //get the credit limit for the account
      fetch('https://3hkaob4gkc.execute-api.us-east-1.amazonaws.com/prod/au-hackathon/accounts',
      {
        method: 'post',
        body: JSON.stringify(
          { "account_id" : account_id }
        )
      }).then(function(response){
        response.json().then(function(data){
          let credit_limit = data[0].credit_limit;
          let appetite = 50;
          let prevDate = null;
          transactions.forEach(function(element) {
            let transaction_date = new Date(element.year, MONTHS[element.month], element.day);
            //figure out how much time since last transaction, 
            //subtract appetite
            if(prevDate != null){
              let diff = dayDiff(prevDate, transaction_date);
              let negative_appetite = diff * (1/7)
              appetite -= negative_appetite
            }
            let add_appetite = (element.amount/credit_limit) * 100;
            appetite += add_appetite;
            if(appetite > 100)
              appetite = 100;
            prevDate = transaction_date;
            console.log(appetite);  
          }, this);
        });
      });

      
    }
  }
  function dayDiff( date1, date2 ) {
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
  function fieldSorter(fields) {
    return function (a, b) {
        return fields
            .map(function (o) {
                var dir = 1;
                if (o[0] === '-') {
                   dir = -1;
                   o=o.substring(1);
                }
                if (a[o] > b[o]) return dir;
                if (a[o] < b[o]) return -(dir);
                return 0;
            })
            .reduce(function firstNonZeroValue (p,n) {
                return p ? p : n;
            }, 0);
    };
}

  export default AppetiteProcessor;