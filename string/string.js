// Concate string
const word = 'JavaScript'
const second = 'is'
const third = 'awesome'
const fourth = 'and'
const fifth = 'I'
const sixth = 'love'
const seventh = 'it!'

const sentence = word.concat(' ').
                concat(second).
                concat(' ').
                concat(third).
                concat(' ').
                concat(fourth).
                concat(' ').
                concat(fifth).
                concat(' ').
                concat(sixth).
                concat(' ').
                concat(seventh)
console.log(sentence)

console.log("")

// Select character on string based on index
const sentence4 = "I am going to be React Native Developer"

const FirstWord = sentence4[0] // I
const secondWord = sentence4[2] + sentence4[3] // am
const thirdWord = sentence4[5] + sentence4[6] + sentence4[7] + sentence4[8] + sentence4[9] // going
const fourthWord = sentence4[11] + sentence4[12] // to
const fifthWord = sentence4[14] + sentence4[15] // be
const sixthWord = sentence4[17] + sentence4[18] + sentence4[19] + sentence4[20] + sentence4[21] // React
const seventhWord = sentence4[23] + sentence4[24] + sentence4[25] + sentence4[26] + sentence4[27] + sentence4[28] // Native
const eighthWord = sentence4[30] + sentence4[31] + sentence4[32] + sentence4[33] + sentence4[34] + sentence4[35] + sentence4[36] + sentence4[37] + sentence4[38] // Developer

console.log('First Word: ' + FirstWord)
console.log('Second Word: ' + secondWord)
console.log('Third Word: ' + thirdWord)
console.log('Fourth Word: ' + fourthWord)
console.log('Fifth Word: ' + fifthWord)
console.log('Sixth Word: ' + sixthWord)
console.log('Seventh Word: ' + seventhWord)
console.log('Eighth Word: ' + eighthWord)

console.log("")

// Substring
const sentence2 = 'wow JavaScript is so cool'

const firstWord2 = sentence2.substring(0, 3) // wow
const secondWord2 = sentence2.substring(4, 14) // JavaScript
const thirdWord2 = sentence2.substring(15, 17) // is
const fourthWord2 = sentence2.substring(18, 20) // so
const fifthWord2 = sentence2.substring(21) // cool

console.log('First Word: ' + firstWord2)
console.log('Second Word: ' + secondWord2)
console.log('Third Word: ' + thirdWord2)
console.log('Fourth Word: ' + fourthWord2)
console.log('Fifth Word: ' + fifthWord2)

console.log("")

// Length
const sentence3 = 'wow JavaScript is so cool'

const firstWord3 = sentence3.substring(0, 3) // wow
const secondWord3 = sentence3.substring(4, 14) // JavaScript
const thirdWord3 = sentence3.substring(15, 17) // is
const fourthWord3 = sentence3.substring(18, 20) // so
const fifthWord3 = sentence3.substring(21) // cool

const firstWordLength = firstWord3.length
const secondWordLength = secondWord3.length
const thirdWordLength = thirdWord3.length
const fourthWordLength = fourthWord3.length
const fifthWordLength = fifthWord3.length

console.log('First Word: ' + firstWord3 + ', with length: ' + firstWordLength)
console.log('Second Word: ' + secondWord3 + ', with length: ' + secondWordLength)
console.log('Third Word: ' + thirdWord3 + ', with length: ' + thirdWordLength)
console.log('Fourth Word: ' + fourthWord3 + ', with length: ' + fourthWordLength)
console.log('Fifth Word: ' + fifthWord3 + ', with length: ' + fifthWordLength)