
$("document").ready(function(){
  

    //aos.init() function used to run animation on element when scroll
    AOS.init();

    //.carousel() function used to run slider
    $('.carousel').carousel() ;


    ///////////navbar shrink////////////////////////////////////////
  $(this).scroll(function() {
        
  if ($("body").scrollTop() > 80 || $("*").scrollTop() > 80) {
    $(".navbar").css({
        "padding":"5px 0 5px 0",
        "position":"fixed",
        "backgroundColor":"black",
        "width":"100%"
       
    });
    $(".navbar-brand img").css({"height":"60px"})

  } else {
    $(".navbar").css({
        "padding":"20px 0 50px 0",
        "position":"static",
        "backgroundColor":"transparent"
    });
    $(".navbar-brand img").css({"height":"102px"})
  }
   
  

  ///////color navbar links when thier section appear//////////////////////////
//   $("section").each(function(i){

//     if($(this).offset().top <= $(window).scrollTop())
//     {
//         $(".navbar-nav li a.activ").removeClass("activ");
//         $(".navbar-nav li a").eq(i+1).addClass("activ");
//     }
// })

})



 //smooth scroll to section
 $('.navbar a[href*="#"]').on('click',function(e){
    e.preventDefault();//prevent hard jump the default behavior
    var target=$(this).attr("href");
    //perform animating scrolling by getting top position of target element and set it as scroll target
    $('html,body').animate({
        scrollTop: $(target).offset().top

    },600,function(){
        location.hash=target;// attatch the hash (#jumptarget)to the page url 
    })


   return false;
})


  //////////////appear scroll to top button/////////////////


$(this).scroll(function () {
  if ($("body").scrollTop() > 100 || $("*").scrollTop() > 100) {
      $("#gotoTop").css("display", "block")


  } else {
      $("#gotoTop").css("display", "none")

  }
});

// When the user clicks on the button, scroll to the top of the document
$("#gotoTop").click(function () {

  $("body").animate({  // For Safari
      scrollTop: "0"
  },1000,function(){
    location.hash= "#home";// attatch the hash (#jumptarget)to the page url 
})
  $("*").animate({    // For Chrome, Firefox, IE and Opera
      scrollTop: "0"
  }, 1000,function(){
    location.hash= "#home";// attatch the hash (#jumptarget)to the page url 
})
});
















// ////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////select menu of dishes/////////////////////////
var Class ="";
$(".List  li.category").on('click', function () {
    $(this).addClass('act').siblings().removeClass('act');
     Class = $(this).attr("data-rel");
    $(".gal").fadeOut(500)
    $(".gal").not("." + Class).fadeOut(500)
    $("."+ Class).fadeIn(1000);
  
   
});




////////////////////////////////////////////////////////

var date,time,tableNum,chearNum;




var f = " ";

  ////////////////////time show//////////////////////
  
  $("input#dat").on("change",function(){
    
    if($(this).val()){
       $(".time-show ").show();
    }
     
    $("a.piker").on("click", function(){
     
      $(this).addClass("choose");
      $("a.piker").not($(this)).removeClass("choose")
       f= $(this).text();
      time=$(this).text()

   }) 
  

  })


var flag;
///////////////button table  action///////////////////////
$("#plan button").on("click",function(){
 
 
  if(!($("input#dat").val()) || f == " ")
  {
    console.log(!$(".vv a").is(":focus"))
    toastr.warning('Please ,select date and time!')
     flag=false;
     
  }

  
  else{
    
      date= $("input#dat").val();   
      tableNum=$(this).text();
      chearNum=$(this).attr("value");
      
      flag=true;
    }
    return flag;
  })
  

 

  $(".gg").carousel('pause');
  $( "#dat" ).datepicker();


$(".reserve").on('click',function(){
 
   
  if(flag){
    
    
   $("#ot1").text("No."+ tableNum);
   $("#ot2").text(chearNum);
   $("#ot3").text(date);
   $("#ot4").text(time);
    

   $(".jumbotron").show(1000);
   $(".row1 ,.row2").hide(1000);
   

  }
  else{
         
         ///////add message to selesct table 
        toastr.warning('Please ,select a table!')
  }


})



$(".chng").on('click',function(){
 
  $(".jumbotron").hide(800);
   $(".row1,.row2").show(800);

})


$(".conf").on('click',function(){
  
  if(!($(".inpts input").val()))
  {
    ///////////////////toast message///////////////
    
   toastr.warning("please ,fill all the field correctly");
}
  else
  {
   
    $(".jumbotron").hide();
    $(".row1,.row2").hide();
    $(".hed").hide();
    $(".reserve").hide();
    var n=$("#client").val()
    
     $(".bord h1").html(" "+ n + "<br><br>"+ "Thank for your reservation! " +  "<br><br>" );
     $(".msg").show();



  }

})


})


 
