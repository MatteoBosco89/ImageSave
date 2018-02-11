function IMGtoArray(d){
    var images = d.getElementsByTagName("img");
    var srcs = [];
    var x = 0;
    while(x < images.length){
        if(images[x].hasAttribute("g3facaedf35a582839d38eae4f8c8ae96d3033010") && images[x].getAttribute("g3facaedf35a582839d38eae4f8c8ae96d3033010") == "true"){
            srcs.push(images[x].src);
        }
        x++;
    }
    
    return srcs;
}

chrome.runtime.sendMessage({
    action: "getImgSource",
    source: IMGtoArray(document)
});