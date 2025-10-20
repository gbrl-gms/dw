import {sum, sumOdds, product} from "./operation.js"

let values = 0

//soma

values = [1, 2, 3];
console.log(sum(values));

values = [2, 2, 2];
console.log(sum(values));

values = [1, 2, 3, 4, 5, 6];
console.log(sum(values));

//soma impar

values = [1, 2, 3];
console.log(sumOdds(values));

values = [2, 2, 2];
console.log(sumOdds(values));

values = [1, 2, 3, 4, 5, 6];
console.log(sumOdds(values));

//produto

values = [1, 2, 3];
console.log(product(values));

values = [2, 2, 2];
console.log(product(values));

values = [1, 2, 3, 4, 5, 6];
console.log(product(values));
