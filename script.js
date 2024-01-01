let innerBoxes = document.querySelectorAll(".inner");
let h2 = document.querySelector('h2');
let first = document.querySelector("#r");
let second = document.querySelector("#g");
let third = document.querySelector("#b");
let fourth = document.querySelector("#y");
let btn  = document.querySelector("button");
let count = 0;
let gameStart = false;
let arr = [first, second, third, fourth];
let random;
let level = 1;
let score = 0;
let arr2 = [];
let arr3 = [];
let originalColor;
let fun = function () {
    random = Math.floor(Math.random() * 4);
    arr2.push(random);
    originalColor = arr[random].style.backgroundColor;
    arr[random].style.backgroundColor = "white";
    setTimeout(function () {
        arr[random].style.backgroundColor = originalColor;
    }, 300);
}
btn.addEventListener("click", function(){
    btn.style.backgroundColor = "red";
    btn.style.color = "white";
    btn.innerText = "Reset";
    fun();
    console.log("Event Started");
    h2.innerText = `Level ${level}`;
    gameStart = true;
})

for (el of arr) {
    el.addEventListener("click", function (event) {
        if(gameStart==true){
        let i = arr.indexOf(event.target);
        arr3.push(i);
        let b = this;
        b.style.opacity = "0.5";
        setTimeout(function () {
            b.style.opacity = "1";
        }, 200)

        for (let j = 0; j < arr3.length; j++) {
            if (arr3[j] != arr2[j]) {
                
                h2.innerHTML = `Game Over! Your Score was ${score} <br>Press the button to restart the game`;
                level = 1;
                arr3 = [];
                arr2 = [];
                score = 0;
                break;

            }
            else {
                if (j == arr2.length - 1) {
                    score++;
                    level++;
                    h2.innerText = `Level ${level}`;
                    arr3 = [];
                    setTimeout(fun, 500);

                }
            }
        }

}})

}
