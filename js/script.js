const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const img = document.getElementsByClassName("img");
let modal = document.getElementById("myModal");

// From HTMLCollection to Array
let imgArr = Array.from(img);

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

// Function for modal
for (i = 0; i < imgArr.length; i++){
  imgArr[i].addEventListener('click', function() {
    let modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
  });
}
  
// Gets span element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// Calling scroll function
window.onscroll = function() {
  displayOnScroll()
};

// BACK TO TOP FUNCTION
function backToTop() {
  const topButton = document.querySelector('.back-to-top');

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}

function displayOnScroll() {
  const topButton = document.querySelector('.back-to-top');

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}
