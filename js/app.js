// SCROLL HEADER
const scrollHeader = () => {
  const nav = document.getElementById('header');

  if(this.scrollY >= 50) nav.classList.add('active-header');
  else nav.classList.remove('active-header');
}

window.addEventListener('scroll', scrollHeader);

// DROPDOWN MENU
const menuItem = document.querySelectorAll('.menu-item');
const dropdownMenu = document.querySelectorAll('.dropdown-menu');

const showDropdown = (event) => {
  event.preventDefault();
  const element = event.target.parentNode;
  const dropdownItem = element.querySelector('.dropdown-menu');
  
  dropdownMenu.forEach(menu => {
    if(menu.classList.contains('active-dropdown-menu'))
      menu.classList.remove('active-dropdown-menu');
  })
  
  dropdownItem.classList.add('active-dropdown-menu');  
}

const removeDropDown = () => {
  dropdownMenu.forEach(menu => {
    if(menu.classList.contains('active-dropdown-menu'))
      menu.classList.remove('active-dropdown-menu');
  })
}

menuItem.forEach(item => item.addEventListener('click', showDropdown));

dropdownMenu.forEach(item => item.addEventListener('mouseleave', removeDropDown));

// MENU MOBILE
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);
  
  if(toggle && nav){
    toggle.addEventListener('click', () => {
      nav.classList.toggle('active-menu-mobile');
      toggle.classList.toggle('active-bx');
    })
  }
}

showMenu('bx', 'menu-mobile');