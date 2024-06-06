let boxDom = document.getElementById('box');

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        boxDom.append("FizzBuzz");

    } else if (i % 3 === 0) {
        boxDom.append("Fizz");

    } else if (i % 5 === 0) {
        boxDom.append("Buzz");

    } else {
        boxDom.append(i);
    }

}



