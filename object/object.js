// Jawaban learn object
function getThisYear() {
    const now = new Date()
    const thisYear = now.getFullYear() // 2020 (tahun sekarang)

    return thisYear
}

function calculateAge(birthYear) {
    // get this year
    const thisYear = getThisYear()

    if (arguments.length < 1) {
        return "Invalid Birth Year"
    }

    if (thisYear < birthYear) {
        return "Invalid Birth Year"
    }

    return thisYear - birthYear
}

function arrayToObject(arr) {
    let person = {}
    for (let i = 0; i < arr.length; i++) {
        const fullName = arr[i][0] + ' ' + arr[i][1]
        
        let age
        if (arr[i][3] === undefined) {
            age = calculateAge()
        } else {
            age = calculateAge(arr[i][3])
        }

        let tempObject = {
            "firstName": arr[i][0],
            "lastName": arr[i][1],
            "gender": arr[i][2],
            "age": age,
        }

        console.log(`${i+1}. ${fullName}: `, tempObject)
    }
}

const people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ]
arrayToObject(people)

console.log("")

const people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]
arrayToObject(people2)

arrayToObject([])

console.log("")

// purchasing
function purchase(remainingMoney) {
    let items = []

    if (remainingMoney >= 1500000) {
        items.push("Sepatu Stacattu")
        remainingMoney -= 1500000
    }

    if (remainingMoney >= 500000) {
        items.push("Baju Zoro")
        remainingMoney -= 500000
    }

    if (remainingMoney >= 250000) {
        items.push("Baju H&N")
        remainingMoney -= 250000
    }

    if (remainingMoney >= 175000) {
        items.push("Sweater Uniklooh")
        remainingMoney -= 175000
    }

    if (remainingMoney >= 50000) {
        items.push("Casing Handphone")
        remainingMoney -= 50000
    }

    return {"shoppingBag": items, "changeMoney": remainingMoney}
}

function shoppingTime(memberId, money) {
    const lowestPrice = 50000
    if (arguments.length <= 1) {
        return "Mohon maaf, toko X hanya berlaku untuk member saja"
    }

    if (!memberId) {
        return "Mohon maaf, toko X hanya berlaku untuk member saja"
    } else if (money < lowestPrice) {
        return "Mohon maaf, uang tidak cukup"
    }

    const purchased = purchase(money)

    // compose response object
    const response = {
        "memberId": memberId,
        "money": money,
        "listPurchased": purchased.shoppingBag,
        "changeMoney": purchased.changeMoney
    }

    return response
}

console.log(shoppingTime('1820RzKrnWn08', 2475000))
console.log("")
console.log(shoppingTime('82Ku8Ma742', 170000))

console.log("")

// calculate angkot cost
function getElementIndex(arr, elem) {
    for (let i = 0; i < arr.length; i++) {
        if (elem == arr[i]) {
            return i
        }
    }

    return -1
}
function calculateRate(pickUpPoint, dropOffPoint) {
    const rute = ['A', 'B', 'C', 'D', 'E', 'F']
    const rate = 2000

    const indexOfPickUpPoint = getElementIndex(rute, pickUpPoint)
    const indexOfDropOffPoint = getElementIndex(rute, dropOffPoint)

    return (indexOfDropOffPoint - indexOfPickUpPoint) * rate
}

function naikAngkot(arrPenumpang) {
    let result = []
    
    for (let i = 0; i < arrPenumpang.length; i++) {
        const cost = calculateRate(arrPenumpang[i][1], arrPenumpang[i][2])
        const tempObj = {
            "penumpang": arrPenumpang[i][0],
            "naikDari": arrPenumpang[i][1],
            "tujuan": arrPenumpang[i][2],
            "bayar": cost
        }

        result.push(tempObj)
    }

    return result
}

console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]))
console.log("")
console.log(naikAngkot([])) //[]