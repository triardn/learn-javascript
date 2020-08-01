// Function without arguments
const teriak = function() {
    return "Hallo Raisa!"
}
 
console.log(teriak()) // "Halo Raisa!"

console.log("")

// Function with arguments
function kalikan(firstNumber, secondNumber) {
    return firstNumber * secondNumber
}
 
const num1 = 12
const num2 = 4
 
const hasilKali = kalikan(num1, num2)
console.log(hasilKali) // 48

console.log("")

// Function with arguments more than two
function introduce(name, age, address, hobby) {
    return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`
}
 
const name = "Agus"
const age = 30
const address = "Jln. Malioboro, Yogyakarta"
const hobby = "Gaming"
 
const perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogyakarta, dan saya punya hobby yaitu Gaming!"