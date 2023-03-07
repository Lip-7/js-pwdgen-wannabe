function textCopy() {
    var text = document.getElementById("password").innerText;
    navigator.clipboard.writeText(text);
    alert("text copied: " + text);
  }