const navLinks = document.querySelectorAll('.nav-section a');
console.log(navLinks);
for (const link of navLinks) {
  console.log(link);
  link.addEventListener('click', function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");

    document.querySelector(href).scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  });
}





