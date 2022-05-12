    "use strict";


    /*--
        preloader
        ¸ü¶à¾«Æ·Ä£°å£ºhttp://www.bootstrapmb.com
    -----------------------------------*/
     $(window).on('load', function(event) {
        $('#preloader').delay(500).fadeOut(500);
    });

    /*--
        Header Sticky
    -----------------------------------*/

    window.onscroll = function () {
        const left = document.getElementById("header");

        if (left.scrollTop > 50 || self.pageYOffset > 50) {
            left.classList.add("sticky")
        } else {
            left.classList.remove("sticky");
        }
    }    

    /* Get Sibling */
    const getSiblings = function (elem) {
        const siblings = []
        let sibling = elem.parentNode.firstChild
        while (sibling) {
            if (sibling.nodeType === 1 && sibling !== elem) {
                siblings.push(sibling)
            }
            sibling = sibling.nextSibling
        }
        return siblings
    }

    /* Slide Up */
    const slideUp = (target, time) => {
        const duration = time ? time : 500;
        target.style.transitionProperty = 'height, margin, padding'
        target.style.transitionDuration = duration + 'ms'
        target.style.boxSizing = 'border-box'
        target.style.height = target.offsetHeight + 'px'
        target.offsetHeight
        target.style.overflow = 'hidden'
        target.style.height = 0
        window.setTimeout(() => {
            target.style.display = 'none'
            target.style.removeProperty('height')
            target.style.removeProperty('overflow')
            target.style.removeProperty('transition-duration')
            target.style.removeProperty('transition-property')
        }, duration)
    }

    /* Slide Down */
    const slideDown = (target, time) => {
        const duration = time ? time : 500;
        target.style.removeProperty('display')
        let display = window.getComputedStyle(target).display
        if (display === 'none') display = 'block'
        target.style.display = display
        const height = target.offsetHeight
        target.style.overflow = 'hidden'
        target.style.height = 0
        target.offsetHeight
        target.style.boxSizing = 'border-box'
        target.style.transitionProperty = 'height, margin, padding'
        target.style.transitionDuration = duration + 'ms'
        target.style.height = height + 'px'
        window.setTimeout(() => {
            target.style.removeProperty('height')
            target.style.removeProperty('overflow')
            target.style.removeProperty('transition-duration')
            target.style.removeProperty('transition-property')
        }, duration)
    }

    /* Slide Toggle */
    const slideToggle = (target, time) => {
        const duration = time ? time : 500;
        if (window.getComputedStyle(target).display === 'none') {
            return slideDown(target, duration)
        } else {
            return slideUp(target, duration)
        }
    }


  /*--    
      Counter Up
  -----------------------------------*/  

    $('.counter').counterUp({
        delay: 10,
        time: 1500,
    });
 
    /*--
        Case Study Active
	-----------------------------------*/
    var swiper = new Swiper('.case-study-active', {
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,        
        grabCursor: true,
        navigation: {
            nextEl: '.case-study-active .swiper-button-next',
            prevEl: '.case-study-active .swiper-button-prev',
        },
        breakpoints: {
            0: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 2,
            },
          },
    });

    /*--    
        Brand Active
    -----------------------------------*/
    var swiper = new Swiper(".brand-active .swiper-container", {
        slidesPerView: 5,
        spaceBetween: 30,
        autoplay: {
            delay: 1000
        },
        loop: true,
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 5,
          },
        },
    });

    /*--
        Team Active
	-----------------------------------*/
    var swiper = new Swiper('.team-active', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".team-active .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          }
        }
    });

    /*--
        Service-2 Active
	-----------------------------------*/
    var swiper = new Swiper('.service-2-active', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".service-2-active .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          }
        }
    });

    /*--
        Service-3 Active
	-----------------------------------*/
    var swiper = new Swiper('.service-3-active', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".service-3-active .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          }
        }
    });

    /*--
        Testimonial Active
	-----------------------------------*/
    var swiper = new Swiper('.testimonial-active', {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".testimonial-active .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.testimonial-active .swiper-button-next',
            prevEl: '.testimonial-active .swiper-button-prev',
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 2,
          }
        }
    });

    /*--
        Testimonial-2 Active
	-----------------------------------*/
    var swiper = new Swiper('.testimonial-2-active', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,        
        pagination: {
            el: ".testimonial-2-active .swiper-pagination",
            clickable: true,
        },
    });

    /*--
        Service Active
	-----------------------------------*/
    var swiper = new Swiper('.service-2-active', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".service-2-active .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          }
        }
    });

    /*--
        Testimonial-3 Active
	-----------------------------------*/
    var swiper = new Swiper('.testimonial-3-active', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,        
        pagination: {
            el: ".testimonial-3-active .swiper-pagination",
            clickable: true,
        },
    });

    /*--
        Testimonial-4 Active
	-----------------------------------*/
    var swiper = new Swiper('.testimonial-4-active', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true, 
    });

    /*--
        Testimonial-7 Active
	-----------------------------------*/
    var swiper = new Swiper('.testimonial-7-active', {
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            centeredSlides: false,
          },
          992: {
            slidesPerView: 3,
          }
        }
    });

     /*--
        Service-6 Active
	-----------------------------------*/
    var swiper = new Swiper('.service-6-active', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      pagination: {
          el: ".service-6-active .swiper-pagination",
          clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        }
      }
  });

  /*--
        Testimonial-8 Active
    -----------------------------------*/
    var swiper = new Swiper('.testimonial-8-active', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,        
  });

    /*--
        AOS
    -----------------------------------*/   
    AOS.init({
        duration: 1200,
        once: true,
    });




