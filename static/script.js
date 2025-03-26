let x = 5;
let y = 7;
let z = x + y;
console.log(z);

let A = "Hello ";
let B = "world!";
let C = A + B;
console.log(C);

function SumNPrint(x1, x2) {
    let x3 = x1 + x2;
    console.log(x3);
}

SumNPrint(x, y); 
SumNPrint(A, B);

if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}

let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];


// for loop
// function findTheBanana(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == "Banana") {
//             alert("Banana found in " + i);
//         }
//     }
// }

// // forEach loop
// function findTheBanana(arr) {
//     arr.forEach(item => {
//         if (item === "Banana") {
//             alert("Banana found in the array");
//         }
//     });
// }


// findTheBanana(L1);
// findTheBanana(L2);

function greetingFunc() {
    let d = new Date();
    let h = d.getHours();
    let greeting;

    if (h < 12) {
        greeting = "Good morning, I am Cindy Wang";
    } else if (h < 18) {
        greeting = "Good afternoon, I am Cindy Wang";
    } else if (h < 20) {
        greeting = "Good evening, I am Cindy Wang";
    } else {
        greeting = "Good night, I am Cindy Wang";
    }
    
    let found = document.getElementById("greeting");
    if (found){
        found.innerHTML = greeting;
    }
}

greetingFunc();

function addYear() {
    let year = new Date().getFullYear();
    document.getElementById("copyYear").innerText = `${year}`;
}


// function showList() {
//     let list = document.querySelector("ul");
//     let button = document.getElementById("displayList");
//     list.style.display = "block"; 
//     button.style.display = "none"; 
// }


$("#readMore, #readLess").click(function() {
    $("#short, #full, #readMore, #readLess").toggle();
  });


function checkForm() {
    let name = document.getElementById("fname");
    let email = document.getElementById("email");
    let comment = document.getElementById("comment");
    let errorMessage = document.getElementById("errorMessage");

    if (!name.checkValidity() || !email.checkValidity() || !comment.checkValidity()) {
        errorMessage.innerHTML = "Please fill out the form correctly so I can get back to you :)";
    }
    else{
        errorMessage.innerHTML = "";
    }
}

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
            document.getElementById("adviceText").innerText = data.slip.advice;
        })
        .catch(error => {
            console.error("Error fetching advice:", error);
            document.getElementById("adviceText").innerText = "Oops! Something went wrong. Try again.";
        });
}


function toggleMenu() {
    let nav = document.getElementById("navbar");
    nav.classList.toggle("responsive");
  }
  
