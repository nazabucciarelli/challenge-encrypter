let encryptButton = document.getElementById("button-encrypt");
let desencryptButton = document.getElementById("button-desencrypt");
let textarea = document.querySelector("textarea");
let notfound = document.getElementById("container-notfound");
let result = document.getElementById("result");
let resultText = document.getElementById("result-text");
let copyButton = document.getElementById("button-copy");

function encrypt(){
    let text = textarea.value;
    let encryptedText = "";
    for(let i = 0; i < text.length;i++){
        if(text[i] == 'a') {
            encryptedText = encryptedText.concat("ai");
        }
        else if(text[i] == 'e'){
            encryptedText = encryptedText.concat("enter");
        }
        else if(text[i] == 'i'){
            encryptedText =  encryptedText.concat("imes");
        }
        else if(text[i] == 'o'){
            encryptedText = encryptedText.concat("ober");
        }
        else if(text[i] == 'u'){
            encryptedText = encryptedText.concat("ufat");
        } else{
            encryptedText = encryptedText.concat(text[i]);
        }
    }
    if(encryptedText.length > 0){
        showResult(encryptedText);    
    }
}

function desencrypt(){
    let text = textarea.value;
    let desencryptedText = "";
    for(let i = 0;i < text.length;i++){
        if(text.substring(i,i+5) == "enter"){
            desencryptedText = desencryptedText.concat("e");
            i += 4;
        } else if(text.substring(i,i+4) == "imes"){
            desencryptedText = desencryptedText.concat("i");
            i += 3;
        } else if(text.substring(i,i+2) == "ai"){
            desencryptedText = desencryptedText.concat("a");
            i += 1;
        } else if(text.substring(i,i+4) == "ober"){
            desencryptedText = desencryptedText.concat("o");
            i += 3;
        } else if(text.substring(i,i+4) == "ufat"){
            desencryptedText = desencryptedText.concat("u");
            i += 3;
        } else{
            desencryptedText = desencryptedText.concat(text[i]);
        }
    }
    if(desencryptedText.length > 0){
        showResult(desencryptedText);
    }
}

function showResult(msg){
    notfound.classList.add("hidden");
    result.classList.remove("hidden");
    resultText.innerHTML = msg;
}

function copy(){
    navigator.clipboard.writeText(resultText.innerHTML);
}

encryptButton.onclick =  encrypt;
desencryptButton.onclick = desencrypt;
copyButton.onclick = copy;