
function absolute(number) {
    if (number < 0)
        number *= -1

    return number
}

function isEven(number) {
    if (number % 2 == 0)
        return true

    return false
}

function isOdd(number) {
    if (number % 2 != 0)
        return true

    return false
}

function removeVowels(text) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let result = ""

    for (let i = 0; i < text.length; i++) {
        if (! vowels.includes(text.charAt(i)))
            result += text.charAt(i)
    }

    return result;
}

function filterInteger(array) {
    let result = [];

    array.forEach((item) => {
        if (Number.isInteger(item))
            result.push(item);
    });

    return result;
}

export { absolute, isEven, isOdd, removeVowels, filterInteger };




