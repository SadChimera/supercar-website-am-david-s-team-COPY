function selectTab(selectedTab) {

  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));

  selectedTab.classList.add('active');

  const sections = document.querySelectorAll('.main-content > div');
  sections.forEach(section => section.style.display = 'none');

  const targetContentId = selectedTab.dataset.target;
  const targetSection = document.getElementById(targetContentId);
  if (targetSection) {
    targetSection.style.display = 'block';
  }

  const carImage = document.querySelector('.car-image');
  if (selectedTab.dataset.target === 'exterior-content') {
    carImage.src = 'config-white-car.png';
  } else if (selectedTab.dataset.target === 'interior-content') {
    carImage.src = 'interior-white.png';
  } else if (selectedTab.dataset.target === 'equipment-content') {
    carImage.src = 'config-equipment.png';
  }
}
