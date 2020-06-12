function Registration () {
    radio.sendNumber(101)
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber < 100 && Current_ID == 0) {
        basic.showNumber(receivedNumber)
    }
})
function Clear () {
    radio.sendNumber(100)
}
input.onButtonPressed(Button.A, function () {
    AssignedID = randint(1, client_list.length - 1)
    basic.showNumber(AssignedID)
    radio.sendNumber(AssignedID)
})
input.onButtonPressed(Button.AB, function () {
    reset()
    Registration()
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.SmallHeart)
        basic.showIcon(IconNames.Heart)
    }
})
radio.onReceivedString(function (receivedString) {
    counter = 0
    _return = 0
    while (_return == 0) {
        if (client_list[counter] == receivedString) {
            _return = counter
        } else {
            counter += 1
            if (client_list.length == counter) {
                _return = counter
                client_list.push(receivedString)
            }
        }
    }
    radio.sendValue(receivedString, _return)
})
input.onButtonPressed(Button.B, function () {
    Clear()
})
function reset () {
    client_list = [control.deviceName()]
    MyID = 100
    Current_ID = 0
    AssignedID = 0
    basic.showIcon(IconNames.Yes)
}
let MyID = 0
let _return = 0
let counter = 0
let client_list: string[] = []
let AssignedID = 0
let Current_ID = 0
radio.setGroup(1)
reset()
