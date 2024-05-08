// var userInput = document.getElementById("input").innerText
var user = prompt("emter")
var revrseWord = "";

for (i = user.length -1; i >= 0; i--) {
    revrseWord += user[i]
}

if (revrseWord == user) {

    alert("Yes , Its Palindrome Word")
} else {
    alert("Opps , Its Not Palindrome Word")

}