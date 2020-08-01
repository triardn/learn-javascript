// Create row of numbers in array
function range(startNumber, lastNumber) {
    // checking argument validity
    if (arguments.length < 2) {
        return -1
    }

    // checking arguments value
    let arr = []
    if (startNumber > lastNumber) { // descending
        for (startNumber; startNumber >= lastNumber; startNumber--) {
            arr.push(startNumber)
        }
    } else {
        for (startNumber; startNumber <= lastNumber; startNumber++) {
            arr.push(startNumber)
        }
    }

    return arr
}

console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1

console.log("")

// Create row of numbers in array with step
function rangeWithStep(startNumber, lastNumber, step) {
    // checking argument validity
    if (arguments.length < 3) {
        return -1
    }

    // checking arguments value
    let arr = []
    if (startNumber > lastNumber) { // descending
        for (startNumber; startNumber >= lastNumber; startNumber -= step) {
            arr.push(startNumber)
        }
    } else {
        for (startNumber; startNumber <= lastNumber; startNumber += step) {
            arr.push(startNumber)
        }
    }

    return arr
}

console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5]

console.log("")

// Sum all elements on array
function sum(startNumber, lastNumber, step) {
    if (lastNumber == undefined) {
        lastNumber = startNumber
    }

    if (step === undefined) {
        step = 1
    }

    const arr = rangeWithStep(startNumber, lastNumber, step)
    let total = 0

    arr.forEach(element => {
        total += element
    });

    return total
}

console.log(sum(1,10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15,10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0

console.log("")

// Multi-dimension array
const dataInput = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(input) {
    for (let i = 0; i < input.length; i++) {
        console.log(`Nomor ID:  ${input[i][0]}`)
        console.log(`Nama Lengkap:  ${input[i][1]}`)
        console.log(`TTL:  ${input[i][2]} ${input[i][3]}`)
        console.log(`Hobi:  ${input[i][4]}`)

        if (i != (input.length - 1)) {
            console.log("")
        }
    }
}

dataHandling(dataInput)

console.log("")

// Reverse a string
function balikKata(kata) {
    let index = kata.length - 1
    let kataTerbalik = ''

    for (index; index >= 0; index--) {
        kataTerbalik += kata[index]
    }

    return kataTerbalik
}

console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("Lorem Ipsum")) // muspI meroL
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Coder")) // redoC ma I

console.log("")

// Array methods
function stringManipulator(string, additionalString, place) {
    let arrOfString = string.split(" ")
    if (place == "first") {
        arrOfString = arrOfString.filter((item) => item != '')
        arrOfString.unshift(additionalString)
    } else {
        arrOfString = arrOfString.filter((item) => item != '')
        arrOfString.push(additionalString)
    }

    return arrOfString.join(" ")
}

function getBirthMonth(birthdate) {
    switch (birthdate) {
        case "01":
            return "Januari"
        break;

        case "02":
            return "Februari"
        break;

        case "03":
            return "Maret"
        break;

        case "04":
            return "April"
        break;

        case "05":
            return "Mei"
        break;

        case "06":
            return "Juni"
        break;

        case "07":
            return "Juli"
        break;

        case "08":
            return "Agustus"
        break;

        case "09":
            return "September"
        break;

        case "10":
            return "Oktober"
        break;

        case "11":
            return "November"
        break;

        case "12":
            return "Desember"
        break;

        default:
            return "Invalid input"
    }
}

function stringLimiter(str, limit) {
    return str.slice(0, limit)
}

function dataHandling2(arr) {
    // modify name
    arr[1] = stringManipulator(arr[1], "Elsharawy", "last")
    
    // modify address
    arr[2] = stringManipulator(arr[2], "Provinsi", "first")

    // remove "Membaca" and add some items on array
    arr.splice(4, 1, "Pria", "SMA Internasional Metro")

    console.log(arr)

    let birthdate = arr[3].split("/")

    // get bulan from birthdate
    console.log(getBirthMonth(birthdate[1]))

    // sort birthdate arr descending
    let sortedBirthdate = birthdate.slice()
    console.log(sortedBirthdate.sort(function (value1, value2) { return value2 - value1 }))

    // birthdate with separator "-"
    console.log(birthdate.join("-"))

    // nama only 15 characters
    console.log(stringLimiter(arr[1], 15))
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"]

dataHandling2(input)