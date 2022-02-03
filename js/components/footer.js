const footer = document.querySelector('.footer');

footer.innerHTML +=
  `<div class="container">
  <div class="newsletter-subscribe">
    <p>Subscribe<span class="exclamation-mark">!</span> <span class="invisible__to-newsletter">to
        newsletter!</span>
    </p>
    <a class="btn btn__sign-up" href="#">Sign up!</a>
  </div>
  <div class="social-media__wrapper">
    <a href="#"><i class="fab fa-facebook"></i></a>
    <a href="#"><i class="fab fa-twitter"></i></a>
    <a href="#"><i class="fab fa-instagram"></i></a>
    <a href="#"><i class="fab fa-youtube"></i></a>
  </div>
  <div class="footer-nav__wrapper">
    <ul class="nav-footer__list">
      <li><a href="../../index.html" title="Community Sience Museum || Home Page">Home</a></li>
      <li><a href="../../layout/explore.html" title="Community Sience Museum || Explore Our Museum">Explore</a></li>
      <li><a href="../../layout/exhib-spaces.html" title="Community Sience Museum || Exhibition Spaces">Exhibition Spaces</a></li>
      <li><a href="../../layout/events.html" title="Community Sience Museum || Special Events & Exhibitions">Special Events & Exhibitions</a></li>
      <li><a href="../../layout/get-involved.html" title="Community Sience Museum || Get Involved">Get Involved</a></li>
      <li><a href="../../layout/visit.html" title="Community Sience Museum || Visit Our Museum">Visit</a></li>
    </ul>
  </div>
  <div class="footer-sub-nav__wrapper">
    <ul class="nav_explore">
    <li><a href="../../layout/explore.html" title="Community Sience Museum || Explore Our Museum">Explore</a></li>
      <li><a href="../../layout/explore__sub-web/for-kids.html" title="Community Sience Museum || Explore Our Museum - For Kids">For kids</a></li>
      <li><a href="../../layout/explore__sub-web/for-teachers.html" title="Community Sience Museum || Explore Our Museum - For Teachers">For teachers</a></li>
      <li><a href="../../layout/explore__sub-web/for-researchers.html" title="Community Sience Museum || Explore Our Museum - For Researchers">For researchers</a></li>
    </ul>
    <ul class="nav_exhibition-spaces">
      <li><a href="../../layout/exhib-spaces.html" title="Community Sience Museum || Exhibition Spaces">Exhibition Spaces</a></li>
      <li><a href="../../layout/exhib__sub-web/cosmology.html" title="Community Sience Museum || Exhibition Spaces - Cosmology">Cosmology</a></li>
      <li><a href="../../layout/exhib__sub-web/evolution.html" title="Community Sience Museum || Exhibition Spaces - Evolution">Evolution</a></li>
      <li><a href="../../layout/exhib__sub-web/biology.html" title="Community Sience Museum || Exhibition Spaces - Biology & Medicine">Biology and medicine</a></li>
      <li><a href="../../layout/exhib__sub-web/robotics.html" title="Community Sience Museum || Exhibition Spaces - Robotics & AIs">Robotics & AI</a></li>
      <li><a href="../../layout/exhib__sub-web/ecology.html" title="Community Sience Museum || Exhibition Spaces - Ecology">Ecology</a></li>
    </ul>
    <ul class="nav_museum-info">
      <li><a href="../../layout/events.html#prof-aeronautics" title="Community Sience Museum || Special Events & Exhibitions#prof-aeronautics">Visiting Professor of Aeronautics</a></li>
      <li><a href="../../layout/events.html#night-in-museum" title="Community Sience Museum || Special Events & Exhibitions#night-in-museum">Night in the Museum</a></li>
      <li><a href="../../layout/events.html#energetica" title="Community Sience Museum || Special Events & Exhibitions#energetica">Energetica Exhibition on Loan</a></li>
    </ul>
  </div>
  <div class="location__wrapper">
    <ul>
      <li>Location</li>
      <li>The museum is located at:</li>
      <li>Kjelsåsveien 143, 0491 Oslo, Norway</li>
    </ul>
  </div>
  <div class="map__wrapper">
    <map name="museum-location">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1996.9028013622758!2d10.781189416098105!3d59.966935781886484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464171e7f06b20d1%3A0xa4dc7a6bef326423!2sKjels%C3%A5sveien%20143%2C%200491%20Oslo%2C%20Norway!5e0!3m2!1sen!2sua!4v1642270076151!5m2!1sen!2sua"
        style="border:0;" allowfullscreen=""></iframe>
    </map>
  </div>
  <ul class="opening-hours">
    <li>Opening hours</li>
    <li>Monday: Closed</li>
    <li>Tuesday: 10:00 - 16:00</li>
    <li>Wensday: 10:00 - 16:00</li>
    <li>Thursday: 10:00 - 16:00</li>
    <li>Friday: 10:00 - 19:00</li>
    <li>Saturday: 9:00 - 16:00</li>
    <li>Saturday: 9:00 - 13:00</li>
  </ul>
</div>
<div class="copyright">
  <ul onclick="location.href='tel:+4793928270'">
    <li>&copy; 2022 Community Science Museum,&nbsp;</li>
    <li>Oslo, Norway &&nbsp;</li>
    <li>Mariusz Rozycki,&nbsp;</li>
    <li>+47 939 28 270</li>
  </ul>
</div>`