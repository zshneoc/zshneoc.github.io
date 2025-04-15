/*************************************

Template Name:  ALIE - Simple, Lightweight,  Elegant and fully Responsive Bootstrap4,  IT Company,  Multipurpose HTML5 Template.

Author:  Vijay Dhanvai
Version: 3.0
Design and Developed by: W3REIGN
http://w3reign.com/

****************************************/

(function ($) {
  "use strict";
  var w3reign_alie = {
    // Main init function
    init: function () {
      this.config();
      this.events();
    },

    // Define vars for caching
    config: function () {
      this.config = {
        $window: $(window),
        $document: $(document),
      };
    },

    // Events
    events: function () {
      var self = this;

      // Run on document ready
      self.config.$document.on("ready", function () {
        /*$('[data-toggle="popover"]').popover();
                $('[data-toggle="tooltip"]').tooltip(); */

        // WOW Effects
        self.wowEffect();

        // Scroll To Top
        self.scrollToTop();

        // Fixed Header on slider
        self.headerFixed();

        // Accordian Icon change
        self.accordianIcon();

        // Skip To Content
        self.skipToContent();

        // Mobile Menu
        self.mobileMenu();

        // Menu Drop Down
        self.menuDropDown();

        // Left Menu Accordian
        self.leftMenuAccordian();

        // Portfolio Filter
        self.portfolioFilter();

        // Brands or partners Slider
        self.partners();

        // Banner/Hero Slider
        self.heroSlider();

        // Portfolio Slider
        self.portfolioSlider();

        // Testimonials Slider
        self.testimonialsSlider();

        // Blog  Slider
        self.blogSlider();

        // Our Letest Work Slider
        self.ourLetestWork();

        // Portfolio Detail Slider (Single Page)
        self.portfolioDetailSlider();

        // Contact Form Submit
        self.contactFormSubmit();

        // Footer Contact Form Submit
        self.footerContactFormSubmit();
      });

      // Run on Window Load
      self.config.$window.on("load", function () {
        // Preloader
        self.preLoader();
      });
    },

    // WOW Effects
    wowEffect: function () {
      new WOW().init();
    },

    // Preloader
    preLoader: function () {
      $(".pagePreloader").fadeOut(500);
    },

    // Scroll To Top
    scrollToTop: function () {
      var progressPath = document.querySelector(".progress-wrap path");
      var pathLength = progressPath.getTotalLength();
      progressPath.style.transition = progressPath.style.WebkitTransition =
        "none";
      progressPath.style.strokeDasharray = pathLength + " " + pathLength;
      progressPath.style.strokeDashoffset = pathLength;
      progressPath.getBoundingClientRect();
      progressPath.style.transition = progressPath.style.WebkitTransition =
        "stroke-dashoffset 10ms linear";
      var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength) / height;
        progressPath.style.strokeDashoffset = progress;
      };
      updateProgress();
      $(window).scroll(updateProgress);
      var offset = 50;
      var duration = 550;
      jQuery(window).on("scroll", function () {
        if (jQuery(this).scrollTop() > offset) {
          jQuery(".progress-wrap").addClass("active-progress");
        } else {
          jQuery(".progress-wrap").removeClass("active-progress");
        }
      });
      jQuery(".progress-wrap").on("click", function (event) {
        event.preventDefault();
        jQuery("html, body").animate({ scrollTop: 0 }, duration);
        return false;
      });
    },

    // Fixed Header on slider
    headerFixed: function () {
      $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
          $("header").addClass("fixed");
        } else {
          $("header").removeClass("fixed");
        }
      });
    },

    // Accordian Icon change
    accordianIcon: function () {
      $(".card-header a").on("click", function (e) {
        $(this).closest(".card").toggleClass("active");
        $(this).find(".more-less").toggleClass("fa-angle-down fa-times-circle");
      });
    },

    // Skip To Content
    skipToContent: function () {
      $(".scroll-target").on("click", function () {
        var anchor = $(this).attr("href").split("#")[1];
        if (anchor) {
          if ($("#" + anchor).length > 0) {
            var target = $("#" + anchor).offset().top - 50;
            $("html,body").animate({ scrollTop: target }, 1000);
          }
        }
        return false;
      });
    },

    // Mobile Menu
    mobileMenu: function () {
      /* Function for Showing mobile Menu  */
      $(".mobMenu").click(function () {
        $(".navigation .col-sm-12   ul.topNAv").css("display", "block");
        $("body").css("overflow", "hidden");
        $(".overLayMunu").css("bottom", "0");
        setTimeout(function () {
          $(".navigation .col-sm-12   ul.topNAv ")
            .css("display", "block")
            .css("top", "0");
        }, 500);
      });
      /* Function for Hiding mobile Menu  */
      $(".closeMenu").click(function () {
        $("body").css("overflow", "auto");
        $(".navigation  .col-sm-12   ul.topNAv").css("top", "-100%");
        setTimeout(function () {
          $(".overLayMunu").css("bottom", "-100%");
        }, 500);
        setTimeout(function () {
          $(".navigation .col-sm-12   ul.topNAv").css("display", "none");
        }, 500);
      });
    },

    // Menu Drop Down
    menuDropDown: function () {
      /* DropDown */
      $(".dropDown").hover(
        function (e) {
          $(this).children("ul").stop(true, true).slideDown(300);
        },
        function (e) {
          $(this).children("ul").stop(true, true).slideUp(300);
        }
      );
    },

    // Left Menu Accordian
    leftMenuAccordian: function () {
      $(".leftMenu > a.open + .linkBox").stop(true, true).slideDown(300);
      $(".leftMenu > a").click(function () {
        if ($(this).hasClass("open")) {
          $(".leftMenu .linkBox").stop(true, true).slideUp(300);
          $(this).removeClass("open");
          return false;
        } else {
          $(".leftMenu > a").removeClass("open");
          $(".leftMenu .linkBox").stop(true, true).slideUp(300);
          $(this).addClass("open");
          $(this).next(".linkBox").stop(true, true).slideDown(300);
          return false;
        }
      });
    },

    // Portfolio Filter
    portfolioFilter: function () {
      $("#portfolio-tag a").click(function () {
        var dataTarget = $(this).attr("data-target");
        $("#portfolio-tag a").removeClass("activeTab");
        $(this).addClass("activeTab");
        $("#catlable").html($(this).html());
      });
    },

    // Brands or partners Slider
    partners: function () {
      var $element = $(".brands .owl-carousel");
      if ($element.length > 0) {
        $element.owlCarousel({
          loop: true,
          margin: 30,
          dots: false,
          autoplay: true,
          smartSpeed: 1000,
          autoplayHoverPause: true,
          responsive: {
            0: {
              items: 2,
            },
            480: {
              items: 3,
              margin: 20,
            },
            768: {
              items: 4,
              margin: 20,
            },
            1024: {
              items: 5,
              margin: 30,
            },
            1300: {
              items: 6,
              margin: 30,
            },
          },
        });
      }
    },

    // Banner/Hero Slider
    heroSlider: function () {
      var $element = $(".bannerSlider");
      if ($element.length > 0) {
        $element.owlCarousel({
          loop: true,
          items: 1,
          margin: 0,
          autoplay: true,
          nav: true,
          dots: true,
          navText: [" ", " "],
          smartSpeed: 3000,
          autoplaySpeed: 5000,
          autoplayHoverPause: true,
          animateOut: "fadeOut",
          responsive: {
            0: {
              dots: false,
            },
            768: {
              dots: true,
            },
          },
        });
      }
      $(".bannerSlider").append(' <div class="slider-one_pattern"></div>');
    },

    // Portfolio Slider
    portfolioSlider: function () {
      var $element = $(".portfolioSlider");
      if ($element.length > 0) {
        $element.owlCarousel({
          loop: true,
          items: 1,
          margin: 0,
          nav: true,
          dots: false,
          smartSpeed: 1000,
        });
      }
    },

    // Testimonials Slider
    testimonialsSlider: function () {
      var $element = $(".testimonialsSlider");
      if ($element.length > 0) {
        $element.owlCarousel({
          loop: true,
          items: 1,
          margin: 0,
          autoplay: true,
          nav: true,
          dots: false,
          smartSpeed: 2000,
          autoplaySpeed: 5000,
          autoplayHoverPause: true,
        });
      }
    },

    // Blog  Slider
    ourLetestWork: function () {
      var $element = $(".workSlider");
      if ($element.length > 0) {
        $element.owlCarousel({
          loop: true,
          items: 1,
          margin: 0,
          autoplay: true,
          nav: true,
          dots: false,
          smartSpeed: 2000,
          autoplaySpeed: 5000,
          autoplayHoverPause: true,
        });
      }
    },

    // Our Letest Work Slider
    portfolioDetailSlider: function () {
      var $element = $(".portfolioDetailSlider");
      if ($element.length > 0) {
        $element.owlCarousel({
          loop: true,
          items: 1,
          margin: 0,
          autoplay: true,
          nav: true,
          navigationText: ["", ""],
          dots: false,
          smartSpeed: 1000,
          autoplaySpeed: 5000,
          autoplayHoverPause: true,
        });
      }
    },

    // Portfolio Detail Slider (Single Page)
    blogSlider: function () {
      var $element = $(".latest-blog");
      if ($element.length > 0) {
        $element.owlCarousel({
          loop: true,
          items: 3,
          margin: 20,
          autoplay: true,
          nav: true,
          dots: false,
          smartSpeed: 1000,
          autoplaySpeed: 1000,
          autoplayHoverPause: true,
          responsive: {
            0: {
              items: 1,
            },
            480: {
              items: 2,
            },
            768: {
              items: 2,
            },
            1024: {
              items: 3,
            },
          },
        });
      }
    },

    // Footer Contact Form Submit
    footerContactFormSubmit: function () {
      if ($("#footerContactForm").length) {
        $("#footerContactForm").validate({
          rules: {
            namef: {
              required: true,
            },
            emailf: {
              required: true,
              email: true,
            },
            messagef: {
              required: true,
            },
          },
          messages: {
            namef: "Please enter your name",
            email: "Please enter your email",
            messagef: "Type your message",
          },
          errorElement: "span",

          submitHandler: function (form) {
            $.ajax({
              type: "POST",
              url: "./contact-footer.php",
              data: $(form).serialize(),
              success: function () {
                $("#success-footer").slideDown("slow");
                setTimeout(function () {
                  $("#success-footer").slideUp("slow");
                }, 4000);
                form.reset();
              },
              error: function () {
                $("#error-footer").slideDown("slow");
                setTimeout(function () {
                  $("#error-footer").slideUp("slow");
                }, 4000);
              },
            });
            return false;
          },
        });
      }
    },

    // Contact Us Page Form Submit
    contactFormSubmit: function () {
      if ($("#contact-form").length) {
        $("#contact-form").validate({
          rules: {
            name: {
              required: true,
            },
            email: {
              required: true,
              email: true,
            },
            subject: {
              required: true,
            },
            contact: {
              required: true,
            },
            message: {
              required: true,
            },
          },

          messages: {
            name: "Please enter your name",
            //email: "Please enter your email",
            subject: "What's the subject about contact?",
            message: "Type your message",
            contact: "Type your contact number",
          },
          errorElement: "span",

          submitHandler: function (form) {
            $("#loader").css("display", "inline-block");
            $.ajax({
              type: "POST",
              url: "./contact-mail.php",
              data: $(form).serialize(),
              success: function () {
                $("#loader").hide();
                $("#success").slideDown("slow");
                setTimeout(function () {
                  $("#success").slideUp("slow");
                }, 4000);
                form.reset();
              },
              error: function () {
                $("#loader").hide();
                $("#error").slideDown("slow");
                setTimeout(function () {
                  $("#error").slideUp("slow");
                }, 4000);
              },
            });
            return false;
          },
        });
      }
    },
  }; // end w3reign_alie

  // Start things up
  w3reign_alie.init();
})(jQuery);
