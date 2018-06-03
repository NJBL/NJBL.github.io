window.onload = function(){
  document.querySelector('.hamburger').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.menu').classList.toggle("show-menu");
    document.querySelectorAll('.h-icon').forEach(function(elem){
      elem.classList.toggle("ham-show-menu");
    });
  });
  document.querySelectorAll('.arrow').forEach(function(elem){
    elem.addEventListener('click', function (e) {
      window.scrollTo(0, 0);
    });
  });
}
