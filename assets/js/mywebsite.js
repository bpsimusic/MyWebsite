const Projects = require('./projects.js');

$(()=>{
  $(".specificDesc").html(Projects.MusicianHub);
  attachClickListeners();
});

$(".work").on("click", function(e){
  $('html, body').animate({
    scrollTop: $(".workContainer").offset().top -25
  }, "slow");
});
$(".about").on("click", function(e){
  $('html, body').animate({
    scrollTop: $(".welcomeContainer").offset().top -30
  }, "slow");
});
$(".skills").on("click", function(e){
  $('html, body').animate({
    scrollTop: $(".skillsSection").offset().top -50
  }, "slow");
});
$(".contact").on("click", function(e){
  $('html, body').animate({
    scrollTop: $(".contactContainer").offset().top
  }, "slow");
});

$(".nav-item").on("click", function(e){
  $(".nav-link.active").removeClass("active");
  $(e.target).addClass("active");
});

$(".nav-item").on("click", function(e){
  const content = $(e.target).html();
  if(content === "Algorithms"){
    $(".carousel-inner").empty();
    $(".carousel-inner").html(content2);
    attachClickListeners();
  }
});
$(".nav-item").on("click", function(e){
  const content = $(e.target).html();
  if(content === "Projects"){
    $(".carousel-inner").empty();
    $(".carousel-inner").html(content1);
    attachClickListeners();
  }
});

function attachClickListeners(){
  $(".initial").on("click", function(e){
    e.preventDefault();
    const content = $(e.currentTarget).find("img");
    $(".specificDesc").empty();
    switch(content.attr("alt")){
      case "Musician Hub":
        $(".specificDesc").html(Projects.MusicianHub);
        break;
      case "Liftables":
        $(".specificDesc").html(Projects.Liftables);
        break;
      case "Pikachu Racer":
        $(".specificDesc").html(Projects.PikachuRacer);
        break;
      case "Stay On Task":
        $(".specificDesc").html(Projects.StayOnTask);
        break;
      case "Ring Buffer":
        $(".specificDesc").html(Projects.RingBuffer);
        break;
      case "Quick Sort":
        $(".specificDesc").html(Projects.QuickSort);
        break;
      case "Heap Sort":
        $(".specificDesc").html(Projects.HeapSort);
        break;
      default: break;
    }
  });
}




const content1=`<div class="item active">
  <div class="initial">
    <a href="#"><img src="assets/img/portfolio/musicianhub.png" alt="Musician Hub" /></a>
  </div>
  <div class="initial">
    <a href="#"><img  src="assets/img/portfolio/liftables.png" alt="Liftables" /></a>
  </div>
  <div class="initial">
    <a href="#"><img src="assets/img/portfolio/PikachuRacer.png" alt="Pikachu Racer" /></a>
  </div>
</div>`;

const content2=`<div class="item active">
  <div class="initial">
    <a href="#"><img src="assets/img/portfolio/ringbuffer.png" alt="Ring Buffer" /></a>
  </div>
  <div class="initial">
    <a href="#"><img src="assets/img/portfolio/quicksort.png" alt="Quick Sort" /></a>
  </div>
  <div class="initial">
    <a href="#"><img src="assets/img/portfolio/heapsort.png" alt="Heap Sort" /></a>
  </div>
</div>`;
