const mainElements = [
  /* home */
  {
    id: 1,
    category: 'home',
    onclick: './../layout/explore.html',
    title: 'Explore',
    image: './../images/images_from_noroff/lab-512503_1920.jpg',
    altText: 'Labolatory',
    description: `Come join us at the Community Science Museum where we’re committed to making science accessible to all.`,
    link: true,
    linkText: 'Click here',
    operated: true
  },
  {
    id: 2,
    category: 'home',
    onclick: './../layout/exhib-spaces.html',
    title: 'Exhibition spaces',
    image: './../images/images_from_noroff/andrew-ruiz-348421.jpg',
    altText: 'Picture of an astronaut',
    description: `Over the course of human history, science has developed from our early understanding of fire, wind, water, and earth to exploring everything from galaxies far away to the very building blocks of life itself.`,
    link: true,
    linkText: 'Click here',
    operated: true
  },
  {
    id: 3,
    category: 'home',
    onclick: './../layout/events.html',
    title: 'Special events & exhibitions',
    image: './../images/images_from_noroff/learn-2405206_1920.jpg',
    altText: 'Picture of young student',
    description: `The aim of our museum is to create a space where everyone can experience the wonders of our
    discoveries and perhaps even ignite a lifelong passion to continue the exploration of the world around
    us.`,
    link: true,
    linkText: 'Click here',
    operated: true
  },
  {
    id: 4,
    category: 'home',
    onclick: './../layout/get-involved.html',
    title: 'Get involved',
    image: './../images/images_from_noroff/library-1132573_1920.jpg',
    altText: 'Picture of library',
    description: `We believe science should not be confined to the textbook, but brought to live through
    exhibits.
    This is why we have over 1000 different exhibits on the many varied subjects of science to explore.`,
    link: true,
    linkText: 'Click here',
    operated: true
  },
  {
    id: 5,
    category: 'home',
    onclick: './../layout/visit.html',
    title: 'Visit Us',
    image: './../images/images_my/young-scientist/young-scientist.jpg',
    altText: 'Picture of young scientist',
    description: `Many of these exhibits are designed for you to interact with and play around to see science
    come to life (apart from the dinosaur exhibits – they only come to life at night when everyone’s gone home).`,
    link: true,
    linkText: 'Click here',
    operated: true
  },

  /* explore */
  {
    id: 6,
    category: 'explore',
    onclick: './../layout/explore__sub-web/for-teachers.html',
    title: 'If you are teacher',
    image: './../images/images_my/for-teachers-main/for-teachers-main.jpg',
    altText: 'Picture of a teacher',
    description: `Come join us at the Community Science Museum where we’re committed to making science accessible to all.`,
    link: true,
    linkText: 'Click to know more',
    operated: true
  },
  {
    id: 7,
    category: 'explore',
    onclick: './../layout/explore__sub-web/for-kids.html',
    title: 'If you are student',
    image: './../images/images_my/kids-scientists/kids-scientists.jpg',
    altText: 'Kids scientists',
    description: `… maybe you are young student and looking for something more about sience?`,
    link: true,
    linkText: 'Click to know more',
    operated: true
  },
  {
    id: 8,
    category: 'explore',
    onclick: './../layout/explore__sub-web/for-researchers.html',
    title: 'If you are researcher',
    image: './../images/images_my/kids-scientists/kids-scientists.jpg',
    altText: 'Picture of researchers',
    description: `Are you looking to get involved with our team of researchers and academics?`,
    link: true,
    linkText: 'Click to know more',
    operated: true
  },

  /* exhibition spaces */
  {
    id: 9,
    category: 'exhibition',
    onclick: './../layout/exhib__sub-web/cosmology.html',
    title: 'Cosmology',
    image: './../images/images_my/cosmology/earth-g8b77cf178_640.jpg',
    altText: 'Picture of cosmos',
    description: `Explore the wonders of our cosmos. Our fantastic exhibition, ‘The Sky Above Us’...`,
    link: true,
    linkText: 'Show more details',
    operated: true
  },
  {
    id: 10,
    category: 'exhibition',
    onclick: './../layout/exhib__sub-web/evolution.html',
    title: 'Evolution',
    image: './../images/images_my/evolution/evolution.jpg',
    altText: 'Process of evolution',
    description: `For centuries, philosophers and scientists have wrestled with the question of our origins. Where do we
    come from and how did we get here?`,
    link: true,
    linkText: 'Show more details',
    operated: true
  },
  {
    id: 11,
    category: 'exhibition',
    onclick: './../layout/exhib__sub-web/biology.html',
    title: 'Biology and medicine',
    image: './../images/images_from_noroff/heart-2607178_1920.jpg',
    altText: 'Picture of heart',
    description: `From micro-organisms to the human body, major breakthroughs in biology are offering us unique insights
    into the great wonders of the tiny world…`,
    link: true,
    linkText: 'Show more details',
    operated: true
  },
  {
    id: 12,
    category: 'exhibition',
    onclick: './../layout/exhib__sub-web/robotics.html',
    title: 'Robotics and AI',
    image: './../images/images_my/IA-main/IA-main.jpg',
    altText: 'A man & AI shaking hands',
    description: `The information revolution is here and robotics and artificial intelligence are the science of the
    future...`,
    link: true,
    linkText: 'Show more details',
    operated: true
  },
  {
    id: 13,
    category: 'exhibition',
    onclick: './../layout/exhib__sub-web/ecology.html',
    title: 'Ecology',
    image: './../images/images_my/ecology/nature-g20be6b3c8_640.jpg',
    altText: 'Picture of ecology apple',
    description: `As we learn more and more of the impact humans are having on the planet, the more important it becomes
    that scientists explore how to create a sustainable future...`,
    link: true,
    linkText: 'Show more details',
    operated: true
  },

  /* special events */
  {
    id: 14,
    category: 'events',
    onclick: './../layout/contact.html',
    title: 'Visiting profesor of aeronautics',
    image: './../images/images_my/profesor-of-astronautics/profesor-of-astronautics.jpg',
    altText: 'Picture of profesor of aeronautics',
    description: `It is our pleasure to announce that Prof Sheila Widnall from the Massachusetts Institute of Technology
    will be delivering 3 lectures on the development of aeronautics and where the future lies in this exciting
    ‘space’.`,
    link: true,
    linkText: 'Ask about more details',
    linkId: 'prof-aeronautics',
    operated: true
  },
  {
    id: 15,
    category: 'events',
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
    operated: true
  },
  {
    id: 16,
    category: 'events',
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
    linkId: 'energetica',
    operated: true
  },

  /* get involved */
  {
    id: 17,
    category: 'get-involved',
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
    linkId: 'support',
    operated: true
  },
  {
    id: 18,
    category: 'get-involved',
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
    linkId: 'volunteer',
    operated: true
  },
  {
    id: 19,
    category: 'get-involved',
    onclick: './../layout/contact.html',
    title: 'Internships',
    image: './../images/images_my/interships/chemistry-g3ea48b9ac_640.jpg',
    altText: 'Picture of young chemistry worker',
    description: `Are you interested in working in a museum? Do you enjoy the fun and excitement of sharing the wonders of
    nature with people? Well you could be just the right person to enjoy an internship at the museum.
    You’ll be learning from a number of different academics and people who are passionate about science and
    sharing it with the wider community.`,
    link: true,
    linkText: 'Write to us',
    linkId: 'interships',
    operated: true
  },

  /* visit */
  {
    id: 20,
    category: 'visit',
    onclick: 'https://www.google.com/maps/place/Kjelsåsveien+143,+0491+Oslo/@59.9669358,10.7833781,17z/data=!4m2!3m1!1s0x464171e7f06b20d1:0xa4dc7a6bef326423',
    title: 'Location',
    image: './../images/images_my/visit.png',
    altText: 'Picture location.',
    description: `The museum is located at:
    Kjelsåsveien 143, 0491 Oslo,
    Norway`,
    link: true,
    linkText: 'Go to Google Maps',
    linkId: 'location',
    operated: true
  },
]