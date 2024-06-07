let boxDom = document.getElementById('box');

for (let i = 1; i <= 100; i++) {

    let nuevoDiv = document.createElement("div");

    if (i % 3 === 0 && i % 5 === 0) {
        // let nuevoDiv = document.createElement("div");
        nuevoDiv.style.backgroundColor = "red";
        nuevoDiv.textContent = "FizzBuzz";
        // boxDom.append(nuevoDiv);


    } else if (i % 3 === 0) {
        // let nuevoDiv = document.createElement("div");
        nuevoDiv.style.backgroundColor = "green";
        nuevoDiv.textContent = "Fizz";
        // boxDom.append(nuevoDiv);

    } else if (i % 5 === 0) {
        // let nuevoDiv = document.createElement("div");
        nuevoDiv.style.backgroundColor = "yellow";
        nuevoDiv.textContent = "Buzz";
        // boxDom.append(nuevoDiv);

    } else {
        // let nuevoDiv = document.createElement("div");
        nuevoDiv.style.backgroundColor = "blue";
        nuevoDiv.textContent = i;
        // boxDom.append(nuevoDiv);
    }

    boxDom.append(nuevoDiv);
}





