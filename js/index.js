const scrollText = document.getElementById('scroll');
const title = document.getElementById('title');

window.onscroll = e => {
  let position = pageYOffset;

  if (position <= 100) {
    title.style.left = 0 + 'px';
  }

  if (position > 100) {
    scrollText.classList.add('hidden');
    title.style.left = -position + 100 + 'px';
  }
};
