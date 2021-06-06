const scrollText = document.getElementById('scroll');
const title = document.getElementById('title');
const progressBar = document.getElementById('progressbar');

window.onscroll = e => {
  let position = pageYOffset;
  let totalHeight = document.body.scrollHeight - innerHeight;
  let progressHeight = (position / totalHeight) * 100;

  progressBar.style.height = progressHeight + '%';

  if (position <= 100) {
    title.style.left = 0 + 'px';
  }

  if (position > 100) {
    scrollText.classList.add('hidden');
    title.style.left = -position + 100 + 'px';
  }
};
