const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}
hamburger.addEventListener("click", toggleMenu);
// api for random Quote
const apiKey="HbaTfClbMy5JS3ZU0wL+8w==oPhwma1UKGTS3HSI";
const quoteEle=document.getElementById("Quote");
const options={
  method:"GET",
  headers:{
    "X-Api-Key": apiKey,
  },
};
const apiURL = 'https://api.api-ninjas.com/v1/quotes?category=success';
async function Quote(){
  quoteEle.innerHTML="Quote Loading..."
  const response= await fetch(apiURL,options);
  const data=await response.json();
  quoteEle.innerHTML = `"${data[0].quote}"`;
  let quo = quoteEle.innerHTML;
};
Quote();

const logo = document.getElementById('logo');
const modeToggle = document.getElementById('icon');
const storedMode = localStorage.getItem('mode');

// Check if a mode is stored in local storage
if (storedMode === 'dark') {
  document.body.classList.add('dark-theme');
  modeToggle.classList.remove('fa-sun');
  modeToggle.classList.add('fa-moon');
  logo.src = 'logo.png';
} else if (storedMode === 'light') {
  document.body.classList.remove('dark-theme');
  modeToggle.classList.remove('fa-moon');
  modeToggle.classList.add('fa-sun');
  logo.src = 'dark.png';
}

modeToggle.addEventListener('click', function() {
  document.body.classList.toggle("dark-theme");
  const isDarkMode = document.body.classList.contains('dark-theme');
  if (isDarkMode) {
    modeToggle.classList.remove('fa-sun');
    modeToggle.classList.add('fa-moon');
    logo.src = 'logo.png';
    // Set dark mode in local storage
    localStorage.setItem('mode', 'dark');
  } else {
    modeToggle.classList.remove('fa-moon');
    modeToggle.classList.add('fa-sun');
    logo.src = 'dark.png';
    // Set light mode in local storage
    localStorage.setItem('mode', 'light');
  }
});
