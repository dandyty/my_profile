//initialize and add the map
function initMap() {
  //location
  const loc = { lat: 36.318460, lng: -80.864950 };
  //Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  //the marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}

//sticky meny background
window.addEventListener('scroll', function () {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.8;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});

//smooth scrolling
$("#navbar a, .btn").on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});