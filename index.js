// code your solution here
function saturdayFun (activity="roller-skate") {
 return `This Saturday, I want to ${activity}!`
}
console.log(saturdayFun('bathe my dog'))
//

const mondayWork = function (work= "go to the office") {
    return `This Monday, I will ${work}.`
}
console.log(mondayWork())

//
function wrapAdjective (result="") {
    return function(pam1) {
        return `You are ${result}${pam1}${result}!`
    }
    }
console.log(wrapAdjective("||")("a dedicated programmer"))
