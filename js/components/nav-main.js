const navMain = document.querySelector('.nav-main');

navMain.innerHTML +=
  `<div class="container">
  <input type="checkbox" id="hamburger-menu">
  <label for="hamburger-menu" class="hamburger-menu">
    <span class="bars bar-one"></span>
    <span class="bars bar-two"></span>
    <span class="bars bar-three"></span>
  </label>
  <ul class="nav-main__list">
    <li><a href="../../index.html" title="Community Science Museum || Home Page">Home</a></li>
    <li><a href="../../layout/explore.html" title="Community Science Museum || Explore Our Museum">Explore</a></li>
    <li><a href="../../layout/exhib-spaces.html" title="Community Science Museum || Exhibition Spaces">Exhibition Spaces</a></li>
    <li><a href="../../layout/events.html" title="Community Science Museum || Special Events & Exhibitions">Special Events & Exhibitions</a></li>
    <li><a href="../../layout/get-involved.html" title="Community Science Museum || Get Involved">Get Involved</a></li>
    <li><a href="../../layout/visit.html" title="Community Science Museum || Visit Our Museum">Visit</a></li>
    <li><a href="../../layout/contact.html" title="Community Science Museum || Contact">Contact</a></li>
  </ul>
  <a href="../../index.html" class="logo">
    <span class="first-letter">C</span><span class="invisible">ommunity</span> <span
      class="first-letter">S</span><span class="invisible">ience</span> <span class="first-letter">M</span><span
      class="invisible">useum</span></a>
</div>`

const hamburgerButton = document.querySelector('.hamburger-menu');

const navMainList = document.querySelectorAll('.nav-main__list a');

for (let element of navMainList) {
  element.addEventListener('click', function (e) {
    e.preventDefault();
    location.href = element.href;
    element.style.transform = translateX(0);
  });
}






// setTimeout(function () {
//   for (let element of navMainList) {

//     element.addEventListener('click', function (e) {
//       e.preventDefault();
//       element.classList.add('orange');
//       console.log(element)
//     });
//   }
// }, 1000);




