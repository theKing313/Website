const burger = document.querySelector('.header__burger');
const menuLink = document.querySelectorAll('.menu__link');
const menuList = document.querySelector('.menu');
burger.onclick = function(){
   burger.classList.toggle('_active');
   menuLink.forEach(element => {
      element.classList.add('_active');
   });
   menuList.classList.toggle('_active');
}
const search  = document.querySelector('.search-form__icon');
search.addEventListener('click',(event)=>{
   event.preventDefault();
   document.querySelector('.search-form__item').classList.toggle('_active');
})

const swiper = new Swiper('.swiper', {
   // Optional parameters
 
   loop: true,
   observer: true,
   // If we need pagination
   pagination: {
     el: '.controls-slider-maim__dots',
     renderFraction:	function(currentClass, className)	{
				
      return '0<span class = " '+currentClass + ' ">   </span>'
    },
    type: 'fraction',
   },
 
   // Navigation arrows
   navigation: {
     nextEl: '.controls-slider-next',
     prevEl: '.controls-slider-prev',
   },
 
   // And if we need scrollbar
   scrollbar: {
     el: '.swiper-scrollbar',
   },
   parallax:true,
   speed:2600,
   spaceBetween: 80,
 });
 