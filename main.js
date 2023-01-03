/* abre e fecha o menu quando clicar no ícone */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
};

/* quando clicar em um item no menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
};

// Change Header Background on Scrolling
window.addEventListener("scroll", () => {
  if (this.scrollY >= 85) {
    headerMenu.classList.add("on-scroll");
  } else {
    headerMenu.classList.remove("on-scroll");
  }
});


