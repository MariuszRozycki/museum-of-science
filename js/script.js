const mainSectionWrapper = document.querySelector('.main-section__item-wrapper');

console.log(mainSectionWrapper);
for (let element of mainElements) {
  let link = `<a href="${element.onclick}" title="Community Sience Museum || ${element.category}">${element.linkText} >>></a>`;

  if (document.querySelector('title').innerText === 'Community Sience Museum || Home Page' && element.category === 'home'
    || document.querySelector('title').innerText === 'Community Sience Museum || Explore Our Museum' && element.category === 'explore'
    || document.querySelector('title').innerText === 'Community Sience Museum || Exhibition Spaces' && element.category === 'exhibition'
    || document.querySelector('title').innerText === 'Community Sience Museum || Special Events & Exhibitions' && element.category === 'events'
    || document.querySelector('title').innerText === 'Community Sience Museum || Get Involved' && element.category === 'get-involved') {

    if (element.link && element.category) {
      mainSectionWrapper.innerHTML +=
        `<div class="main-section__item" onclick="location.href='${element.onclick}'">
        <h3 class="sub-title">${element.title}</h3>
        <div id="${element.linkId}" class="main-section__item__img-wrapper">
          <img src="${element.image}" alt="${element.altText}">
        </div>
        <p>${element.description}</p>
        ${link}
    </div>`
    } if (!element.link) {
      mainSectionWrapper.innerHTML +=
        `<div class="main-section__item" onclick="location.href='${element.onclick}'">
        <h3 class="sub-title">${element.title}</h3>
        <div class="main-section__item__img-wrapper">
          <img src="${element.image}" alt="${element.altText}">
        </div>
        <p>${element.description}</p>
      </div>`
    }
  }
}

/* form */
const createAppointment = (appointment) => {
  console.log(appointment);

  const appointmentMessage = document.querySelector('.appointment-message');



  fetch('https://formspree.io/f/xnqogare', {
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify(appointment)
  })
    .then(res => res.json())
    .then(resJSON => {
      console.log(resJSON);

      let html = document.getElementsByTagName('html')[0];
      let htmlAttr = html.getAttribute('lang');
      console.log(htmlAttr);

      appointmentMessage.classList.add('send');
      appointmentMessage.classList.remove('failure');

      if (htmlAttr === 'pl') {
        appointmentMessage.innerText = `Dzięki ${appointment.name}. Wiadomosc wyslana!`;
      } else if (htmlAttr === 'en') {
        appointmentMessage.innerText = `Thank you ${appointment.name}. Your message is sent!`;
      } else {
        appointmentMessage.innerText = `Takk ${appointment.name}. Meldingen din er sendt!`;
      }
    });


}


const appointemntForm = document.getElementById('appointment-form');

appointemntForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const appointmentPhone = document.getElementById('appointment-phone');
  const appointmentMessage = document.querySelector('.appointment-message');
  let formFields = document.getElementsByClassName('form-field');
  let fieldsErrors = 0;
  let appointment = {
    name: document.getElementById('appointment-name').value,
    email: document.getElementById('appointment-email').value,
    city: document.getElementById('appointment-city').value,
    phone: document.getElementById('appointment-phone').value,
    message: document.getElementById('appointment-message').value,
  }

  console.log(typeof appointment.phone.value);


  for (let i = 0; i < formFields.length; i++) {

    console.log(formFields[3]);

    if (formFields[i].value === '') {
      ++fieldsErrors;
      formFields[i].classList.add('failure');
    } else {
      formFields[i].classList.remove('failure');
    }
  }

  if (fieldsErrors === 0) {
    createAppointment(appointment);
  } else {
    appointmentMessage.classList.add('failure');

    let html = document.getElementsByTagName('html')[0];
    let htmlAttr = html.getAttribute('lang');

    if (htmlAttr === 'pl') {
      appointmentMessage.innerText = `Proszę, wypełnij wszystkie puste pola!`;

    } else if (htmlAttr === 'en') {
      appointmentMessage.innerText = `Fill up all empty fields!`;
    } else {
      appointmentMessage.innerText = `Vennligst fyll ut alle feltene!`;
    }
  }
});