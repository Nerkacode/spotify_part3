let navbar = document.getElementById('scroll_bottom');

window.addEventListener('scroll', function(e) {
  if (window.pageYOffset > 100) {
    navbar.classList.add('nav_background')

  } else {
    navbar.classList.remove('nav_background')

  }

  console.log(window.pageYOffset)

});
