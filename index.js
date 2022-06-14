let arrTest = [-4, 3, -9, 0, 4, 1]

plusMinus(arrTest)

function plusMinus(arr) {
    let counterA = 0;
    let counterB = 0;
    let counterC = 0;

    for(let a of arr) {
        if(a > 0) {
            counterA++;
        } else if(a < 0) {
            counterB++;
        } else {
            counterC++;
        }
    }

    console.log((counterA/arr.length).toFixed(6))
    console.log((counterB/arr.length).toFixed(6))
    console.log((counterC/arr.length).toFixed(6))

}