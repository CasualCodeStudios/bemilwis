function sidebarToggle() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('active');

}

// hero section left slider
const images = document.querySelectorAll('.leftSlide img');
let current = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

function nextImage() {
  current = (current + 1) % images.length;
  showImage(current);
}


// Show the first image initially
showImage(current);

// Change image every 5 seconds
setInterval(nextImage, 5000);

// hero section right slider
const pics = document.querySelectorAll('.rightSlide img');
let counter = 0;

function showPic(index) {
  pics.forEach((pic, i) => {
    pic.classList.toggle('active', i === index);
  });
}

function nextPic() {
  counter = (counter + 1) % pics.length;
  showPic(counter);
}


// Show the first image initially
showPic(counter);

// Change image every 5 seconds
setInterval(nextPic, 5000);

// advert scrolling
const advertContainer = document.querySelector('.advertContainer');
const leftScroll = document.getElementById('leftScroll');
const rightScroll = document.getElementById('rightScroll');

// Amount to scroll each click (adjust as needed)
const scrollAmount = 345;

// Scroll right
rightScroll.addEventListener('click', () => {
  advertContainer.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
});

// Scroll left
leftScroll.addEventListener('click', () => {
  advertContainer.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth'
  });
});

// what sold scrolling
const container = document.getElementById('whatSold');

// Duplicate content for seamless loop
container.innerHTML += container.innerHTML;
container.addEventListener('mouseenter', () => scrollSpeed = 0);
container.addEventListener('mouseleave', () => scrollSpeed = 1);


let scrollSpeed = 0.5; // pixels per frame
function autoScroll() {
  container.scrollLeft += scrollSpeed;

  // Reset when halfway through duplicated content
  if (container.scrollLeft >= container.scrollWidth / 2) {
    container.scrollLeft = 0;
  }

  requestAnimationFrame(autoScroll);
}

// Start scrolling
autoScroll();

// near footer what sold
// what sold scrolling
const containerOne = document.getElementById('whatSoldTwice');

// Duplicate content for seamless loop
containerOne.innerHTML += containerOne.innerHTML;
containerOne.addEventListener('mouseenter', () => scrollingSpeed = 0);
containerOne.addEventListener('mouseleave', () => scrollingSpeed = 1);


let scrollingSpeed = 0.5; // pixels per frame
function autoScrolling() {
  containerOne.scrollLeft += scrollingSpeed;

  // Reset when halfway through duplicated content
  if (containerOne.scrollLeft >= containerOne.scrollWidth / 2) {
    containerOne.scrollLeft = 0;
  }

  requestAnimationFrame(autoScrolling);
}

// Start scrolling
autoScrolling();