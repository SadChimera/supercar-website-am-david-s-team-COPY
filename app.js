function selectTab(selectedTab) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));
  selectedTab.classList.add('active');
}
document.addEventListener('DOMContentLoaded', () => {
});
