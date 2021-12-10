AOS.init(
    {easing: 'ease-out-back',
    duration: 1000
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    reveal.style.display = "block";
  } else {
    reveal.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
}



