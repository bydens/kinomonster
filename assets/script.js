const slides = document.querySelectorAll('.hero>li');
const dots =document.querySelectorAll('.next-main-slider-dots>span');
let activeSlide = 0;

const onSlide = index => {
  slides.forEach(slide => slide.style.display = 'none');
  slides[index].style.display = 'block';
  dots.forEach(item => item.removeAttribute('class'));
  dots[index].className = 'active';
}

dots[activeSlide].className = 'active';
onSlide(activeSlide);

setInterval(() => {
  onSlide(activeSlide)
  activeSlide++;
  if(activeSlide === slides.length) {
    activeSlide = 0;
  }
}, 3000)

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    onSlide(index)
  })
})
