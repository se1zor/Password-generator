//referencing html elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('btncheck2');
const lowercaseEl = document.getElementById('btncheck1');
const numberEl = document.getElementById('btncheck3');
const symbolEl = document.getElementById('btncheck4'); 
const copy_btn = document.getElementById('copy');


const generate_btn = document.getElementById('generate');
generate_btn.addEventListener('click' , generatepassword);
const passwordEl = document.getElementById('password');
copy_btn.addEventListener('click' , copypassword);

//chars for the generated password
const uppercase_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase_chars = "abcdefghijklmnopqrstuvwxyz";
const symbol_chars = " !@#$%&?~+=";
const number_chars = "0123456789";

//Password generate function
function generatepassword () {
    let password = '';
    let length = lengthEl.value;
    let chars = '';

    chars += uppercaseEl.checked ? uppercase_chars : "";
    chars += lowercaseEl.checked ? lowercase_chars : "";
    chars += numberEl.checked ? number_chars : "";
    chars += symbolEl.checked ? symbol_chars : "";


    for (let i = 0; i <= length; i++){
        let rand = Math.floor(Math.random() * chars.length);
        password += chars.substring(rand, rand +1)
    }
    passwordEl.value = password;
}
//Password copy function 
async function copypassword () {
    if (navigator.clipboard){
        await navigator.clipboard.writeText(passwordEl.value);
        alert("Password Copied")

    }
}