//tooltips

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});


//carrusel
var myCarousel = document.getElementById('myCarousel')
myCarousel.addEventListener('slide.bs.carousel', function () {
do something...
}


//cards
let FuncionToggle = () => {
 for (let i = 0; i <= 2; i++){
  let relatedCardsParagraphs =
    document.getElementsByClassName("card-text")[i];
  relatedCardsParagraphs.classList.toggle("mystyle");
 }
};


