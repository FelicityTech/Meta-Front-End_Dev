function addTwoNums(a, b) {
    console.log(a, b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specifixNum() { return 42 };


var useRandom = true;

var getNumber;
if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specifixNum
}

addTwoNums(getNumber(), getNumber())