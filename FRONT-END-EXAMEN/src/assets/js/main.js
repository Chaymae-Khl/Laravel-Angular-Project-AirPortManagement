/**
* Template Name: Arsha - v4.10.0
* Template URL: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Initiate  glightbox 
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
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

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

})()






/**js acheter */
$(document).ready(function(){

  //For Card Number formatted input
  var cardNum = document.getElementById('cr_no');
  cardNum.onkeyup = function (e) {
      if (this.value == this.lastValue) return;
      var caretPosition = this.selectionStart;
      var sanitizedValue = this.value.replace(/[^0-9]/gi, '');
      var parts = [];
      
      for (var i = 0, len = sanitizedValue.length; i < len; i += 4) {
          parts.push(sanitizedValue.substring(i, i + 4));
      }
      
      for (var i = caretPosition - 1; i >= 0; i--) {
          var c = this.value[i];
          if (c < '0' || c > '9') {
              caretPosition--;
          }
      }
      caretPosition += Math.floor(caretPosition / 4);
      
      this.value = this.lastValue = parts.join('-');
      this.selectionStart = this.selectionEnd = caretPosition;
  }
  
  //For Date formatted input
  var expDate = document.getElementById('exp');
  expDate.onkeyup = function (e) {
      if (this.value == this.lastValue) return;
      var caretPosition = this.selectionStart;
      var sanitizedValue = this.value.replace(/[^0-9]/gi, '');
      var parts = [];
      
      for (var i = 0, len = sanitizedValue.length; i < len; i += 2) {
          parts.push(sanitizedValue.substring(i, i + 2));
      }
      
      for (var i = caretPosition - 1; i >= 0; i--) {
          var c = this.value[i];
          if (c < '0' || c > '9') {
              caretPosition--;
          }
      }
      caretPosition += Math.floor(caretPosition / 2);
      
      this.value = this.lastValue = parts.join('/');
      this.selectionStart = this.selectionEnd = caretPosition;
  }
    
    // Radio button
    $('.radio-group .radio').click(function(){
        $(this).parent().parent().find('.radio').removeClass('selected');
        $(this).addClass('selected');
    });
  })

  
/**js enregistrer information passager */
$(document).ready(function() {
  $('#contact_form').bootstrapValidator({
      // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
      feedbackIcons: {
          valid: 'glyphicon glyphicon-ok',
          invalid: 'glyphicon glyphicon-remove',
          validating: 'glyphicon glyphicon-refresh'
      },
      fields: {
          first_name: {
              validators: {
                      stringLength: {
                      min: 2,
                  },
                      notEmpty: {
                      message: 'Please enter your First Name'
                  }
              }
          },
           last_name: {
              validators: {
                   stringLength: {
                      min: 2,
                  },
                  notEmpty: {
                      message: 'Please enter your Last Name'
                  }
              }
          },
     user_name: {
              validators: {
                   stringLength: {
                      min: 8,
                  },
                  notEmpty: {
                      message: 'Please enter your Username'
                  }
              }
          },
     user_password: {
              validators: {
                   stringLength: {
                      min: 8,
                  },
                  notEmpty: {
                      message: 'Please enter your Password'
                  }
              }
          },
    confirm_password: {
              validators: {
                   stringLength: {
                      min: 8,
                  },
                  notEmpty: {
                      message: 'Please confirm your Password'
                  }
              }
          },
          email: {
              validators: {
                  notEmpty: {
                      message: 'Please enter your Email Address'
                  },
                  emailAddress: {
                      message: 'Please enter a valid Email Address'
                  }
              }
          },
          contact_no: {
              validators: {
                stringLength: {
                      min: 12, 
                      max: 12,
                  notEmpty: {
                      message: 'Please enter your Contact No.'
                   }
              }
          },
     department: {
              validators: {
                  notEmpty: {
                      message: 'Please select your Department/Office'
                  }
              }
          },
              }
          }
      })
      .on('success.form.bv', function(e) {
          $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
              $('#contact_form').data('bootstrapValidator').resetForm();

          // Prevent form submission
          e.preventDefault();

          // Get the form instance
          var $form = $(e.target);

          // Get the BootstrapValidator instance
          var bv = $form.data('bootstrapValidator');

          // Use Ajax to submit form data
          $.post($form.attr('action'), $form.serialize(), function(result) {
              console.log(result);
          }, 'json');
      });
});