const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let lengthEl = document.getElementById("length-el");
let passOne = document.getElementById("pass-one");
let passTwo = document.getElementById("pass-two");

let passwordLength = 15;

function plusLength() {
    passwordLength++;
    lengthEl.textContent = "Password Length: " + passwordLength;
}

function minusLength() {
    passwordLength--;
    lengthEl.textContent = "Password Length: " + passwordLength;
}

function randomCharacter() {
    let randomNumber = Math.floor(Math.random() * characters.length);
    return characters[randomNumber];
}

function generatePassword1() {
    let password1 = "";
    for (let i = 0; i < passwordLength; i++) {
        password1 += randomCharacter();
    }
    passOne.textContent = password1;
    console.log(password1);
}

function generatePassword2() {
    let password2 = "";
    for (let i = 0; i < passwordLength; i++) {
        password2 += randomCharacter();
    }
    passTwo.textContent = password2;
    console.log(password2);
}

function generatePasswords() {
    generatePassword1();
    generatePassword2();
}

