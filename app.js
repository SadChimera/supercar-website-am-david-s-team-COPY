function selectTab(selectedTab) {
  const tabs = document.querySelectorAll('.tab');

  tabs.forEach(tab => tab.classList.remove('active'));

  selectedTab.classList.add('active');
}

document.querySelectorAll('.options select').forEach(select => {
  select.addEventListener('change', event => {
    const value = event.target.value;
    console.log(`Selected: ${value}`);
  });
});


function selectTab(selectedTab) {

  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));

  selectedTab.classList.add('active');

  const sections = document.querySelectorAll('.main-content');
  sections.forEach(section => section.style.display = 'none');

  const selectedTabText = selectedTab.textContent.trim();

  const carImage = document.querySelector('.car-image');

  if (selectedTabText === 'Exterior') {
    carImage.src = 'config-white-car.png';
  } else if (selectedTabText === 'Interior') {
    carImage.src = 'config-interior.png';
  } else if (selectedTabText === 'Equipment') {
    carImage.src = 'config-equipment.png';
  }

  document.querySelector('.main-content').style.display = 'block';
}

