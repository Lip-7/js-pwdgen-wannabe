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
    if (inputCheck(userName)){
        var userLName = prompt("Please insert your last name");
        if (inputCheck(userLName)){
            var userColor = prompt("Please insert your favorite color");
            if (inputCheck(userColor)){
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
