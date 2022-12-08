// CITATION: https://trvswgnr.github.io/bs5-lightbox/
import Lightbox from 'bs5-lightbox';

const options = {
	keyboard: true,
	size: 'fullscreen'
};

document.querySelectorAll('.my-lightbox-toggle').forEach((el) => el.addEventListener('click', (e) => {
	e.preventDefault();
	const lightbox = new Lightbox(el, options);
	lightbox.show();
}));


// CITATION: https://codepen.io/MiguelCodes/pen/XWdedmw Gradient Scroll Bar
const progressBar = document.querySelector("#progressBar");
let totalPageHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = () => {
  let newProgressHeight = (window.pageYOffset / totalPageHeight) * 100;
  progressBar.style.height = `${newProgressHeight}%`;
  progressBar.style.opacity = `${newProgressHeight}%`;
};

