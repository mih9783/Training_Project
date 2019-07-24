function calcOrDouble(num, basis) {
    basis = basis || 2;
    console.log(num * basis);
}

calcOrDouble(9,7);
calcOrDouble(9);

function calcOrDouble1(num, basis = 2) {
    console.log(num * basis);
}

calcOrDouble1(3,7);
calcOrDouble1(3);