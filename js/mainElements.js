const mainElements = [
  /* home */
  {
    id: 1,
    category: 'Home Page',
    onclick: './../layout/explore.html',
    title: 'Explore',
    image: './../images/images_from_noroff/lab-512503_1920.jpg',
    altText: 'Laboratory',
    description: `Come join us at the Community Science Museum where we’re committed to making science accessible to all.`,
    link: true,
    linkText: 'Click here'
  },
  {
    id: 2,
    category: 'Home Page',
    onclick: './../layout/exhib-spaces.html',
    title: 'Exhibition spaces',
    image: './../images/images_from_noroff/andrew-ruiz-348421.jpg',
    altText: 'Picture of an astronaut',
    description: `Over the course of human history, science has developed from our early understanding of fire, wind, water, and earth to exploring everything from galaxies far away to the very building blocks of life itself.`,
    link: true,
    linkText: 'Click here'
  },
  {
    id: 3,
    category: 'Home Page',
    onclick: './../layout/events.html',
    title: 'Special events & exhibitions',
    image: './../images/images_from_noroff/learn-2405206_1920.jpg',
    altText: 'Picture of young student',
    description: `The aim of our museum is to create a space where everyone can experience the wonders of our
    discoveries and perhaps even ignite a lifelong passion to continue the exploration of the world around
    us.`,
    link: true,
    linkText: 'Click here'
  },
  {
    id: 4,
    category: 'Home Page',
    onclick: './../layout/get-involved.html',
    title: 'Get involved',
    image: './../images/images_from_noroff/library-1132573_1920.jpg',
    altText: 'Picture of library',
    description: `We believe science should not be confined to the textbook, but brought to live through
    exhibits.
    This is why we have over 1000 different exhibits on the many varied subjects of science to explore.`,
    link: true,
    linkText: 'Click here'
  },
  {
    id: 5,
    category: 'Home Page',
    onclick: './../layout/visit.html',
    title: 'Visit Us',
    image: './../images/images_my/young-scientist/young-scientist.jpg',
    altText: 'Picture of young scientist',
    description: `Many of these exhibits are designed for you to interact with and play around to see science
    come to life (apart from the dinosaur exhibits – they only come to life at night when everyone’s gone home).`,
    link: true,
    linkText: 'Click here'
  },

  /* explore */
  {
    id: 6,
    category: 'Explore Our Museum',
    onclick: './../layout/explore__sub-web/for-kids.html',
    title: 'If you are student',
    image: './../images/images_my/kids-scientists/kids-scientists.jpg',
    altText: 'Kids scientists',
    description: `… maybe you are young student and looking for something more about science?`,
    link: true,
    linkText: 'Click to know more'
  },
  {
    id: 7,
    category: 'Explore Our Museum',
    onclick: './../layout/explore__sub-web/for-teachers.html',
    title: 'If you are teacher',
    image: './../images/images_my/for-teachers-main/for-teachers-main.jpg',
    altText: 'Picture of a teacher',
    description: `Come join us at the Community Science Museum where we’re committed to making science accessible to all.`,
    link: true,
    linkText: 'Click to know more'
  },
  {
    id: 8,
    category: 'Explore Our Museum',
    onclick: './../layout/explore__sub-web/for-researchers.html',
    title: 'If you are researcher',
    image: './../images/images_my/kids-scientists/kids-scientists.jpg',
    altText: 'Picture of researchers',
    description: `Are you looking to get involved with our team of researchers and academics?`,
    link: true,
    linkText: 'Click to know more'
  },

  /* exhibition spaces */
  {
    id: 9,
    category: 'Exhibition Spaces',
    onclick: './../layout/exhib__sub-web/cosmology.html',
    title: 'Cosmology',
    image: './../images/images_my/cosmology/earth-g8b77cf178_640.jpg',
    altText: 'Picture of cosmos',
    description: `Explore the wonders of our cosmos. Our fantastic exhibition, ‘The Sky Above Us’...`,
    link: true,
    linkText: 'Show more details'
  },
  {
    id: 10,
    category: 'Exhibition Spaces',
    onclick: './../layout/exhib__sub-web/evolution.html',
    title: 'Evolution',
    image: './../images/images_my/evolution/evolution.jpg',
    altText: 'Process of evolution',
    description: `For centuries, philosophers and scientists have wrestled with the question of our origins. Where do we
    come from and how did we get here?`,
    link: true,
    linkText: 'Show more details'
  },
  {
    id: 11,
    category: 'Exhibition Spaces',
    onclick: './../layout/exhib__sub-web/biology.html',
    title: 'Biology and medicine',
    image: './../images/images_from_noroff/heart-2607178_1920.jpg',
    altText: 'Picture of heart',
    description: `From micro-organisms to the human body, major breakthroughs in biology are offering us unique insights
    into the great wonders of the tiny world…`,
    link: true,
    linkText: 'Show more details'
  },
  {
    id: 12,
    category: 'Exhibition Spaces',
    onclick: './../layout/exhib__sub-web/robotics.html',
    title: 'Robotics and AI',
    image: './../images/images_my/IA-main/IA-main.jpg',
    altText: 'A man & AI shaking hands',
    description: `The information revolution is here and robotics and artificial intelligence are the science of the
    future...`,
    link: true,
    linkText: 'Show more details'
  },
  {
    id: 13,
    category: 'Exhibition Spaces',
    onclick: './../layout/exhib__sub-web/ecology.html',
    title: 'Ecology',
    image: './../images/images_my/ecology/nature-g20be6b3c8_640.jpg',
    altText: 'Picture of ecology apple',
    description: `As we learn more and more of the impact humans are having on the planet, the more important it becomes
    that scientists explore how to create a sustainable future...`,
    link: true,
    linkText: 'Show more details'
  },

  /* special events */
  {
    id: 14,
    category: 'Special Events & Exhibitions',
    onclick: './../layout/contact.html',
    title: 'Visiting professor of aeronautics',
    image: './../images/images_my/professor-of-astronautics/professor-of-astronautics.jpg',
    altText: 'Picture of professor of aeronautics',
    description: `It is our pleasure to announce that Prof Sheila Widnall from the Massachusetts Institute of Technology
    will be delivering 3 lectures on the development of aeronautics and where the future lies in this exciting
    ‘space’.`,
    link: true,
    linkText: 'Ask about more details',
    linkId: 'prof-aeronautics'
  },
  {
    id: 15,
    category: 'Special Events & Exhibitions',
    onclick: './../layout/contact.html',
    title: 'Night in the Museum',
    image: './../images/images_my/museum-night/pexels-adam-borkowski-5674215.jpg',
    altText: 'City by night',
    description: `Get your family together for an exciting night in the museum as you sleep over beside dinosaurs and
    science displays. Bring your own sleeping bag and get ready to rough it as we go exploring the wonders of
    science.`,
    linkText: 'Ask about more details',
    link: true,
    linkId: 'night-in-museum',
  },
  {
    id: 16,
    category: 'Special Events & Exhibitions',
    onclick: './../layout/contact.html',
    title: 'Energetica Exhibition on Loan',
    image: './../images/images_my/energetica-exhibition/energetica-exhibition.jpg',
    altText: 'Picture of windmill',
    description: `On loan from the NEMO Science Museum in Amsterdam, the Energetica exhibition is coming to the Community
    Science Museum. It’s a series of installations that allow visitors to experience the power of the elements
    as we harness them. From solar energy powering lighting, to ‘Wind Island’ that shows how turbines are able
    to use and control wind to create power.`,
    link: true,
    linkText: 'Ask about more details',
    linkId: 'energetica'
  },

  /* get involved */
  {
    id: 17,
    category: 'Get Involved',
    onclick: './../layout/contact.html',
    title: 'Support',
    image: './../images/images_my/support/support.jpg',
    altText: 'Picture of ball from money',
    description: `There are various ways you can support the museum. Donations are very welcome and are an important way we
    keep this museum open and accessible to the whole community.
    You can also support us by donating items of interest to the museum’s collections. If you have some item
    or collection that you think others would enjoy, please let us know by contacting our Collections
    Department and they will be able to assist you.`,
    link: true,
    linkText: 'Write to us',
    linkId: 'support'
  },
  {
    id: 18,
    category: 'Get Involved',
    onclick: './../layout/contact.html',
    title: 'Volunteer',
    image: './../images/images_my/volunteer-description/volunteer-description.jpg',
    altText: 'Volunteer - picture of hands',
    description: `A number of people volunteer their time and effort to keep the displays in good order and ready for
    visitors to come and enjoy. Volunteering has its perks including getting to see behind the scenes of a
    working museum, access to staff-only lectures, and a monthly lunch where all staff and volunteers come
    together to discuss ideas for future exhibits and strategies for the museum.
    You can help volunteer in a number of different spheres. Please contact us if you’d like to find out more
    about how you can get involved.`,
    link: true,
    linkText: 'Write to us',
    linkId: 'volunteer'
  },
  {
    id: 19,
    category: 'Get Involved',
    onclick: './../layout/contact.html',
    title: 'Internships',
    image: './../images/images_my/internships/chemistry-g3ea48b9ac_640.jpg',
    altText: 'Picture of young chemistry worker',
    description: `Are you interested in working in a museum? Do you enjoy the fun and excitement of sharing the wonders of
    nature with people? Well you could be just the right person to enjoy an internship at the museum.
    You’ll be learning from a number of different academics and people who are passionate about science and
    sharing it with the wider community.`,
    link: true,
    linkText: 'Write to us',
    linkId: 'internships'
  },

  /* visit */
  {
    id: 20,
    category: 'Visit Our Museum',
    onclick: '../layout/map.html',
    title: 'Location',
    image: './../images/images_my/visit.png',
    altText: 'Picture location.',
    description: `The museum is located at:
    Kjelsåsveien 143, 0491 Oslo,
    Norway`,
    link: true,
    linkText: 'Go to Google Maps',
    linkId: 'location'
  },
  {
    id: 21,
    category: 'Visit Our Museum',
    onclick: './../layout/contact.html',
    title: 'Admission',
    image: './../images/images_my/admission/pexels-charlotte-may-5824892.jpg',
    altText: 'Picture of hall in museum',
    description: `The entrance is free for all.
    There are guided tours of the museum that leave every hour. These tours are 70 NOK per person and include
    a handy printed guide of the museum.
    If you would like to organize a guided tour for your group of 6 or more people, please contact us to
    arrange the tour.`,
    link: true,
    linkText: 'Write to Us',
    linkId: 'admission'
  },
  {
    id: 22,
    category: 'Visit Our Museum',
    onclick: './../layout/contact.html',
    title: 'Opening hours',
    image: './../images/images_my/opening-hours/opening-hours.jpg',
    altText: 'Picture of clock',
    description: `<span>Monday: Closed</span>
    <span>Tuesday - Thursday:</span>
    <span>10:00 – 16:00</span>
    <span>Friday:</span>
    <span>10:00 – 19:00</span>
    <span>Saturday:</span>
    <span>9:00 – 16:00</span>
    <span>Sunday:</span>
    <span>9:00 – 13:00</span>`,
    link: true,
    linkText: 'Write to Us',
    linkId: 'opening'
  },
  {
    id: 23,
    category: 'Visit Our Museum',
    onclick: './../layout/contact.html',
    title: 'Accessibility',
    image: './../images/images_my/accessibility/pexels-marcus-aurelius-4064229.jpg',
    altText: 'Picture of wheelchair',
    description: `The museum has wheelchair accessibility ramps. It also has audio guides and braille display signs for the
    visually impaired.`,
    link: true,
    linkText: 'Write to Us',
    linkId: 'accessibility'
  },
  {
    id: 24,
    category: 'Visit Our Museum',
    onclick: './../layout/contact.html',
    title: 'Food & drink',
    image: './../images/images_my/food-and-drink/pexels-sanjay-indiresh-2903384.jpg',
    altText: 'Picture of some food',
    description: `There is a café attached to the museum where you can get light lunches, soft drinks, coffee, snacks and
    more.`,
    link: true,
    linkText: 'Write to Us',
    linkId: 'food-drink'
  },
  {
    id: 25,
    category: 'Visit Our Museum',
    onclick: './../layout/contact.html',
    title: 'Shop',
    image: './../images/images_my/shop/pexels-artem-beliaikin-1051747.jpg',
    altText: 'Picture of some food',
    description: `Our shop offers a range of memorabilia from the museum as well as great gifts and activity packs that
    allow you to continue to explore science even after you’ve left the museum.`,
    link: true,
    linkText: 'Write to Us',
    linkId: 'shop'
  },
]