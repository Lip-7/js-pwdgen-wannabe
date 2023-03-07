function textCopy(){
    var text = document.getElementById("password").innerText;
    navigator.clipboard.writeText(text);
    alert("text copied: " + text);
}
function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function passwordGenerating(){
    var userName = prompt("Please insert your first name");
    var userLName = prompt("Please insert your last name");
    var userColor = prompt("Please insert your favorite color");
    let randomNumber = getRandomInt(1000)
    document.getElementById("password").innerHTML = userName+userLName+userColor+randomNumber
};
