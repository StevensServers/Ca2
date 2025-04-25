function showEvent(eventNumber) {

  const events = document.querySelectorAll('.timeline-event');
  events.forEach(event => event.style.display = 'none');

  
  const selectedEvent = document.getElementById('event-' + eventNumber);
  if (selectedEvent) {
    selectedEvent.style.display = 'block';
  }

  
  const nodes = document.querySelectorAll('.timeline-node');
  nodes.forEach(node => node.classList.remove('active'));


  const clickedNode = document.querySelector(`.timeline-node:nth-child(${eventNumber})`);
  if (clickedNode) {
    clickedNode.classList.add('active');
  }
}

function showEvent(eventNumber) {
  const events = document.querySelectorAll('.timeline-event');
  events.forEach(event => event.style.display = 'none');

  const selectedEvent = document.getElementById('event-' + eventNumber);
  if (selectedEvent) {
    selectedEvent.style.display = 'block';
  }

  const nodes = document.querySelectorAll('.timeline-node');
  nodes.forEach(node => node.classList.remove('active'));

  const clickedNode = document.querySelector(`.timeline-node:nth-child(${eventNumber})`);
  if (clickedNode) {
    clickedNode.classList.add('active');
  }
}

const profileBtn = document.getElementById('create-profile-btn');
const profileForm = document.getElementById('profile-form');
const form = document.getElementById('mechaForm');
const customProfiles = document.getElementById('customProfiles');

profileBtn.addEventListener('click', () => {
  profileForm.style.display = profileForm.style.display === 'none' ? 'block' : 'none';
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('mechaName').value || 'N/A';
  const type = document.getElementById('combatType').value || 'N/A';
  const desc = document.getElementById('description').value || 'N/A';
  const imgInput = document.getElementById('mechaImage');
  let imgURL = '';

  if (imgInput.files && imgInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      imgURL = e.target.result;
      appendProfile(name, type, desc, imgURL);
    };
    reader.readAsDataURL(imgInput.files[0]);
  } else {
    appendProfile(name, type, desc, '');
  }

  form.reset();
  profileForm.style.display = 'none';
});

function appendProfile(name, type, desc, imgURL) {
  const profile = document.createElement('div');
  profile.style.border = '2px solid #004d00';
  profile.style.borderRadius = '8px';
  profile.style.padding = '15px';
  profile.style.marginBottom = '20px';
  profile.style.backgroundColor = '#e0ffe0';

  profile.innerHTML = `
    <h3>${name}</h3>
    <p><strong>Combat Type:</strong> ${type}</p>
    <p><strong>Description:</strong> ${desc}</p>
    ${imgURL ? `<img src="${imgURL}" alt="${name}" style="max-width: 200px; border: 3px solid #000; border-radius: 6px;">` : '<p><strong>Image:</strong> N/A</p>'}
  `;

  customProfiles.appendChild(profile);
}

function toggleDropdown(section) {
  const sectionContent = document.getElementById(section);
  const arrow = event.target.querySelector('.arrow');

  if (sectionContent.style.display === 'none' || sectionContent.style.display === '') {
    sectionContent.style.display = 'block';
    arrow.textContent = '▲'; 
  } else {
    sectionContent.style.display = 'none';
    arrow.textContent = '▼';  
}
}

function showBattlelog() {
  var selectedBattlelog = document.getElementById('battlelog-select').value;
  var allBattlelogs = document.querySelectorAll('.battlelog-entry');
  
  allBattlelogs.forEach(function(log) {
    log.style.display = 'none';
  });
  
  if (selectedBattlelog) {
    document.getElementById(selectedBattlelog).style.display = 'block';
  }
}

