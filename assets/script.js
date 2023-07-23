const slides = document.querySelectorAll('.hero>li');
const dots =document.querySelectorAll('.next-main-slider-dots>span');
let activeSlide = 0;

const onSlide = index => {
  slides.forEach(slide => slide.style.display = 'none');
  slides[index].style.display = 'block';
}

dots[activeSlide].className = 'active';
onSlide(activeSlide);

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    dots.forEach(item => item.removeAttribute('class'));
    dot.className = 'active'

    onSlide(index)
  })
})
