export function sum(array) {
    let sum = 0

    for (let value of array) {
        sum += value;
    }

    return sum;
}

export function sumOdds(array) {
    let sum = 0

    for (let value of array) {
        if (value % 2 != 0) {
            sum += value;
        }
    }
        
        return sum;
}

export function product(array) {
    let product = 1;

    for (let value of array) {
        product *= value;
    }

    return product;
}