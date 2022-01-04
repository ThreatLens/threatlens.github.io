/*!
* Start Bootstrap - Business Frontpage v5.0.7 (https://startbootstrap.com/template/business-frontpage)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-frontpage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#282828", // "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

// Elm.Main.init({node: document.getElementById("elm-tabs")});

// document.getElementById("contact-us").onclick = function() {
//   document.getElementById("contact-form").classList.add("show-form");
//   document.getElementById("contact-us-container").classList.add("hide-button");
// };
// document.getElementById("contact-form").style.maxHeight = "0px";
// document.getElementById("contact-us").style.display = "inline-block";
window.location.hash = '#';
window.addEventListener('hashchange', function() {
  var hash = window.location.hash.substring(1);
  var xs = ['identify-threats', 'compare-technologies', 'execute-mitigations'];
  if (xs.includes(hash)) {
    for (var i = 0; i < xs.length; i++) {
      var tab_id = xs[i] + '-tab';
      var link_id = xs[i] + '-link';
      document.getElementById(tab_id).classList.remove('active-tab');
      document.getElementById(link_id).classList.remove('tab-link-selected');
    }
    var tab_id = hash + '-tab';
    var link_id = hash + '-link';
    document.getElementById(tab_id).classList.add('active-tab');
    document.getElementById(link_id).classList.add('tab-link-selected');

  }
});

var form = document.getElementById("contactForm");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("submitButton").classList.add("disabled");
  const formData = new FormData();
  formData.append('name', document.getElementById("name-field").value);
  formData.append('company', document.getElementById("company-field").value);
  formData.append('email', document.getElementById("email-field").value);
  formData.append('phone', document.getElementById("phone-field").value);
  formData.append('message', document.getElementById("message-field").value);
  fetch("https://getform.io/f/613471ca-5e15-4579-bfc8-9c56f1db6ca7", {
    method: "POST",
    body: formData
  })
  .then(function(response) {
    console.log(response);
    if (response.ok) {
      document.getElementById("contactForm").style.display = "none";
      document.getElementById("form-success").style.display = "block";
    } else {
      document.getElementById("contactForm").style.display = "none";
      document.getElementById("form-fail").style.display = "block";
      document.getElementById("form-fail-text").innerHTML = response.statusText;
    }
  })
  .catch(error => console.log(error));
});