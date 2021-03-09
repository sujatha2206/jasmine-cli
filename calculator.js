function Calculator(){
    this.total=0
}
Calculator.prototype.add =function(number){
    return this.total=this.total+number
}
Calculator.prototype.sub =function(number){
    return this.total=this.total-number
}
Calculator.prototype.multiply =function(number){
    return this.total=this.total*number
}
Calculator.prototype.divide =function(number){
    if(number === 0){
        throw new Error("cannot divide by zero")
    }
    return this.total=this.total/number
}
Object.defineProperty(Calculator.prototype,'version',{
    get:function(){
        return '0.1'
    },
    enumerable:true,
    configurable:true
})
