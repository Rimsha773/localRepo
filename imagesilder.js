const fullImgBox= document.querySelector("#fullimgBox");
const fullImg=document.querySelector("#fullimg");

function openfullImg(pic){
    fullImgBox.style.display="flex";
    fullImg.src=pic;
}

function closefullImg(){

fullImgBox.style.display="none";
}
