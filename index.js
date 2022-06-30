/* Your Code Here */
function createEmployeeRecord([firstName, familyName, title, payRatePerHour]) {
    return {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payRatePerHour,
        timeInEvents: [],
        timeOutEvents: [],
    }
}
function createEmployeeRecords(arrayOfArrays) {
    return arrayOfArrays.map((employee) => createEmployeeRecord(employee))
}
function createTimeInEvent(dateStamp) {
    const saveDate = dateStamp.split(" ")
    const timeIn = {
        type: "TimeIn",
        hour: parseInt(saveDate[1]),
        date: saveDate[0]
    }
    this.timeInEvents.push(timeIn)
    return this
}
function createTimeOutEvent(dateStamp) {
    const saveDate = dateStamp.split(" ")
    const timeOut = {
        type: "TimeOut",
        hour: parseInt(saveDate[1]),
        date: saveDate[0]
    }
    this.timeOutEvents.push(timeOut)
    return this
}
function hoursWorkedOnDate(dateStamp) {
    const timeIn = this.timeInEvents.find(object => object.date === dateStamp)
    const timeOut = this.timeOutEvents.find(object => object.date === dateStamp)
    return (timeOut.hour - timeIn.hour) / 100
}
function wagesEarnedOnDate(dateStamp) {
    const hours = hoursWorkedOnDate.call(this, dateStamp)
    const payRate = this.payPerHour
    return hours * payRate
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

function findEmployeeByFirstName(srcArray, theNameWereLookingFor) {
    return srcArray.find((obj) => obj.firstName === theNameWereLookingFor)
}

function calculatePayroll(employeeArray) {
    const payDates = employeeArray.reduce((prev, next) => prev + allWagesFor.call(next), 0)
    return payDates
}

