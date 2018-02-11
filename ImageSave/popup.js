window.onload = onWindowLoad;

function onWindowLoad() {
  chrome.runtime.sendMessage({
    action: "giveMeTheArray"
  });    
}
var blobURL = null;
var f = null;
var bloburl = '';
var imageSaveArray = [];
var loader = chrome.extension.getURL('5edcf9cd11279d4339c93b5adb9b7ced0810803c.gif');
var logo = chrome.extension.getURL('1l45jc09o4563n123dx128.png');


chrome.runtime.onMessage.addListener(function(request, sender) {
    if(request.action === "cleared"){
        $("#actions").html('<span style="display:inline-block; width:100%; height:30px; line-height:30px; text-align:center; color:white; background-color:red;">Data Cleared</span>');
        $("#res").html("0");
        imageSaveArray = [];
    }
});

chrome.runtime.onMessage.addListener(function(request, sender) {
    if (request.action == "getSelectedArrayIMGSAVE") {
        imageSaveArray = request.source; 
        document.getElementById("res").innerHTML = imageSaveArray.length;
        if(imageSaveArray.length > 0){
            $("#actions").html('<span id="createImageSaveZip" style="cursor:pointer; display:inline-block; padding:5px; width:120px; height:30px; line-height:30px; text-align:center; margin:10px; color:white; background-color:green;">Create zip file</span><span id="clearImageSave" style="cursor:pointer; display:inline-block; padding:5px; width:120px; height:30px; margin:10px;  line-height:30px; text-align:center; color:white; background-color:red;">Clear Data</span>');
            //$("#seeArr").html('<a href="#" id="seeArrLnk" style="text-decoration:none; color:black;">See all images</a>');
        }
    }
}); 


function DownloadChanged(el) {
    if (el.danger === undefined || el.danger == null) {
        if(el.state.current == "complete"){
            f.remove(function(){});
        } 
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('logo').src = logo;
    var actions = document.getElementById('actions');
    actions.addEventListener('click', function(me) {
        if($(me.target).attr("id") === "createImageSaveZip"){
            $("#actions").html('<div style="background-image: url('+loader+'); background-position:center; background-repeat:no-repeat;     background-size:60px; width:100%; height:100px;"></div>') 
            createZip();
        }
        if($(me.target).attr("id") === "clearImageSave"){
            clearData();
        }
        if($(me.target).attr("id") === "downloadImageSaveZip"){
            chrome.downloads.download({url: blobURL, filename: "imagesave.zip"}, function(down){ 
                chrome.downloads.onChanged.addListener(DownloadChanged);
            });
        }
    });
});

function clearData(){
    chrome.runtime.sendMessage({
        action: "clearTheArray"
    });  
}


/*
*   SEMBRA RISOLVERE PROBLEMA DI SCRITTURA ZIP 
*   SENZA QUESTO FIX IL FILE RISULTA CORROTTO O DANNEGGIATO, HA ALL'INTERNO LE GIUSTE IMMAGINI 
*   MA POSSIEDE LA STESSA QUANTITA' DI BYTES DEL PIU' GRANDE FATTO FIN ORA
*/

function fileName(){
    var key = new Date();
    var x = imageSaveArray.length;
    var y = key.getMilliseconds();
    var z = key.getSeconds();
    var w = key.getUTCSeconds();
    var filenameFix = parseInt(x*y/z*w);
    return filenameFix;
}

function createZip(){
        var tempname = "temporary-"+fileName()+".zip";
        var fs = new zip.fs.FS();   
        for(var x = 0; x < imageSaveArray.length; x++){
            var y = '';
            var ext = '';
            var url = imageSaveArray[x];
            var req = new XMLHttpRequest();                 
            req.open('HEAD', url, false);       //METODO SINCRONO DEVO PRENDERE LE ESTENSIONI!!
            req.onreadystatechange = function () {
                if (this.readyState == this.DONE) {
                    ext = this.getResponseHeader("Content-Type");
                    ext = ext.split("/")[1];
                    y = x + '.' + ext;
                    fs.root.addHttpContent(y, imageSaveArray[x]);
                }
            };
            req.send();
            
        }
        
            createFile(tempname, function(fileEntry) {
                
                fs.root.exportFileEntry(fileEntry, function(content) {
                    blobURL = URL.createObjectURL(content);
                    $("#actions").html('<span id="downloadImageSaveZip" style="cursor:pointer; display:inline-block; padding:5px; width:120px; height:30px; line-height:30px; margin:10px; text-align:center; color:white; background-color:green;">Save zip file</span>');
                    f=fileEntry;
                });
            });
            function createFile(filename, callback) {
                window.webkitRequestFileSystem(TEMPORARY, 4 * 1024 * 1024 *1024, function(fs) {   //CREO FILESYSTEM TEMPORANEO
                    fs.root.getFile(filename, { create : true }, callback);
                });
            }
}
        
