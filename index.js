window.addEventListener("load",()=>{

    $('.icon-menu').click(function(){
        $('header nav').slideToggle();  
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        lazyLoad: true,
        autoplayTimeout: 2000,
        smartSpeed: 3200,
        autoplay:true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    document.addEventListener("scroll",()=>{
        scrollable();
    });
});


function scrollable(){
    const screen = window.scrollY;
    const menu = document.querySelector(".menu");
    const menuP = document.querySelector(".menu p");
    const links = Object.values(document.querySelectorAll(".menu a"));


    if(screen >= 100){
    
        menu.style.position="fixed";
        menu.style.width="100%";
        menu.style.top="0";
        menu.style.background="white";
        menuP.style.color="black";
        menu.style.boxShadow = "6px 1px 3px #000";
        menu.style.zIndex ="100";
        links.forEach(item => item.style.color = "black");

    }
    else{
        menu.style.position="relative";
        menu.style.background ="transparent";
        menu.style.boxShadow= "0 0 0";
        menuP.style.color="#fff";
        links.forEach(item => item.style.color = "#fff");
        
    }
}