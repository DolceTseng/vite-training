import './assets/scss/all.scss';


console.log("Hello world!");

$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      console.log("Scroll to Position");
    }
  });

