const checkpoint = 600;
const slides = document.querySelectorAll('.hero>li');
const dots = document.querySelectorAll('.next-main-slider-dots>span');

const header = document.querySelector('.header-nav');

const mobileMenuElement = document.querySelector('.second-menu-mobile');
const mobileMenuBtnElement = document.querySelector('.mobile-btn');


let activeSlide = 0;
let opacity = 1;

const onSlide = index => {
  slides.forEach(slide => slide.style.display = 'none');
  slides[index].style.display = 'block';
  dots.forEach(item => item.removeAttribute('class'));
  dots[index].className = 'active';
}

mobileMenuElement.style.display = 'none';

if (dots.length) {
  dots[activeSlide].className = 'active';
}
onSlide(activeSlide);

setInterval(() => {
  onSlide(activeSlide);
  activeSlide++;
  if (activeSlide === slides.length) {
    activeSlide = 0;
  }
}, 3000);

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    onSlide(index)
  });
});


window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  header.style.backgroundColor = 'transparent';
  opacity = 1 - currentScroll / checkpoint;

  if (currentScroll >= checkpoint) {
    header.style.backgroundColor = '#000000';
    opacity = 0;
  }

  slides.forEach(item => {
    item.getElementsByTagName('img')[0].style.opacity = String(opacity);
  })
});

mobileMenuBtnElement.addEventListener('click', () => {
  if (mobileMenuElement.style.display === 'block') {
    mobileMenuElement.style.display = 'none';
    return;
  }
  mobileMenuElement.style.display = 'block';
})
