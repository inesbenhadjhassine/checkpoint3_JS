var getId=document.getElementById("mytext");
var getSize=document.getElementById("size");
var getfontfam=document.getElementById("fontfam");

function makeBold() {    
if (getId.style.fontWeight=="bold"){

    getId.style.fontWeight="normal";
}
getId.style.fontWeight="bold";
}


function makeItalic() {   
if (getId.style.fontStyle=="Italic"){

    getId.style.fontStyle="normal";
}
getId.style.fontStyle="Italic";
}
function makeUnderline() {   
if (getId.style.textDecoration=="underline"){

    getId.style.textDecoration="";
}
getId.style.textDecoration="underline";
}

function changeSize() {
    getId.style.fontSize=getSize.value;
}
function changefontfam() {
    getId.style.fontFamily=getfontfam.value;
}