const Projects = require('./projects');
const Carousel = require('./carousel');

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

/*Navbar functionality for projects*/
$(".nav-item").on("click", function(e){
  $(".nav-link.active").removeClass("active");
  $(e.target).addClass("active");
});

$(".nav-item").on("click", function(e){
  const content = $(e.target).html();
  if(content === "Algorithms"){
    $("#myCarousel").remove();
    let newCarousel = Carousel.setupString + content2 + Carousel.controlsString;
    $("#projects").append(newCarousel);
    attachCarouselClickListeners();
    attachClickListeners();
    $('#myCarousel').bind('slide.bs.carousel', onSlide);
    $(".specificDesc").empty();
    $(".specificDesc").html(Projects.RingBuffer);
  }
});
$(".nav-item").on("click", function(e){
  const content = $(e.target).html();
  if(content === "Projects"){
    $("#myCarousel").remove();
    let newCarousel = Carousel.setupString + content1 + Carousel.controlsString;
    $("#projects").append(newCarousel);
    attachCarouselClickListeners();
    attachClickListeners();
    $('#myCarousel').bind('slide.bs.carousel', onSlide);
    $(".specificDesc").empty();
    $(".specificDesc").html(Projects.MusicianHub);
  }
});

/**/

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
      case "HashMap":
        $(".specificDesc").html(Projects.HashMap);
        break;
      case "Binary Search Tree":
        $(".specificDesc").html(Projects.BST);
        break;
      case "Graphs":
        $(".specificDesc").html(Projects.Graphs);
        break;
      default: break;
    }
  });
}

function attachCarouselClickListeners(){
  $(".carousel-control").click((e)=>{
    e.preventDefault();
    if($(".initial").length <=4) {
      return;
    }
    $(".specificDesc").empty();
    let content = $(".active .first-carousel-child").first();
      switch(content.attr("alt")){
        case "Musician Hub":
          $(".specificDesc").html(Projects.MusicianHub);
          break;
        case "Ring Buffer":
          $(".specificDesc").html(Projects.BST);
          break;
        case "Binary Search Tree":
          $(".specificDesc").html(Projects.RingBuffer);
          break;
        default: break;
        }
  });
}


function onSlide(event){
    $(".specificDesc").empty();
    let c = $(".active .first-carousel-child").first();
      switch(c.attr("alt")){
        case "Musician Hub":
          $(".specificDesc").html(Projects.MusicianHub);
          break;
        case "Ring Buffer":
          $(".specificDesc").html(Projects.BST);
          break;
        case "Binary Search Tree":
          $(".specificDesc").html(Projects.RingBuffer);
          break;
        default: break;
    }
}

function onSlide(event) {
    $(".specificDesc").empty();
    let c = $(".active .first-carousel-child").first();
      switch(c.attr("alt")){
        case "Musician Hub":
          $(".specificDesc").html(Projects.MusicianHub);
          break;
        case "Ring Buffer":
          $(".specificDesc").html(Projects.BST);
          break;
        case "Binary Search Tree":
          $(".specificDesc").html(Projects.RingBuffer);
          break;
        default: break;
        }

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
  <div class="initial">
    <a href="#"><img src="assets/img/portfolio/StayOnTask.png" alt="Stay On Task" /></a>
  </div>
</div>`;

const content2=`<div class="item active">
  <div class="initial">
    <a href="#"><img class="first-carousel-child" src="assets/img/portfolio/ringbuffer.png" alt="Ring Buffer" /></a>
  </div>
  <div class="initial">
    <a href="#"><img src="assets/img/portfolio/quicksort.png" alt="Quick Sort" /></a>
  </div>
  <div class="initial">
    <a href="#"><img src="assets/img/portfolio/heapsort.png" alt="Heap Sort" /></a>
  </div>
  <div class="initial">
    <a href="https://github.com/bpsimusic/HashMap-LRUCache"><img src="assets/img/portfolio/HashImage.png" alt="HashMap" /></a>
  </div>
</div>
<div class="item">
  <div class="initial">
    <a href="https://github.com/bpsimusic/Binary-Search-Tree"><img class="first-carousel-child" src="assets/img/portfolio/binarytree.png" alt="Binary Search Tree" /></a>
  </div>
  <div class="initial">
    <a href="https://github.com/bpsimusic/Graphs"><img src="assets/img/portfolio/graph.png" alt="Graphs" /></a>
  </div>
</div>`;
