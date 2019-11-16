var getId=document.getElementById("mytext");
var getSize=document.getElementById("size");
var getfontfam=document.getElementById("fontfam");

function makeBold() {    
if (getId.style.fontWeight=="bold"){

    getId.style.fontWeight="normal";
}
    else{
getId.style.fontWeight="bold";
}
}

function makeItalic() {   
if (getId.style.fontStyle=="italic"){

    getId.style.fontStyle="normal";
}
    else{
getId.style.fontStyle="italic";
}
}
function makeUnderline() {   
if (getId.style.textDecoration=="underline"){

    getId.style.textDecoration="";
}
    else{
getId.style.textDecoration="underline";
}}

function changeSize() {
    getId.style.fontSize=getSize.value;
}
function changefontfam() {
    getId.style.fontFamily=getfontfam.value;
}
