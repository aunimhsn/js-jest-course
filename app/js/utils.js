
function sum(a, b) {
    return a + b;
}

function average(array) {
    if (array.length == 0)
        throw new Error('Division by zero');
    
    let result = 0;
    array.forEach((item) => {
        result += item;
    });

    result = result / array.length;
    return result;
}

export { sum, average };

