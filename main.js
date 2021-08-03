$(document).ready(function(){
  let scroll_flag = false;
  let prev_scroll = 0;

  const width = $(window).width();
  const height = $(window).height();

  const cs_start_date = new Date(2018,12,17);

  $(".view-trigger").click(function(){
    $("#view-image").attr("src", $(this).attr("src"));
    $(".view").show();
  });
  $(".close, .view").click(function(){
    $('.view').hide();
  });


  const responsive = (x) => {
    if (x.matches) {
      // desktop

      $(document).scroll(function(){
        let scroll = $(document).scrollTop();
        $(".panel").removeClass("active");
        // header
        if(scroll > (height/10)) {
          $(".header").addClass("shrunk");
          $(".header-wrapper").addClass("shrunk");
          if(!scroll_flag){
            $(".scroll-down").hide();
            scroll_flag = true;
          }
        } else {
          $(".header").removeClass("shrunk");
          $(".header-wrapper").removeClass("shrunk");
          
        }

        if(scroll > (height/10) && scroll < (height/2)) {
          $("#panel2").addClass("below");
          $("#panel1").addClass("active").removeClass(["above", "below"]);
        } else if(scroll > (height/2) && scroll < (height)) {
          $("#panel2").addClass("active").removeClass(["above", "below"]);
          $("#panel1").addClass("above"); 
          $("#panel3").addClass("below");
        } else if(scroll > (height) && scroll < (height*1.5)) {
          $("#panel3").addClass("active").removeClass(["above", "below"]);
          $("#panel2").addClass("above");
          $("#panel4").addClass("below");
        } else if(scroll > (height*1.5) && scroll < (height * 2)) {
          $("#panel4").addClass("active").removeClass(["above", "below"]);
          $("#panel3").addClass("above");
          $("#panel5").addClass("below");
        } else if(scroll > (height * 2) && scroll < (height * 2.5)) {
          $("#panel5").addClass("active").removeClass(["above", "below"]);
          $("#panel4").addClass("above");
          $("#panel6").addClass("below");
        } else if(scroll > (height * 2.5)) {
          $("#panel6").addClass("active").removeClass(["above", "below"]);
          $("#panel5").addClass("above");
        }


      $("progress").attr('value', ((scroll / ($(document).height()-height)) * 100) - 10);

      });

      

    } else {
      //mobile

      $(document).scroll(function(){
        let scroll = $(document).scrollTop();
        console.log(scroll);
        $(".panel").removeClass("active");
        // header
        if(scroll > 12) {
          $(".header").addClass("shrunk");
          $(".header-wrapper").addClass("shrunk");
          if(!scroll_flag){
            $(".scroll-down").hide();
            scroll_flag = true;
          }
        } else {
          $(".header").removeClass("shrunk");
          $(".header-wrapper").addClass("shrunk");
          
        }

        if(scroll > 12 && scroll < 250) {
          $("#panel2").addClass("below");
          $("#panel1").addClass("active").removeClass(["above", "below"]);
        } else if(scroll > (height/2) && scroll < (height)) {
          $("#panel2").addClass("active").removeClass(["above", "below"]);
          $("#panel1").addClass("above"); 
          $("#panel3").addClass("below");
        } else if(scroll > (height) && scroll < (height*1.5)) {
          $("#panel3").addClass("active").removeClass(["above", "below"]);
          $("#panel2").addClass("above");
          $("#panel4").addClass("below");
        } else if(scroll > (height*1.5) && scroll < (height * 2)) {
          $("#panel4").addClass("active").removeClass(["above", "below"]);
          $("#panel3").addClass("above");
          $("#panel5").addClass("below");
        } else if(scroll > (height * 2) && scroll < (height * 2.5)) {
          $("#panel5").addClass("active").removeClass(["above", "below"]);
          $("#panel4").addClass("above");
          $("#panel6").addClass("below");
        } else if(scroll > (height * 2.5)) {
          $("#panel6").addClass("active").removeClass(["above", "below"]);
          $("#panel5").addClass("above");
        }


      $("progress").attr('value', ((scroll / ($(document).height()-height)) * 100) - 10);

      });

      

    }
  }
  
  var desktop = window.matchMedia("(min-width: 768px)");
  responsive(desktop);
  desktop.addEventListener("change", responsive); 
});