const toggleMenu = document.getElementById('toggleMenu')
const sidebar = document.querySelector('.sidebar')


toggleMenu.addEventListener('click', () => {
  sidebar.classList.toggle('active');
})