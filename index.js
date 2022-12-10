/* Your Code Here */
function createEmployeeRecord(arr) {
  
    return {firstName: arr[0],
            familyName: arr[1],
            title: arr[2],
            payPerHour: arr[3],
            timeInEvents: [],
            timeOutEvents: []}
}

function createEmployeeRecords(arr) {
    let employeeRecords = []
    for(let element of arr) {
        employeeRecords.push(createEmployeeRecord(element))
    }
    return employeeRecords
}

function createTimeInEvent(dateStamp) {
    let dateStampArr = dateStamp.split(" ")
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(dateStampArr[1], 10),
        date: dateStampArr[0]
    })

    return this
}

function createTimeOutEvent(dateStamp) {
    let dateStampArr = dateStamp.split(" ")
    this.timeOutEvents.push({
        type: "TimeOut",
        hour:  parseInt(dateStampArr[1], 10),
        date: dateStampArr[0]
    })
    
    return this
}


function  hoursWorkedOnDate(dateStamp) {
    let inEvents = this.timeInEvents.find((element) => {
        return element.date === dateStamp
    })
    let outEvents = this.timeOutEvents.find((element) => {
        return element.date === dateStamp
        })
    return (outEvents.hour - inEvents.hour)/100
}
function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour

}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find((element) => {
        return element.firstName === firstName
    })
}

function calculatePayroll(arr) {
    return arr.reduce((total, singleObj)=> {
            return total + allWagesFor.call(singleObj)
    }, 0)
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

