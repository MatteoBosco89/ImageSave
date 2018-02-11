//pagina background traccio qualunque variabile globale posso evitare storage dei dati.


var selectedArrayIMGSAVE = []; 

function isHere(arr, img){
    if(arr.length > 0){
        for(var x = 0; x < arr.length; x++){
            if(arr[x] === img){
                return true
            }
        }
    }
    return false;
}

function getArray(){
    return selectedArrayIMGSAVE;
}

chrome.runtime.onMessage.addListener(function(request, sender) {
    if(request.action === "saveImgsSource"){
        chrome.tabs.executeScript(sender.tab.id, {
            file: "getImg.js"
        });
    }
  
});
chrome.runtime.onMessage.addListener(function(request, sender) {
    if(request.action === "giveMeTheArray"){
        chrome.runtime.sendMessage({
            action: "getSelectedArrayIMGSAVE",
            source: getArray()
        });
    }
});
chrome.runtime.onMessage.addListener(function(request, sender) {
    if(request.action === "clearTheArray"){
        selectedArrayIMGSAVE = [];
        chrome.runtime.sendMessage({
            action: "cleared"
        });
    }
});
chrome.runtime.onMessage.addListener(function(request, sender) {
    if (request.action === "getImgSource") {
        temporaryArrayIMGSAVE = request.source;
        for(var i = 0; i < temporaryArrayIMGSAVE.length; i++){
            if(!isHere(selectedArrayIMGSAVE, temporaryArrayIMGSAVE[i])){
                selectedArrayIMGSAVE.push(temporaryArrayIMGSAVE[i]);
            }
        }
        chrome.tabs.sendMessage(sender.tab.id, {text:"true"}, function(){
            
        });
    }
});