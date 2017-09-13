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
