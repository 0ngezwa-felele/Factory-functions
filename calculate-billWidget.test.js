describe("calculate factory function",function(){
    it('should caltulate the total cost of one call' , function(){
        assert.equal("R2.75", calculate("call"));

    });
    it('should caltulate the total cost of three calls and two sms' , function(){
        assert.equal("R9.75", calculate("call,call,call,sms,sms"));

    });
    
});
        