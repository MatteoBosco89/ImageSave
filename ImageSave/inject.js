var pointer = chrome.extension.getURL('dd093fcc3034c247d45edc07535399b86a4e1df8.png');
var help = chrome.extension.getURL('87071a5d6d7a5b405d2c3472fa37ab3e3362550d.png');
var save = chrome.extension.getURL('8bd95fbe91ab73ad5a57f1ef4dd0c0ea9a9edf1d.png');
var bgext = chrome.extension.getURL('efc4efabc6a0967f379426dee497b3015394e2cf.png');
var loader = chrome.extension.getURL('5edcf9cd11279d4339c93b5adb9b7ced0810803c.gif');
//override dello stile

var h3Tag = "color:black; margin:2px; background-color:transparent; background-image:none; text-decoration:none; font-size: 18px; font-weight:bold; font-family:arial,sans-serif; text-align:center; width:100%; height:auto; display:block;";
var h3Tag2 = "color:black; margin:10px; background-color:transparent; background-image:none; text-decoration:none; font-size: 18px; font-weight:bold; font-family:arial,sans-serif; text-align:center; width:100%; height:auto; display:block;";
var aTag = "color:black; background-color:transparent; background-image:none; text-decoration:none; cursor:pointer; font-family:arial,sans-serif; font-size:15px; font-weight:normal;";




$(document.head).after("<div id='2b99tr44rdp11pv66be3xx32m' style='z-index:10000; position:fixed; top:200px; height:auto; right:0px; display:block; width:12px; background-color: #e6e2e2; box-shadow: 0 1px 2px 2px rgba(0,1,0,0.35);'><div id='45fa23p1q91r432plc63rtshk' style='display:block; background-image:url("+pointer+"); background-size:30px; background-repeat:no-repeat; background-position:center; width:30px; height:30px; margin:10px 5px 10px 5px;' title='Select Images'></div><div id='75fa23p1q91r432plc63rtshk' style='display:block; background-image:url("+help+"); background-size:30px; background-repeat:no-repeat; background-position:center; width:30px; width:30px; height:30px; margin:10px 5px 10px 5px; background-color:transparent;' title='Help'></div></div>");
$(document.head).after("<div id='a71449e02caf8e4357a366171ca135f6ae627dfa' style='width:100%; height:100%; position:fixed; left:0; top:0; background-color:rgba(0,0,0,0.7); z-index:9999; display:none;'><div id='c756da0d014384e59cfa04cd7ffd86011c5f948e' style='position:absolute; display:none; background-color:#FFFFFF; width:85%; top:0; height:75%; bottom:0; left:0; right:0; margin:auto; z-index:10000; background-image:none; text-align:center;'><h3 style='"+h3Tag+"'><br>Welcome to ImageSave!<br><br><font style='font-weight:normal; display:block; text-align:justify; width:90%; margin:auto;'>To start using this awesome extension immediately you have to click, in the small pop-up menu, the <b>cursor icon</b>. Once pressed, a tab similar to this will appear, filled with all the images taken from the current internet page. The images are divided into three categories: <b>\"Images\"</b>, <b>\"Background Images\"</b> and <b>\"Base64 Images\"</b>. The first and second can be viewed fully by clicking on the <b>\"See me in a new tab\"</b> link, the third, unfortunately, can not be viewed this way. To choose the images you need just click on it, they will be delineated by a green border. To save the image selection, press the disk icon in the pop-up menu. <b>ImageSave</b> will think about saving the selection. It is possible to continue browsing on other web pages and select and save, in the same way, other images, as long as you want. When you are satisfied, click on the <b>ImageSave</b> icon on the top right and follow the actions indicated. After downloading the images, it is advisable to press the <b>\"Clear Data\"</b> button. To close the help section click again on the icon marked with <b>\" i \"</b>. Thank you for using ImageSave.</font></h3></div><div id='d854a6da9a6esaverc91778e464667bca8805fb54' style='position:absolute; display:none; background-color:#FFFFFF; width:85%; top:0; height:75%; bottom:0; left:0; right:0; margin:auto; z-index:10000; background-repeat:no-repeat; background-position:center; background-image:url("+loader+"); text-align:center;'><h3 style='"+h3Tag+"'>Saving..</h3></div><div id='d854a6da9a6e5678c91778e464667bca8805fb54' style='position:absolute; display:none; background-color:#FFFFFF; width:85%; top:0; height:75%; bottom:0; left:0; right:0; margin:auto; z-index:10000; background-repeat:no-repeat; background-position:center; background-image:url("+loader+"); text-align:center;'><h3 style='"+h3Tag2+"'>Loading...</h3><h3 style='"+h3Tag2+"'>Images: <span id='09efb81605850063a8ffcbfe10a562b3acdb0124'></span>/<span id='4f16d7a4d6a74002484c29341b5de8cdf5e69521'></span> completed</h3><h3 style='"+h3Tag2+"'>Background Images: <span id='bb48f38dffe288175c845ade9ee7dd3d80f5ff55'></span>/<span id='610e8ba20ca7eedf8435716a41da5b814f902f0e'></span> completed</h3><h3 style='"+h3Tag2+"'>Base64 Images: <span id='bb48f38dffe288ba5c845see9tr7dd3d80f5ff55'></span>/<span id='610e8ba20ca7esef8435716c41om5b814f902f0e'></span> completed</h3></div><div id='b4099535deae134c34fdc3cc57715eaca731bc2c' style='display:inline-block; width:85%; height:75%; background-color:rgb(230, 226, 226); box-shadow: 0px 0px 10px 10px black; position:absolute; top:0; left:0; right:0; bottom:0; margin:auto;'><span id='fd45gt567hgtr4321efgtrre' style='cursor:pointer; display:block; width:33%; height:25px; float:left; background-color:rgb(230, 226, 226);'><h3 style='"+h3Tag+"'>Images</h3></span><span id='3lkgd9dsj9sd2asd21d' style='cursor:pointer; float:left; display:block; width:33%; height:25px; background-color:#FFFFFF;'><h3 style='"+h3Tag+"'>Background Images</h3></span><span id='3lkbgd9dsja9sd2asds21de' style='cursor:pointer; float:left; display:block; width:34%; height:25px; background-color:#FFFFFF;'><h3 style='"+h3Tag+"'>Base64 Images</h3></span><div id='c2c4a4101e3a969f62184ebd6508f4bb0b4e3e1e' style='background-color:transparent; background-image:none; width:100%; height:calc(100% - 25px); overflow-y:auto; text-align:center;'></div><div id='47e32555cfb508eb77b853e40cd372b12ed9453b' style='width:100%; height:calc(100% - 25px); overflow-y:auto; display:none; text-align:center; background-color:transparent; background-image:none;'></div><div id='861c4ed2fdb3de49cc91d402245d9a7b414833d7' style='background-color:transparent; background-image:none; width:100%; height:calc(100% - 25px); overflow-y:auto; display:none; text-align:center;'></div></div></div>");

var detectedImages = [];
var detectedBgUrls = [];
var detectedBase64 = [];
var imgTrack = 0;
var bgTrack = 0;
var base64Track = 0;
var tabURL = '';
$(document).ready(function(){
    var url =  window.location;
    tabURL = url.protocol + "//" + url.host;
});

var running = false;


$('#3lkgd9dsj9sd2asd21d').on("click", function(){
        $("#c2c4a4101e3a969f62184ebd6508f4bb0b4e3e1e").css("display", "none");
        $("#47e32555cfb508eb77b853e40cd372b12ed9453b").css("display", "block");
        $("#861c4ed2fdb3de49cc91d402245d9a7b414833d7").css("display", "none");
        $(this).css("background-color", "rgb(230, 226, 226)");
        $('#fd45gt567hgtr4321efgtrre').css("background-color", "rgb(255, 255, 255)");
        $('#3lkbgd9dsja9sd2asds21de').css("background-color", "rgb(255, 255, 255)");
});
$('#fd45gt567hgtr4321efgtrre').on("click", function(){
        $("#c2c4a4101e3a969f62184ebd6508f4bb0b4e3e1e").css("display", "block");
        $("#47e32555cfb508eb77b853e40cd372b12ed9453b").css("display", "none");
        $("#861c4ed2fdb3de49cc91d402245d9a7b414833d7").css("display", "none");
        $(this).css("background-color", "rgb(230, 226, 226)");
        $('#3lkgd9dsj9sd2asd21d').css("background-color", "rgb(255, 255, 255)");
        $('#3lkbgd9dsja9sd2asds21de').css("background-color", "rgb(255, 255, 255)");
});
$('#3lkbgd9dsja9sd2asds21de').on("click", function(){
        $("#861c4ed2fdb3de49cc91d402245d9a7b414833d7").css("display", "block");
        $("#c2c4a4101e3a969f62184ebd6508f4bb0b4e3e1e").css("display", "none");
        $("#47e32555cfb508eb77b853e40cd372b12ed9453b").css("display", "none");
        $(this).css("background-color", "rgb(230, 226, 226)");
        $('#3lkgd9dsj9sd2asd21d').css("background-color", "rgb(255, 255, 255)");
        $('#fd45gt567hgtr4321efgtrre').css("background-color", "rgb(255, 255, 255)");
});
function checkUrl(url){
    if(url.startsWith('chrome-extension:')){
        return -1;
    }
    if(url.startsWith('linear') || url.startsWith('-webkit')){
        return -1;
    }
    if(url.startsWith('data:')){
        return url;
    }
    else if(url.startsWith('http')){
        return url;
    }
    else if(url.startsWith('//')){
        url = window.location.protocol + url;
    }
    else if(url.startsWith('/')){
        url = tabURL + url;
    }
    else{
       url = tabURL + '/' + url;
    }
    return url;
}

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

function isBase64(url){
    if(url.indexOf('data:') >= 0 && url.indexOf('base64') >= 0){
        return true
    }
    return false
}

function isBgURL(url){
    if(url.indexOf('url(') >= 0){
        return true
    }
    return false
}

function startIMGSave(e){
  if(running){
      var elForBg;
      var elForImg;
      if (arguments.length === 0) {
          elForBg = "*:not(#75fa23p1q91r432plc63rtshk,#45fa23p1q91r432plc63rtshk,#45fa23p1q91r432plc63rtshf,#b4099535deae134c34fdc3cc57715eaca731bc2c,#c2c4a4101e3a969f62184ebd6508f4bb0b4e3e1e,#47e32555cfb508eb77b853e40cd372b12ed9453b)";
          elForImg = document;
      }else{
          elForBg = e.target;
          elForImg = e.target;
      }
      //BACKGROUND-IMAGE
      var bgimages = $(elForBg).find("*:not(#75fa23p1q91r432plc63rtshk,#45fa23p1q91r432plc63rtshk,#45fa23p1q91r432plc63rtshf,#b4099535deae134c34fdc3cc57715eaca731bc2c,#c2c4a4101e3a969f62184ebd6508f4bb0b4e3e1e,#47e32555cfb508eb77b853e40cd372b12ed9453b)");
      for(var x = 0; x < bgimages.length; x++){
        if($(bgimages[x]).css("background-image") !== "none" && isBgURL($(bgimages[x]).css("background-image"))){
            var bgURLtoSplit = $(bgimages[x]).css("background-image").replace('url(','').replace(/\)/g,'').replace(/\"/gi, "").replace(/ /g, '');
            //console.log(bgURLtoSplit);
            var bgURL = false;
            var bgURLSuspectedNotNone = false;
            if(!isBase64(bgURLtoSplit)){
                if(bgURLtoSplit.split(', ').length >= 0){
                    var countSplit = bgURLtoSplit.split(', ').length;
                    countSplit--;
                    bgURL = bgURLtoSplit.split(', ')[countSplit];
                    bgURL = checkUrl(bgURL);
                    bgURLSuspectedNotNone = '';
                    //controlla se background-image ha doppio parametro -> url('...'), url('...')
                    if(bgURLtoSplit.split(', ')[countSplit+1] != 'none' && bgURLtoSplit.split(', ')[countSplit+1] != undefined){
                        bgURLSuspectedNotNone = bgURLtoSplit.split(', ')[countSplit+1];
                        bgURLSuspectedNotNone = checkUrl(bgURLSuspectedNotNone.replace('url(','').replace(')','').replace(' ', ''));
                    }
                }
                if(bgURLtoSplit.split(',').length >= 0){
                    var countSplit = bgURLtoSplit.split(',').length;
                    countSplit--;
                    bgURL = bgURLtoSplit.split(',')[countSplit];
                    bgURL = checkUrl(bgURL);
                    bgURLSuspectedNotNone = '';
                    //controlla se background-image ha doppio parametro -> url('...'), url('...')
                    if(bgURLtoSplit.split(',')[countSplit+1] != 'none' && bgURLtoSplit.split(',')[countSplit+1] != undefined){
                        bgURLSuspectedNotNone = bgURLtoSplit.split(',')[countSplit+1];
                        bgURLSuspectedNotNone = checkUrl(bgURLSuspectedNotNone.replace('url(','').replace(')','').replace(' ', ''));
                    }
                }
                else{
                    bgURL = bgURLtoSplit;
                }
                
            }
            if(!bgURL){
                bgURL = bgURLtoSplit;
            }
            if(bgURL != -1){
                if(isBase64(bgURL) && !isHere(detectedBase64, bgURL)){
                    detectedBase64.push(bgURL);
                }
                else if(!isBase64(bgURL) && !isHere(detectedBgUrls, bgURL)){
                    detectedBgUrls.push(bgURL);
                }
            }
            if(bgURLSuspectedNotNone != -1 && bgURLSuspectedNotNone){
                if(isBase64(bgURLSuspectedNotNone) && !isHere(detectedBase64, bgURLSuspectedNotNone)){
                    detectedBase64.push(bgURLSuspectedNotNone);
                }
                else if(!isBase64(bgURLSuspectedNotNone) && !isHere(detectedBgUrls, bgURLSuspectedNotNone)){
                    detectedBgUrls.push(bgURLSuspectedNotNone);
                }
            }
        }
      }
      //<IMG>
      var allImg = $(elForImg).find("img");
      //console.log(allImg.length);
      allImg.each(function(){
          var iu = $(this).attr("src");
          var iutrick = $(this).attr("data-src");
          if(iu != undefined){
            iu = checkUrl(iu);
            if(isBase64(iu) && !isHere(detectedBase64, iu)){
                detectedBase64.push(iu);
            }
            else if(!isBase64(iu) && !isHere(detectedImages, iu) && !isHere(detectedBgUrls, iu)){
              detectedImages.push(iu);
            }
          }
          if(iutrick != undefined){
              iutrick = checkUrl(iutrick);
            if(isBase64(iutrick) && !isHere(detectedBase64, iutrick)){
                detectedBase64.push(iutrick);
            }
            else if(!isBase64(iutrick) && !isHere(detectedImages, iutrick) && !isHere(detectedBgUrls, iutrick)){
              detectedImages.push(iutrick);
            }
          }
      }); 
        //console.log(detectedImages.length);
      $.when(printImgs()).then(function(){
          $("#d854a6da9a6e5678c91778e464667bca8805fb54").css("display", "none");
                                         });
  }
}

function printImgs(){
    var l = detectedImages.length;
    var y = 0;
    if(imgTrack < l){
        for(var x = imgTrack; x < l; x++){
            y = x;
            y++;
            $('#4f16d7a4d6a74002484c29341b5de8cdf5e69521').html(l);
            $('#09efb81605850063a8ffcbfe10a562b3acdb0124').html(y);
            $("#c2c4a4101e3a969f62184ebd6508f4bb0b4e3e1e").append('<div style="width:260px; display:inline-block;"><div id="4bcd4ea42058817f5b78c7e830480c7d4b82b22a-'+x+'" style="margin:5px; position:relative; width:250px; height:210px; display:inline-block; overflow:hidden; background-image:url('+bgext+');"><img style="position:absolute; top:-100%; bottom:-100%; height:auto; width:auto; left:-100%; right:-100%; margin:auto;" src="'+detectedImages[x]+'"></div><a href="'+detectedImages[x]+'" style="'+aTag+'" target="_blank"><h3 style="'+h3Tag+'">See me in new tab</h3></a></div>');
        }
        imgTrack = detectedImages.length;
    }
    l = detectedBgUrls.length;
    y = 0;
    if(bgTrack < l){
        for(var x = bgTrack; x < l; x++){
            y = x;
            y++;
            $('#610e8ba20ca7eedf8435716a41da5b814f902f0e').html(l);
            $('#bb48f38dffe288175c845ade9ee7dd3d80f5ff55').html(y);
            $("#47e32555cfb508eb77b853e40cd372b12ed9453b").append('<div style="width:260px; display:inline-block;"><div id="4bcd4ea42058817f5b78c7e830480c7d4b82b22abg-'+x+'" style="margin:5px; position:relative; width:250px; height:210px; display:inline-block; overflow:hidden; background-image:url('+bgext+');"><img style="position:absolute; top:-100%; bottom:-100%; height:auto; width:auto; left:-100%; right:-100%; margin:auto;" src="'+detectedBgUrls[x]+'"></div><a href="'+detectedBgUrls[x]+'" style="'+aTag+'" target="_blank"><h3 style="'+h3Tag+'">See me in new tab</h3></a></div>');
        }
        bgTrack = detectedBgUrls.length;
    }
    l = detectedBase64.length;
    y = 0;
    if(base64Track < l){
        for(var x = base64Track; x < l; x++){
            y = x;
            y++;
            $('#610e8ba20ca7esef8435716c41om5b814f902f0e').html(l);
            $('#bb48f38dffe288ba5c845see9tr7dd3d80f5ff55').html(y);
            $("#861c4ed2fdb3de49cc91d402245d9a7b414833d7").append('<div style="width:260px; display:inline-block;"><div id="4bcd4ea42058817f5b78c7e830480c7d4b82b22abase-'+x+'" style="margin:5px; position:relative; width:250px; height:210px; display:inline-block; overflow:hidden; background-image:url('+bgext+');"><img style="position:absolute; top:-100%; bottom:-100%; height:auto; width:auto; left:-100%; right:-100%; margin:auto;" src="'+detectedBase64[x]+'"></div></div>');
        }
        base64Track = detectedBase64.length;
    }
    return true;
}

function saveIMGSave(){
    $('#d854a6da9a6esaverc91778e464667bca8805fb54').css("display", "block");
    chrome.runtime.sendMessage({
        action: "saveImgsSource"
    }); 
}


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.text == "true"){
        $("#a71449e02caf8e4357a366171ca135f6ae627dfa").css("display", "none");
        $('#d854a6da9a6esaverc91778e464667bca8805fb54').css("display", "none");
    }
});

/*
*   
*/

$(document).on("click", "[id^=4bcd4ea42058817f5b78c7e830480c7d4b82b22a]", function(event){ 
    if(running){
        event.preventDefault();
            if($(this).children().attr("g3facaedf35a582839d38eae4f8c8ae96d3033010") == "true"){
                $(this).children().attr("g3facaedf35a582839d38eae4f8c8ae96d3033010", "false");
                $(this).css("box-shadow", "none");
                return false;
            }else{
                $(this).children().attr("g3facaedf35a582839d38eae4f8c8ae96d3033010", "true");
                $(this).css("box-shadow", "0px 0px 5px 5px green");
            }
          return false;
    }
});


   
    


$(document).on('DOMNodeInserted', function(e) {
    var container = $(e.target).parents("div").attr("id");
        if(container == "b4099535deae134c34fdc3cc57715eaca731bc2c" || container == "a71449e02caf8e4357a366171ca135f6ae627dfa" || container == "d854a6da9a6e5678c91778e464667bca8805fb54" || container == "c2c4a4101e3a969f62184ebd6508f4bb0b4e3e1e" || container == "47e32555cfb508eb77b853e40cd372b12ed9453b"){
            return false;
        }else{
            if(running){
                $.when($("#d854a6da9a6e5678c91778e464667bca8805fb54").css("display", "block")).then(function(){ startIMGSave(e); });
            }
        }
});

$(document).on({
   click: function() {
       if($("#c756da0d014384e59cfa04cd7ffd86011c5f948e").css("display") === "none"){
       $.when(
       $(this).css({'background-image':'url('+save+')'}),
       $(this).prop("id", "45fa23p1q91r432plc63rtshf"),
       $("#a71449e02caf8e4357a366171ca135f6ae627dfa").css("display", "inline-block"),
       $("#d854a6da9a6e5678c91778e464667bca8805fb54").css("display", "block"),
       running = true).then(function(){
           startIMGSave(); 
       });
       } 
   }
}, "#45fa23p1q91r432plc63rtshk");


$(document).on({
   click: function() {
       running = false;
       $(this).css({'background-image':'url('+pointer+')'});
       $(this).prop("id", "45fa23p1q91r432plc63rtshk");
       saveIMGSave();
   } 
}, "#45fa23p1q91r432plc63rtshf");

$(document).on({
   click: function() {
       if(!running){
       if($("#c756da0d014384e59cfa04cd7ffd86011c5f948e").css("display") === "block"){
           $("#a71449e02caf8e4357a366171ca135f6ae627dfa").css("display", "none");
           $("#c756da0d014384e59cfa04cd7ffd86011c5f948e").css("display", "none");
       }else if($("#c756da0d014384e59cfa04cd7ffd86011c5f948e").css("display") === "none"){
           $("#a71449e02caf8e4357a366171ca135f6ae627dfa").css("display", "inline-block");
           $("#c756da0d014384e59cfa04cd7ffd86011c5f948e").css("display", "block");
       }
       }
   } 
}, "#75fa23p1q91r432plc63rtshk");

$(document).on({
    mouseenter: function () {
        $(this).css("width", "40px");
    },
    mouseleave: function () {
        $(this).css("width", "12px");
    }
}, '#2b99tr44rdp11pv66be3xx32m');

