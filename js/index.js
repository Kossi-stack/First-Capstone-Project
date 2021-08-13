const speakers = [
  {
    name: 'Yochai Benkler',
    profile:
      'Brerkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    about:
      'Benkler studies commons-based peer production, and published his serminal book The Wealth of Networks in 2006',
    avatarURL: './assets/images/speaker1.png',
  },
  {
    name: 'Kilnam Chon',
    profile:
      'Brerkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    about:
      'Benkler studies commons-based peer production, and published his serminal book The Wealth of Networks in 2006',
    avatarURL: './assets/images/speaker2.png',
  },
  {
    name: 'SohYeong Noh',
    profile:
      'Director of Art Center Nobi and a board member of CC Korea',
    about:
      'Benkler studies commons-based peer production, and published his serminal book The Wealth of Networks in 2006',
    avatarURL: './assets/images/speaker3.png',
  },
  {
    name: 'Julia Leda',
    profile:
      'President of Young Pirates of Europe',
    about:
      'European integration, polical democracy and participation of youth through online as the major conderm, Ledas report',
    avatarURL: './assets/images/speaker4.png',
  },
  {
    name: 'Lila Tretikov',
    profile:
      'Executive Director of the Wikimedia Foundation',
    about:
      'The nonprofit organization that operates wikipedia Benkler studies commons-based peer production, and published his serminal book The Wealth of Networks in 2006',
    avatarURL: './assets/images/speaker5.png',
  },
  {
    name: 'Ryan Merkley',
    profile:
      'CEO of Creative Commons, COO of the Mozilla foundation',
    about:
      'Ryan had been leading open-source projects at the Mozilla foundation such as the open source movement',
    avatarURL: './assets/images/speaker6.png',
  },
];

const speakersDisplayState = {
  isExpanded: false,
};

const ul = document.querySelector('.speakers');

const displaySpeakers = (speaker, index) => {
  const li = document.createElement('li');
  li.setAttribute('class', 'speaker');

  const div1 = document.createElement('div');
  div1.setAttribute('class', 'images');

  const img1 = document.createElement('img');
  img1.setAttribute('class', 'grid');
  img1.setAttribute('src', './assets/images/grid2.png');
  img1.setAttribute('alt', `speaker ${index + 1} image design`);
  div1.appendChild(img1);

  const img2 = document.createElement('img');
  img2.setAttribute('class', 'speaker-image');
  img2.setAttribute('src', speaker.avatarURL);
  img2.setAttribute('alt', `speaker ${index + 1} avatar`);
  div1.appendChild(img2);

  li.appendChild(div1);

  const div2 = document.createElement('div');
  div2.setAttribute('class', 'speaker-profile');

  const heading = document.createElement('h2');
  heading.setAttribute('class', 'name');
  heading.textContent = speaker.name;
  div2.appendChild(heading);

  const p1 = document.createElement('p');
  p1.setAttribute('class', 'profile');
  p1.textContent = speaker.profile;
  div2.appendChild(p1);

  const hr = document.createElement('hr');
  hr.setAttribute('class', 'short-underline');
  div2.appendChild(hr);

  const p2 = document.createElement('p');
  p2.setAttribute('class', 'intro');
  p2.textContent = speaker.about;
  div2.appendChild(p2);
  li.appendChild(div2);

  ul.appendChild(li);
};

const smartShowSpeakers = (start, stop) => {
  speakers.forEach((speaker, index) => {
    if (index + 1 >= start && index + 1 <= stop) {
      displaySpeakers(speaker, index);
    }
  });
};

const moreSpeakersButton = document.querySelector('.button-container');

const showSpeakers = () => {
  const { isExpanded } = speakersDisplayState;

  if (window.innerWidth <= 768 && isExpanded) {
    document.querySelector('.speakers').innerHTML = '';
    smartShowSpeakers(1, 2);
    speakersDisplayState.isExpanded = false;
    moreSpeakersButton.children[0].innerHTML = 'MORE <i class="fa fa-chevron-down"></i>';
  } else if (window.innerWidth <= 768 && !isExpanded) {
    smartShowSpeakers(3, speakers.length);
    speakersDisplayState.isExpanded = true;
    moreSpeakersButton.children[0].innerHTML = 'LESS <i class="fa fa-chevron-up"></i>';
  } else if (!window.innerWidth <= 768 && isExpanded) {
    document.querySelector('.speakers').innerHTML = '';
    smartShowSpeakers(1, 4);
    speakersDisplayState.isExpanded = false;
    moreSpeakersButton.children[0].innerHTML = 'MORE <i class="fa fa-chevron-down"></i>';
  } else if (!window.innerWidth <= 768 && !isExpanded) {
    smartShowSpeakers(5, speakers.length);
    speakersDisplayState.isExpanded = true;
    moreSpeakersButton.children[0].innerHTML = 'LESS <i class="fa fa-chevron-up"></i>';
  }
};

document.querySelector('.speakers').innerHTML = '';

if (window.innerWidth <= 768) {
  smartShowSpeakers(1, 2);
} else if (window.innerWidth > 768) {
  smartShowSpeakers(1, 4);
}

moreSpeakersButton.addEventListener('click', () => {
  showSpeakers();
});