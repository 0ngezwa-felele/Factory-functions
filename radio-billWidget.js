function radioBillTotal(){
    var radioCallsTotal = 0;
    var radioSmsTotal = 0;
    var totalRadio = 0;
    var totalCalls = 0;
    var smsTotal = 0;


function radioBill2(billItemType){
    
    
    if (billItemType  === "call"){
        totalCalls += 2.75
    }
    else if (billItemType  === "sms"){
        smsTotal += 0.75;
    }

}
function calls(){
    return totalCalls;
}
function sms(){
    return smsTotal;
}
function Class(){
    if(radioTotal >= 50){
        return "danger"
    }
    if (radioTotal >= 30)
    return "warning"
}
function makeTotal(){
    return radioTotal = calls() + sms();
}
function getTotal(){
    return makeTotal
}
// function setWarningLevel(){

// }
// function setCalls(totalCalls){
//     totalCalls += 
// }
    
    

return{
    radioBill2,
    calls,
    sms,
    Class,
    makeTotal,
    getTotal
}
}