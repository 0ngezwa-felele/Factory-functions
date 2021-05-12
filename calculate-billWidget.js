function calculate(bill) {
    // get the string entered in the textArea
    
    //split the string
    var billItems = bill.split(",");
    // a variable for the total phone bill.
    var billsTotal = 0;
    //loop over all the bill items
    for (var i = 0; i < billItems.length; i++) {
        var billItem = billItems[i].trim();
        if (billItem === "call") {
            billsTotal += 2.75;
        }
        else if (billItem === "sms") {
            billsTotal += 0.75;
        }
       
    }
    
    //round to two decimals
    return "R"+billsTotal.toFixed(2);
}