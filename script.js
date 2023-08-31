const passwordBox = document.getElementById("password");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$%^&*()_+~|}{[]<>/-="

const allChars = upperCase + lowerCase + numbers + symbols;
function createPass() {
            var length = document.getElementById("length").value;
            if(length>20){
                length=20;
            }
            let password = "";
            password += upperCase[Math.floor(Math.random()*upperCase.length) ]
            password += lowerCase[Math.floor(Math.random()*lowerCase.length) ] 
            password += numbers[Math.floor(Math.random()*numbers.length) ]
            password += symbols[Math.floor(Math.random()*symbols.length) ]
            console.log(length);
            while(length>password.length){
                password += allChars[Math.floor(Math.random()*allChars.length) ]
            }
            passwordBox.value = password;
}
function copyPass() {
            passwordBox.select();
            document.execCommand("copy");
}
        