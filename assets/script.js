let imgSlide = document.getElementById("imageSlides");
let arrImage =["assets/image/imgMesjidAgung.png","assets/image/imgGedungPerpus.png","assets/image/imgBandarSerai.png"];
let conImage = document.getElementById("contentImage");

var pos = 0;
automaticSlide();
function automaticSlide(){
    conImage.style.display='none';
    if(pos>=3){
        pos = 0;
    }
    conImage.style.display="inline";
    imgSlide.src=arrImage[pos];
    pos++;
    setTimeout(automaticSlide,6000);
}