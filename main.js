let scrollPrecentage = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    scrollProgress.style.background = `conic-gradient(#ffb7c5 ${scrollValue}%, #2b2f38 ${scrollValue}%)`;
  };
  window.onscroll = scrollPrecentage;
  window.onload = scrollPrecentage;
  
  $(window).scroll(function () {
    if ($(document).scrollTop() > 20) {
      $(".navigation").addClass("fix-icon");
    } else {
      $(".navigation").removeClass("fix-icon");
    }
  });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });
  $(window).scroll(function () {
    if ($(document).scrollTop() > 20) {
      $(".navigation").addClass("fix-icon");
    } else {
      $(".navigation").removeClass("fix-icon");
    }
  });