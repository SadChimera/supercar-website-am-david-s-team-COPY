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
