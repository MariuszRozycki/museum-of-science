const mainSectionWrapper = document.querySelector('.main-section__item-wrapper');

console.log(mainSectionWrapper);
for (let element of mainElements) {
  let link = `<a href="${element.onclick}">Click here >>></a>`;

  if (document.querySelector('title').innerText === 'Community Sience Museum || Home Page' && element.category === 'home'
    || document.querySelector('title').innerText === 'Community Sience Museum || Explore Our Museum' && element.category === 'explore'
    || document.querySelector('title').innerText === 'Community Sience Museum || Exhibition Spaces' && element.category === 'exhibition'
    || document.querySelector('title').innerText === 'Community Sience Museum || Special Events & Exhibitions' && element.category === 'events') {

    if (element.link && element.category != 'events') {
      mainSectionWrapper.innerHTML +=
        `<div class="main-section__item" onclick="location.href='${element.onclick}'">
        <h3 class="sub-title">${element.title}</h3>
        <div class="main-section__item__img-wrapper">
          <img src="${element.image}" alt="${element.altText}">
        </div>
        <p>${element.description}</p>
        ${link}
    </div>`
    } if (!element.link) {
      mainSectionWrapper.innerHTML +=
        `<div class="main-section__item" onclick="location.href='${element.onclick}'">
        <h3 class="sub-title">${element.title}</h3>
        <div>
          <img src="${element.image}" alt="${element.altText}">
        </div>
        <p>${element.description}</p>
      </div>`
    } if (element.category === 'events' && element.link) {
      mainSectionWrapper.innerHTML +=
        `<div id="${element.linkId}" class="main-section__item" onclick="location.href='${element.onclick}'">
        <h3 class="sub-title">${element.title}</h3>
        <div class="main-section__item__img-wrapper">
          <img src="${element.image}" alt="${element.altText}">
        </div>
        <p>${element.description}</p>
        <a href="${element.onclick}">Contact Us to get more info >>></a>
    </div>`
    }
  }
}