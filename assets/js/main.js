
$(document).ready(function() {
  "use strict";

  // Fetch skills data and populate the skill bars
  $.getJSON('skills_data.json', function(data) {
    const frontendContainer = $('#frontend-skills');
    const backendContainer = $('#backend-skills');
    const othersContainer = $('#other-skills');

    $.each(data.skills.frontend, function(index, skill) {
      frontendContainer.append(`
        <div class="progress">
          <span class="skill">${skill.name} <i class="val">${skill.value}%</i></span>
          <div class="progress-bar-wrap">
            <div class="progress-bar" role="progressbar" aria-valuenow="${skill.value}" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>`);
    });

    $.each(data.skills.backend, function(index, skill) {
      backendContainer.append(`
        <div class="progress">
          <span class="skill">${skill.name} <i class="val">${skill.value}%</i></span>
          <div class="progress-bar-wrap">
            <div class="progress-bar" role="progressbar" aria-valuenow="${skill.value}" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>`);
    });

    $.each(data.skills.others, function(index, skill) {
      othersContainer.append(`
        <div class="progress">
          <span class="skill">${skill.name} <i class="val">${skill.value}%</i></span>
          <div class="progress-bar-wrap">
            <div class="progress-bar" role="progressbar" aria-valuenow="${skill.value}" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>`);
    });
  });

  // Age
  const birthdayYear = 2000;
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthdayYear;
  $('#age').text(age);

  // Navbar links active state on scroll
  let navbarlinks = $('#navbar .scrollto');
  const navbarlinksActive = () => {
    let position = $(window).scrollTop() + 200;
    navbarlinks.each(function() {
      let section = $(this.hash);
      if (section.length && position >= section.offset().top && position <= (section.offset().top + section.outerHeight())) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  }
  
  $(window).on('load', navbarlinksActive);
  $(document).on('scroll', navbarlinksActive);

  // Scrolls to an element with header offset
  const scrollto = (el) => {
    let elementPos = $(el).offset().top;
    $('html, body').animate({ scrollTop: elementPos }, 600);
  }

  // Back to top button
  let backtotop = $('.back-to-top');
  if (backtotop.length) {
    const toggleBacktotop = () => {
      if ($(window).scrollTop() > 100) {
        backtotop.addClass('active');
      } else {
        backtotop.removeClass('active');
      }
    }
    $(window).on('load', toggleBacktotop);
    $(document).on('scroll', toggleBacktotop);
  }

  // Mobile nav toggle
  $('.mobile-nav-toggle').on('click', function() {
    $('body').toggleClass('mobile-nav-active');
    $(this).toggleClass('bi-list bi-x');
  });

  // Scroll with offset on links with class name .scrollto
  $(document).on('click', '.scrollto', function(e) {
    if ($(this.hash).length) {
      e.preventDefault();
      let body = $('body');
      if (body.hasClass('mobile-nav-active')) {
        body.removeClass('mobile-nav-active');
        let navbarToggle = $('.mobile-nav-toggle');
        navbarToggle.toggleClass('bi-list bi-x');
      }
      scrollto(this.hash);
    }
  });

  // Scroll with offset on page load with hash links in the URL
  $(window).on('load', function() {
    if (window.location.hash) {
      if ($(window.location.hash).length) {
        scrollto(window.location.hash);
      }
    }
  });

  // Preloader
  let preloader = $('#preloader');
  if (preloader.length) {
    $(window).on('load', function() {
      preloader.remove();
    });
  }

  // Hero type effect
  const typed = $('.typed');
  if (typed.length) {
    let typed_strings = typed.data('typed-items').split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  const typeds = $('.typeds');
  if (typeds.length) {
    let typed_strings = typeds.data('typed-items').split(',');
    new Typed('.typeds', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 150,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  // Skills animation
  let skilsContent = $('.skills-content');
  if (skilsContent.length) {
    new Waypoint({
      element: skilsContent[0],
      offset: '80%',
      handler: function(direction) {
        $('.progress .progress-bar').each(function() {
          $(this).css('width', $(this).attr('aria-valuenow') + '%');
        });
      }
    });
  }

  // Portfolio isotope and filter
  $(window).on('load', function() {
    let portfolioContainer = $('.portfolio-container');
    if (portfolioContainer.length) {
      let portfolioIsotope = new Isotope(portfolioContainer[0], {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = $('#portfolio-flters li');

      $(document).on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.arrange({
          filter: $(this).data('filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh();
        });
      });
    }
  });

  // Initiate portfolio lightbox 
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  // Initiate portfolio details lightbox 
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  // Portfolio details slider
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  // Testimonials slider
  new Swiper('.testimonials-slider', {
    speed: 900,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  // Animation on scroll
  $(window).on('load', function() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  });

  // Initiate Pure Counter 
  new PureCounter();
});
