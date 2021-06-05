// start the site scrolled to hide the first section
window.scrollTo(0, 200);

const scrollText = document.getElementById('scroll');
const title = document.getElementById('title');

window.onscroll = e => {
  let position = pageYOffset;

  if (position <= 200) {
    title.style.left = 0 + 'px';
    scrollText.classList.remove('hidden');
  } else if (position > 300) {
    scrollText.classList.add('hidden');
    title.style.left = -position + 300 + 'px';
  }
};
