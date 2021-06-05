class Retype {
  constructor() {
    this.retypePhrases = ['Hola.', 'Ciao.', 'Bonjour.', 'Hallo.', 'Hello.'];
    this.element = document.getElementById('retype');
    this.index = -1;
    this.start();
  }

  start() {
    setTimeout(() => {
      this.deleteLetter();
    }, 2000);
  }

  deleteLetter() {
    let word = this.element.innerHTML;
    if (word.length > 0) {
      word = word.substring(0, word.length - 1);
      setTimeout(() => {
        this.element.innerHTML = word;
        this.deleteLetter();
      }, 75);
    } else {
      this.newLetter();
    }
  }

  newLetter() {
    let word = this.element.innerHTML;

    if (word.length === 0) {
      this.index++;
      if (this.index >= this.retypePhrases.length) {
        this.index = 0;
      }
    }

    let newLetters = this.retypePhrases[this.index];

    if (newLetters.length > word.length) {
      newLetters = newLetters.substring(0, word.length + 1);
      let time = Math.round(Math.random() * 100) + 100;
      setTimeout(() => {
        this.element.innerHTML = newLetters;
        this.newLetter();
      }, time);
    } else {
      this.start();
    }
  }
}

new Retype();
