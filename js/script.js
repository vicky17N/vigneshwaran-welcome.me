$(document).ready(function () {

  $('#menu').click(function () {
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('scroll load', function () {
      $('#menu').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');

      if (window.scrollY > 60) {
          document.querySelector('#scroll-top').classList.add('active');
      } else {
          document.querySelector('#scroll-top').classList.remove('active');
      }

      // scroll spy
      $('section').each(function () {
          let height = $(this).height();
          let offset = $(this).offset().top - 200;
          let top = $(window).scrollTop();
          let id = $(this).attr('id');

          if (top > offset && top < offset + height) {
              $('.navbar ul li a').removeClass('active');
              $('.navbar').find(`[href="#${id}"]`).addClass('active');
          }
      });
  });

  // smooth scrolling
  $('a[href*="#"]').on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top,
      }, 500, 'linear')
  });

  // <!-- emailjs to mail contact form data -->
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    var formData = new FormData(event.target);
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "process_form.php", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("Form submitted successfully!");
          document.getElementById("contact-form").reset();
          alert("Form submitted successfully!");
        } else {
          console.log("Form submission failed.");
          alert("Form submission failed. Please try again.");
        }
      }
    };
    
    xhr.send(formData);
  });
  
  // <!-- emailjs to mail contact form data -->

});

document.addEventListener('visibilitychange',
  function () {
      if (document.visibilityState === "visible") {
          document.title = "Portfolio | Vigneshwaran";
          $("#favicon").attr("href", "assets/images/favicon.png");
      }
      else {
          document.title = "Come Back To Portfolio";
          $("#favicon").attr("href", "assets/images/favhand.png");
      }
  });

// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
  strings: ["Web development","Frontend development","Software Development"  ],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});
// <!-- typed js effect ends -->


// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 2,
});
// <!-- tilt js effect ends -->


// pre loader start
 function loader() {
     document.querySelector('.loader-container').classList.add('fade-out');
 }
 function fadeOut() {
     setInterval(loader, 3000);
 }
 window.onload = fadeOut;
// pre loader end

// Start of Tawk.to Live Chat
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/66aa47221601a2195b9ed047/1i44ibocl';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();

// End of Tawk.to Live Chat


/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
  origin: 'left',
  distance: '5000px',
  duration: 1000,
  reset: false
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .image', { delay: 300 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 500 });
srtop.reveal('.home .github', { interval: 500 });
srtop.reveal('.home .twitter', { interval: 500 });
srtop.reveal('.home .telegram', { interval: 500 });
srtop.reveal('.home .instagram', { interval: 500 });
srtop.reveal('.home .dev', { interval: 500 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 400 });
srtop.reveal('.skills .container .bar',{ interval: 150 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 600});

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 400 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 200 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 200 });
srtop.reveal('.contact .container .form-group', { delay: 200 });
