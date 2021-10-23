//text glitch effect
const text = document.querySelectorAll('.glitchText');
const toggleClass = (el, className) => el.classList.toggle(className);
let i = 0;

function doSomething(i) {
		toggleClass(text[i], 'glitch')
		toggleClass(text[i], 'glitch2')
}

(function loop() {
    let rand = Math.floor(Math.random() * (6000)) + 900;
    setTimeout(function() {
            doSomething(Math.floor(Math.random() * 7));
            loop();
    }, rand);
}());


//smooth scroll
// SMOOTH SCROLL FUNCTIONALITY
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });



$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover:false,
        responsive: [{
            breakpoint:768,
            settings:{
                slidesToShow:4
            }
        },{
            breakpoint:520,
            settings:{
                slidesToShow:3
            }
        }
    ]
    });
});
//readmore
const parentContainer = document.querySelector('.read-more-container');

parentContainer.addEventListener('click',event=>{
    const current = event.target;
    const isReadMorebtn = current.className.includes('read-more-btn');
    if(!isReadMorebtn)return;
    const currentText  = event.target.parentNode.querySelector('.read-more-text');
    currentText.classList.toggle('read-more-text--show');
    current.textContent = current.textContent.includes('Afficher plus') ? "Afficher moins..." : "Afficher plus...";
})
