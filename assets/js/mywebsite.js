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
  }
});
$(".nav-item").on("click", function(e){
  const content = $(e.target).html();
  if(content === "Projects"){
    $(".carousel-inner").empty();
    $(".carousel-inner").html(content1);
  }
});




const content1=`<div class="item active">
  <p>Musician Hub</p>
  <a href="http://www.musicianhub.audio/#/"><img src="assets/img/portfolio/musicianhub.png" alt="Musician Hub" /></a>
  <div class="project-links">
    <a href="http://www.musicianhub.audio/#/">live</a>
    <a href="https://github.com/bpsimusic/musicianhub">github</a>
  </div>
  <p class="project-desc">MusicianHub is a full-stack web application based off Bandcamp. It uses Ruby on Rails on the backend,
    PostgreSQL for the database, and React.js with a Redux framework for the frontend.</p>
</div>

<div class="item">
  <p>Liftables</p>
  <a href="https://github.com/huynhaaron/liftables"><img  src="assets/img/portfolio/liftables.png" alt="Liftables" /></a>
  <div class="project-links">
    <a href="https://play.google.com/store/apps/details?id=com.liftables">live</a>
    <a href="https://github.com/huynhaaron/liftables">github</a>
  </div>
  <p class="project-desc">Liftables is a React Native application that uses Firebase as its backend.
    Users can create customized workouts and follow a daily schedule that creates exercises based on the user's personal stats.</p>
</div>

<div class="item">
  <p>Pikachu Racer</p>
  <a href="https://bpsimusic.github.io/PikachuRacer/"><img src="assets/img/portfolio/PikachuRacer.png" alt="Pikachu Racer" /></a>
  <div class="project-links">
    <a href="https://bpsimusic.github.io/PikachuRacer/">live</a>
    <a href="https://github.com/bpsimusic/pikachuracer">github</a>
  </div>
  <p class="project-desc">Pikachu Racer is a game coded using vanilla JavaScript and the Canvas API.
    Sprite and Entity architecture are used to render the images and detect collisions.
    Pikachu Racer is inspired by Super Mario and the Chrome Dinosaur game.</p>
</div>`;

const content2 = `<div class="item active">
  <p>Dynamic Array, Ring Buffer</p>
  <a href="https://github.com/bpsimusic/StaticDynamicArray"><img src="assets/img/portfolio/ringbuffer.png" alt="Ring Buffer"/></a>
  <div class="project-links">
    <a href="https://github.com/bpsimusic/StaticDynamicArray">github</a>
  </div>
  <p class="project-desc">I created my own Dynamic Array from a Static Array in Ruby. Get and set operations take O(1) time,
    push operations take O(1) ammortized time, while shift and unshift operations take O(n) time. I improved shift and unshift operations
    to O(1) time by implementing a Ring Buffer.</p>
</div>

<div class="item">
  <p>Heaps, Heapsort</p>
  <a href="https://github.com/bpsimusic/HeapSort"><img src="assets/img/portfolio/heapsort.png" alt="Heapsort" /></a>
  <div class="project-links">
    <a href="https://github.com/bpsimusic/HeapSort">github</a>
  </div>
  <p class="project-desc">I created a Binary Min Heap in Ruby that can also be used as a Binary Max Heap.
  The heap contains heapify up and heapify down methods, which run in O(log n) time. Using the heap structure,
  I was able to implement Heapsort, which runs in O(n*log n) time and O(1) space.</p>
</div>

<div class="item">
  <p>Quicksort</p>
  <a href="https://github.com/bpsimusic/Quicksort.git"><img src="assets/img/portfolio/quicksort.png" alt="Quicksort" /></a>
  <div class="project-links">
    <a href="https://github.com/bpsimusic/Quicksort">github</a>
  </div>
  <p class="project-desc">I implemented Quicksort in Ruby.
    Time complexity is O(n*log n) for the average case and O(n^2) for the worst case.
  I made a small space optimization by partitioning the array in place. </p>
</div>`;
