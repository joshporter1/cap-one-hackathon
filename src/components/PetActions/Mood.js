var MoodProcessor = {

  processFullCustomer(customer_id){
    fetch('https://3hkaob4gkc.execute-api.us-east-1.amazonaws.com/prod/au-hackathon/transactions',
    {
      method: 'post',
      body: JSON.stringify(
        { "customer_id" : customer_id }
      )
    }).then(function(response){
      response.json().then(function(data){
        console.log(data);
        return MoodProcessor.crunchTransactions(data[0].customers[0].transactions, data[0].account_id);
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

    let mood = 50;
    let prevDate = null;

    let transaction_date = new Date(transactions[0].year, MONTHS[transactions[0].month], transactions[0].day);
    let end_date = new Date();
    let numDays = dayDiff(transaction_date, end_date);
    let numWeeks = numDays/7;
    const alignment = parseInt((Math.random() * 5) + 2); //2 is good, 5 is bad at checking online.
    for(let i = 0; i < numWeeks; i++){
      let didCheck = (Math.random() * alignment) + 1;
      didCheck = Math.ceil(didCheck);
      if(didCheck === alignment){
        mood += 10 * Math.ceil((Math.random() * 5) + 1)
      } else {
        mood -= (5 * 7)
      }
      if(mood < 0){
        mood = 0;
      } else if(mood > 100){
        mood = 100;
      }
      console.log(alignment, didCheck, mood);
    }
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

export default MoodProcessor;