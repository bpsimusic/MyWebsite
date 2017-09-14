/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Projects = __webpack_require__(1);
const Carousel = __webpack_require__(2);

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
  $(".nav-link.active").parent().removeClass("active");
  $(".nav-link.active").removeClass("active");
  
  $(e.target).addClass("active");
  $(e.target).parent().addClass("active");
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
    $('#myCarousel').carousel("pause");
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
    $('#myCarousel').carousel("pause");
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
    let firstChild = $(".active .first-carousel-child").first();
      switch(firstChild.attr("alt")){
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


/***/ }),
/* 1 */
/***/ (function(module, exports) {


const MusicianHub = `
<div class="inserted">
    <div class="imageContainer">
      <a href="http://www.musicianhub.audio/#/"><img class="img-responsive" src="assets/img/portfolio/musicianhub.png" alt="Musician Hub" /></a>
    </div>

  <div class="descriptionContainer">
    <p class="specificProject">Musician Hub</p>
    <div class="project-links">
      <a href="http://www.musicianhub.audio/#/">live</a>
      <a href="https://github.com/bpsimusic/musicianhub">github</a>
    </div>
    <p class="project-desc">MusicianHub is a full-stack web application based off Bandcamp. It uses Ruby on Rails on the backend,
      PostgreSQL for the database, and React.js with a Redux framework for the frontend.</p>
  </div>
</div>`
;

const Liftables = `
<div class="inserted">
  <div class="imageContainer">
    <a href="https://github.com/huynhaaron/liftables"><img class="img-responsive" src="assets/img/portfolio/liftables.png" alt="Liftables" /></a>
  </div>
  <div class="descriptionContainer">
  <p class="project-title">Liftables</p>

    <div class="project-links">
        <a href="https://play.google.com/store/apps/details?id=com.liftables">live</a>
        <a href="https://github.com/huynhaaron/liftables">github</a>
      </div>
      <p class="project-desc">Liftables is a React Native application that uses Firebase as its backend.
        Users can create customized workouts and follow a daily schedule that creates exercises based on the user's personal stats.</p>
  </div>
</div>`
;

const PikachuRacer = `
<div class="inserted">
  <div class="imageContainer">
    <a href="https://bpsimusic.github.io/PikachuRacer/">
    <img class="img-responsive" src="assets/img/portfolio/PikachuRacer.png" alt="Pikachu Racer" />
    </a>
  </div>
  <div class="descriptionContainer">
    <p class="project-title">Pikachu Racer</p>
    <div class="project-links">
      <a href="https://bpsimusic.github.io/PikachuRacer/">live</a>
      <a href="https://github.com/bpsimusic/pikachuracer">github</a>
    </div>
    <p class="project-desc">Pikachu Racer is a game coded using vanilla JavaScript and the Canvas API.
      Sprite and Entity architecture are used to render the images and detect collisions.
      Pikachu Racer is inspired by Super Mario and the Chrome Dinosaur game.</p>
  </div>
</div>`
;
const StayOnTask = `
<div class="inserted">
  <div class="imageContainer">
    <a href="https://chrome.google.com/webstore/detail/stay-on-task/ihopiehopegcihbohemjoicccjdhgnoc">
      <img class="img-responsive" src="assets/img/portfolio/StayOnTask.png" alt="Stay On Task"/>    </a>
  </div>
  <div class="descriptionContainer">
    <p class="project-title">Stay On Task</p>
    <div class="project-links">
      <a href="https://chrome.google.com/webstore/detail/stay-on-task/ihopiehopegcihbohemjoicccjdhgnoc">live</a>
      <a href="https://github.com/bpsimusic/stayontask">github</a>
    </div>
    <p class="project-desc">Stay On Task is a Google Chrome Extension that blocks websites and creates a customized to-do list.
      It uses the chrome.storage API to store websites and tasks,
      as well as content-scripts to provide the user interface on each browser tab.</p>
  </div>
</div>`
;



const RingBuffer = `
<div class="inserted">
  <div class="imageContainer">
    <a href="https://github.com/bpsimusic/StaticDynamicArray">
      <img src="assets/img/portfolio/ringbuffer.png" alt="Ring Buffer"/>
    </a>
  </div>
  <div class="descriptionContainer">
    <p class="specificProject">Dynamic Array, Ring Buffer</p>
    <div class="project-links">
      <a href="https://github.com/bpsimusic/StaticDynamicArray">github</a>
    </div>
    <p class="project-desc">I created my own Dynamic Array from a Static Array in Ruby. Get and set operations take O(1) time,
      push operations take O(1) ammortized time, while shift and unshift operations take O(n) time. I improved shift and unshift operations
      to O(1) time by implementing a Ring Buffer.</p>
  </div>
</div>`
;

const HeapSort = `
<div class="inserted">
  <div class="imageContainer">
    <a href="https://github.com/bpsimusic/HeapSort"></a>
    <img class="img-responsive" src="assets/img/portfolio/heapsort.png" alt="Heapsort" /></a>
  </div>
  <div class="descriptionContainer">
  <p class="project-title">HeapSort</p>

    <div class="project-links">
      <a href="https://github.com/bpsimusic/HeapSort">github</a>
    </div>
    <p class="project-desc">I created a Binary Min Heap in Ruby that can also be used as a Binary Max Heap.
    The heap contains heapify up and heapify down methods, which run in O(log n) time. Using the heap structure,
    I was able to implement Heapsort, which runs in O(n*log n) time and O(1) space.</p>
  </div>
</div>`
;

const QuickSort = `
<div class="inserted">
  <div class="imageContainer">
    <a href="https://github.com/bpsimusic/Quicksort.git">
      <img src="assets/img/portfolio/quicksort.png" alt="Quick Sort" />
    </a>
  </div>
  <div class="descriptionContainer">
    <p class="project-title">Quicksort</p>
    <div class="project-links">
      <a href="https://github.com/bpsimusic/Quicksort">github</a>
    </div>
    <p class="project-desc">I implemented Quicksort in Ruby.
      Time complexity is O(n*log n) for the average case and O(n^2) for the worst case.
    I made a small space optimization by partitioning the array in place. </p>
  </div>
</div>`
;
const HashMap = `
<div class="inserted">
  <div class="imageContainer">
    <a href="https://github.com/bpsimusic/HashMap-LRUCache">
    <img class="img-responsive" src="assets/img/portfolio/HashImage.png" alt="HashMap" />
    </a>
  </div>
  <div class="descriptionContainer">
    <p class="project-title">Hash Map and LRU Cache</p>
    <div class="project-links">
    <a href="https://github.com/bpsimusic/HashMap-LRUCache">github</a>
    </div>
    <p class="project-desc">I implemented my own HashMap in Ruby using a LinkedList and a XOR-based hashing algorithm. CRUD
      operations for the HashMap all run in O(1) time. LRU Cache is created using a HashMap and LinkedList; CRUD operations are also
    O(1).</p>
  </div>
</div>`
;

const BST = `
<div class="inserted">
  <div class="imageContainer">
    <a href="https://github.com/bpsimusic/Binary-Search-Tree"><img class="img-responsive" src="assets/img/portfolio/binarytree.png" alt="Binary Search Tree" /></a>
  </div>
  <div class="descriptionContainer">
    <p class="project-title">Binary Search Tree</p>
    <div class="project-links">
      <a href="https://github.com/bpsimusic/Binary-Search-Tree">github</a>
    </div>
    <p class="project-desc">I created my own BinarySearchTree in Ruby. It has find, insert, and delete operations in O(log n) time.
      It also tells you whether it's balanced, its depth, and contains in-order traversal.
    </p>
  </div>
</div>`
;

const Graphs = `
<div class="inserted">
  <div class="imageContainer">
    <a href="https://github.com/bpsimusic/Graphs"><img class="img-responsive" src="assets/img/portfolio/graph.png" alt="Graphs" /></a>
  </div>
  <div class="descriptionContainer">
    <p class="project-title">Graphs</p>
    <div class="project-links">
      <a href="https://github.com/bpsimusic/Graphs">github</a>
    </div>
    <p class="project-desc">I implemented my own Graph in Ruby by creating Vertex and Edge classes. I implemented Topological Sort using
    Kahn's algorithm. Time complexity is O(|V| + |E|).</p>
  </div>
</div>`
;

module.exports =
{MusicianHub,
 Liftables,
 PikachuRacer,
 StayOnTask,
 QuickSort,
 HeapSort,
 RingBuffer,
 HashMap,
 BST,
 Graphs
                  };


/***/ }),
/* 2 */
/***/ (function(module, exports) {

const setupString = `<div id="myCarousel" class="carousel slide" data-ride="carousel">
  <div class="specificDesc">

  </div>
  <div class="carousel-inner">`;

const controlsString = `</div>

      <a class="left carousel-control" href="#myCarousel" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
        <span class="sr-only">Next</span>
      </a>
  </div>`;


module.exports={
  setupString,
  controlsString
};


/***/ })
/******/ ]);