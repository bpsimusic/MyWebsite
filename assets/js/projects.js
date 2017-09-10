
const MusicianHub = `
<div class="inserted">
  <div class="imageContainer">
    <a href="http://www.musicianhub.audio/#/"><img src="assets/img/portfolio/musicianhub.png" alt="Musician Hub" /></a>
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

module.exports =
{MusicianHub,
 Liftables,
 PikachuRacer,
 QuickSort,
 HeapSort,
 RingBuffer
                  };
