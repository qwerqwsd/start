
console.clear();

$(document).ready(function(){
  function Topbar__Color(){
    $(window).scroll(function(){
      let s22T = $(window).scrollTop();
     console.log(s22T);
      if(s22T == 0){
        $('.top-bar').removeClass('active');
      }
      else{
        $('.top-bar').addClass('active');
      }
    });
  }
  Topbar__Color();
});
 


AOS.init();

// console.clear();
// $(document).ready(function () {
//   function TopBar__init() {
//     $(window).scroll(function () {
//       let scrollTop = $(window).scrollTop();
//       if (scrollTop == 0) {
//         $(".top-bar").removeClass("hover");
//       } else if (scrollTop >= 100) {
//         $(".top-bar").addClass("hover");
//       }
//     });
//   }
//   TopBar__init();
// });

