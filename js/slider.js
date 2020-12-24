$(document).ready(() => {
    let currentSlide =0;
    let isBusy = false;

    $('.slider-arrow').on('click',function(e){
        const slidesCount = slides.lenght - 1;
        if(!isBusy){
            if($(this).hasClass('right')){
                currentSlide +=1;
                if(currentSlide > slidesCount) currentSlide=0;
            }else{
                currentSlide -=1;
                if(currentSlide<0) currentSlide = slidesCount;
            }
            isBusy =true;
            $('.slider-image').animate({'opacity':0},350,()=>{
                $('.slider-image').css('background-image','url('+slides[currentSlide]+')');
                $('.slider-image').animate({'opacity':1},350,()=> isBusy=false);
            });
        }

    });

});

const slides =[
    '../icons/blog/blog00.jpg',
    '../icons/blog/blog01.jpg',
    '../icons/blog/blog02.jpg',
    '../icons/blog/blog03.jpg',
    '../icons/blog/blog04.jpg',
    '../icons/blog/blog05.jpg',
    '../icons/blog/blog06.jpg',
    '../icons/blog/blog07.jpg',
]