    
  $(function(){
    
   $("#nav-icon").on("click", function(){
       $(this).toggleClass("open");
       $("nav ul:last-of-type").toggleClass("show");

   });

   $("header img").addClass("animated fadeInLeft");
   $(window).on("scroll", function(){
     let $item=$(".a").offset();
     let $item2=$(".b").offset();
     let $item3=$(".c").offset();  

     if($(this).scrollTop() >= $item.top - 600){
       $(".a").addClass("animated fadeInLeft");
     }else{
       $(".a").removeClass("animated fadeInLeft");
     }
     if($(this).scrollTop() >=  $item2.top - 600){
       $(".b").addClass("animated fadeInLeft");
     }else{
       $(".b").removeClass("animated fadeInLeft");
     }
     if($(this).scrollTop() > $item3.top - 600){
       $(".c").addClass("animated fadeInLeft");
     }else{
       $(".c").removeClass("animated fadeInLeft");
     }
     
     

   });

 

 });