const mainSectionWrapper = document.querySelector('.main-section__item-wrapper');

for (let element of mainElements) {
  let link = `<a href="${element.onclick}" title="Community Science Museum || ${element.category}">${element.linkText} >>></a>`;

  if (document.querySelector('title').innerText === 'Community Science Museum || Home Page' && element.category === 'Home Page'
    || document.querySelector('title').innerText === 'Community Science Museum || Explore Our Museum' && element.category === 'Explore Our Museum'
    || document.querySelector('title').innerText === 'Community Science Museum || Exhibition Spaces' && element.category === 'Exhibition Spaces'
    || document.querySelector('title').innerText === 'Community Science Museum || Special Events & Exhibitions' && element.category === 'Special Events & Exhibitions'
    || document.querySelector('title').innerText === 'Community Science Museum || Get Involved' && element.category === 'Get Involved'
    || document.querySelector('title').innerText === 'Community Science Museum || Visit Our Museum' && element.category === 'Visit Our Museum') {

    if (element.link && element.category) {
      mainSectionWrapper.innerHTML +=
        `<div class="main-section__item" onclick="location.href='${element.onclick}'" title="Community Science Museum || ${element.category}">
          <h3 class="sub-title">${element.title}</h3>
          <div id="${element.linkId}" class="main-section__item__img-wrapper">
            <img src="${element.image}" alt="${element.altText}">
          </div>
          <p>${element.description}</p>
          ${link}
        </div>`
    } if (!element.link) {
      mainSectionWrapper.innerHTML +=
        `<div class="main-section__item" onclick="location.href='${element.onclick}'" title="Community Science Museum || ${element.category}">
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
/* https://formspree.io/f/mdobeygr */
if (document.querySelector('title').innerText === 'Community Science Museum || Contact') {
  const createAppointment = (appointment) => {
    const appointmentMessage = document.querySelector('.appointment-message');

    fetch('https://formspree.io/f/mdobeygr', {
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify(appointment)
    })
      .then(res => res.json())
      .then(resJSON => {
        appointmentMessage.classList.add('send');
        appointmentMessage.classList.remove('failure');
        appointmentMessage.innerText = `Thank you ${appointment.name}. Your message is sent!`;
      });
  }

  const appointmentForm = document.getElementById('appointment-form');

  appointmentForm.addEventListener('submit', function (event) {
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

    for (let i = 0; i < formFields.length; i++) {

      if (formFields[i].value === '') {
        ++fieldsErrors;
        formFields[i].classList.add('failure-field');
      } else {
        formFields[i].classList.remove('failure-field');
      }
    }

    if (fieldsErrors === 0) {
      createAppointment(appointment);
    } else {
      appointmentMessage.classList.add('failure');
      appointmentMessage.innerText = `Fill up all empty fields!`;
    }
  })
};