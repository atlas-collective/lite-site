// header logo switching trigger
if (
  "IntersectionObserver" in window &&
  "IntersectionObserverEntry" in window &&
  "intersectionRatio" in window.IntersectionObserverEntry.prototype
) {
let observer = new IntersectionObserver(entries => {
  if (entries[0].boundingClientRect.y < 0) {
    document.body.classList.add("header-not-at-top");
    //console.log(entries[0].boundingClientRect.y);
    //console.log('** header minimial @ ' + Date.now().toString() + ' ** ');
  } else {
    document.body.classList.remove("header-not-at-top");
    //console.log('** header full @ ' + Date.now().toString() + ' ** ');
    //console.log(entries[0].boundingClientRect.y);
  }
});
observer.observe(document.querySelector("#topanchor"));
}
// animation triggering on all animated elements
const animatedElements = document.querySelectorAll('.animate__animated');

function handleIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      //console.log('triggering animation for:');
      //console.log(entry.target);
      if(entry.target.className.indexOf('hasFired') > -1) {
          //console.log('already fired');
      } else {
        //console.log('animations:');
        //console.log(entry.target.dataset.animations);
        entry.target.className += " hasFired " + entry.target.dataset.animations;
      }
    } else {
      //entry.target.classList.remove('visible')
      //no need to clean up - only animate once
    }
  });
}

const animObserver = new IntersectionObserver(handleIntersection);
for (var i = animatedElements.length - 1; i >= 0; i--) {
  animObserver.observe(animatedElements[i]);
}
// lazy loading images
var lazyLoadInstance = new LazyLoad({
  // Your custom settings go here
  threshold: 500
});


// smooth scroll anchor links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

