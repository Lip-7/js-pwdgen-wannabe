function textCopy(){
    var text = document.getElementById("password").innerText;
    navigator.clipboard.writeText(text);
    alert("text copied: " + text);
}
function getRandomInt(max){
    return Math.floor(Math.random() * max);
}
function inputCheck(value){
    if (value){
        if (isNaN(parseInt(value))){
            return true
        }else{
            return false
        }
    }else{
        return false
    }
};

function passwordGenerating(){
    var userName = prompt("Please insert your first name");
    let errorMessage = "Ma che stai a scrive??"
    if (inputCheck(userName) == true){
        var userLName = prompt("Please insert your last name");
        if (inputCheck(userLName) == true){
            var userColor = prompt("Please insert your favorite color");
            if (inputCheck(userColor) == true){
                let randomNumber = getRandomInt(1000)
                document.getElementById("password").innerHTML = userName+userLName+userColor+randomNumber
            }else{
                alert(errorMessage)
            }
        }else{
            alert(errorMessage)
        }
    }else{
        alert(errorMessage)
    }
};
