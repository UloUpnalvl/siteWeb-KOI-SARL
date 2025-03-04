const btnBurger = document.querySelector("#burger-menu");
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
const iconBurger = document.querySelector("#burger-menu ion-icon");
const sections = document.querySelectorAll(".section");
const links = document.querySelectorAll(".menu li a");

btnBurger.addEventListener('click', () => {
  menu.classList.toggle('active')
  nav.classList.add('active')
  if(menu.classList.contains('.active')){
    iconBurger.setAttribute('name', 'close-outline')
  } else {
    iconBurger.setAttribute('name', 'menu-outline')
  }
})



links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active')
  })
})

window.addEventListener('scroll', () => {
  nav.classList.toggle('active', window.scrollY > 0)
  if(menu.classList.contains('.active')){
    iconBurger.setAttribute('name', 'close-outline')
  } else {
    iconBurger.setAttribute('name', 'menu-outline')
  }
})

function setActiveLink(){
  let currentScroll = window.scrollY

  sections.forEach((section) => {
    if(section.offsetTop <= currentScroll && section.offsetTop + section.offSetHeight > currentScroll){
      links.forEach((link) => {
        link.classList.remove('active')
        if(link.getAttribute('href').substring(1) === section.id){
            link.classList.add('active')
        }
      })
    }
  })
}

document.addEventListener('scroll', setActiveLink);

function addTiltEffect(element){
  element.addEventListener('mousemove', function(e){
    const bounding = element.getBoundingClientRect();
    const centerX = bounding.left + bounding.with /2;
    const centerY = bounding.top + bounding.height /2;

    const offsetX = e.clientX - centerX;
    const offsetY = e.clientY - centerY;

    const tiltX = (offsetY / centerY)*50
    const tiltY = (offsetX / centerX)*50

    element.style.transform = `rotateX(${tiltX}deg)rotateY(${tiltY}deg)`

  })
  element.addEventListener('mouseout', function(){
    element.style.transform = `rotateX(0deg) rotateY(0deg)`
  })
}

const teamBoxes = document.querySelectorAll('.team-box')

teamBoxes.forEach(addTiltEffect())