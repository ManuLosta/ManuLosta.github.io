const faders = document.querySelector('.fade-in');

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      console.log('hola');
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
});

appearOnScroll.observe(faders);
