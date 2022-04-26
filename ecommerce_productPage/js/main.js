$(function(){
    let pQuantity = 0;
    var badgeBg = $('<style>.navbar-img::before{background-color: hsl(26, 100%, 55%);}</style>');
    $("#closeBtn").on("click",function(e){
        e.preventDefault();
        $(".side-nav").css({"width":"0px"});
        $("body").css({"background":"#fff"});
        $(".img-overlay").removeClass("overlay");
    });
    $("#openBtn").on("click",function(){
        $("nav").addClass("transition").css({"width":"250px"});
        $("body").addClass("transition").css({"background":"rgba(0,0,0,75%)"});
        $(".img-overlay").addClass("overlay");
    });
    $('.your-class').slick({
        arrows:true,
        dots:true,
    });
    $("#addBtn").on("click",function(){
        pQuantity +=1;
        $("#operand")[0].textContent = pQuantity;
    });
    $("#subtractBtn").on("click",function(){
        pQuantity -=1;
        if(pQuantity<0){
            pQuantity = 0;
            $("#operand")[0].textContent = pQuantity;
        }
        else{
            $("#operand")[0].textContent = pQuantity;
        }
    })
    
    $("body").on("click",function(e){
        if($(e.target).is(".add-btn")){
            $(".navbar-img").attr("data-before",$("#operand")[0].textContent);
            $("body").append(badgeBg);
            $(".navbar-img input").attr("disabled",false);
            if($("#operand")[0].textContent == 0){
            }
            else{
                $(".qty")[0].textContent = $("#operand")[0].textContent;
                $(".result")[0].textContent = "$" + $(".qty")[0].textContent * 125.00;
            }
        }
        else if($(e.target).is(".navbar-img input:first-of-type")){
            if($("#operand")[0].textContent == 0 ){
                $(".cart-container").toggleClass("cart-box");
                $(".cart-holder").removeClass("cartbox-holder");
            }
            else{
                $(".cart-container").removeClass("cart-box");
                $(".cart-holder").toggleClass("cartbox-holder");
            } 
        }
        
    })

    let imgSrc = [
        "/images/image-product-1.jpg",
        "/images/image-product-2.jpg",
        "/images/image-product-3.jpg",
        "/images/image-product-4.jpg"
    ];

    $(".thumbnails-img").map((img)=>{
        console.log($(".thumbnails-img")[img]);
        $($(".thumbnails-img")[img]).on("click",function(){
            $(".main-img").attr("src",imgSrc[img]);
            $(".lightbox-img").attr("href",imgSrc[img]);
            $(".lightbox-img").attr("data-thumb",imgSrc[img]);
            
        })
    })

    $("#deleteBtn").on("click",function(){
        $(".qty")[0].textContent -= 1;
        $(".result")[0].textContent = "$" + $(".qty")[0].textContent * 125.00;
        if($(".qty")[0].textContent<0){
            $(".qty")[0].textContent = 0;
            $(".result")[0].textContent = "$" + $(".qty")[0].textContent * 125.00;
        }
    });
    
    Fancybox.bind("[data-fancybox]", {
        Thumbs: {
            Carousel: {
                Sync: {
                    friction: 0.9,
                },
            },
        },
    });
    
    
});
