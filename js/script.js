$(document).ready(function () {
  $(".phone-number-input").inputmask({
    mask: "+7 (999) 999 - 99 - 99",
  });

  $(".send-form").validate({
    errorPlacement: function (error, element) {},
  });

  $(".stock-slider").slick({
    dots: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".stock-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".stock-slider-wrap .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  $(".img-slider").slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 800,
  });

  var isMobile = window.matchMedia("(max-width: 1025px)").matches;

  if (!isMobile) {
    // Включаем эффект hover для десктопов
    $(".menu-item").hover(function () {
      var tabId = $(this).data("tab");

      // Удаляем активные классы
      $(".menu-item").removeClass("active");
      $(".tab-contents .item").removeClass("active");

      // Добавляем активные классы для выбранного таба
      $(this).addClass("active");
      $('.tab-contents .item[data-tab="' + tabId + '"]').addClass("active");
    });
  }

  // Включаем эффект клика для мобильных устройств
  $(".menu1 .menu-item").on("click", function () {
    var tabId = $(this).data("tab");

    $(".arrow1").addClass("show");

    // Удаляем активные классы
    $(".menu-item").removeClass("active");
    $(".tab-contents .item").removeClass("active");

    // Добавляем активные классы для выбранного таба
    $(this).addClass("active");
    $('.tab-contents .item[data-tab="' + tabId + '"]').addClass("active");

    // Прячем меню и показываем контент для мобильных устройств
    $(this).closest(".tab-menus").addClass("hide");
    $(".tab-contents").addClass("show");
  });

  $(".tab-contents .item .info h3").on("click", function () {
    // $(".tab-contents .item a").removeClass("show");
    $(this).closest(".info").find("a").addClass("show");
  });

  $(".arrow1").on("click", function () {
    $(this).removeClass("show");
    $(".tab-contents").removeClass("show");
    $(".tab-menus").removeClass("hide");
  });

  $(".top-info-slider").slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  });

  $(".top-info-slider2").slick({
    dots: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
        },
      },
    ],
  });

  $("ul.tabs li").click(function () {
    var tab_id = $(this).attr("data-tab");

    // Удаляем активные классы
    $("ul.tabs li").removeClass("active");
    $(".tab-content").removeClass("active");

    // Добавляем активный класс для выбранной вкладки и ее контента
    $(this).addClass("active");
    $("#" + tab_id).addClass("active");
  });

  $(".catalog-info-slider").slick({
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,

    prevArrow: $(".catalog-info-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".catalog-info-slider-wrap .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          autoplay: true,
          autoplaySpeed: 1000,
          speed: 800,
        },
      },
    ],
  });

  $(".advantages-info-slider").slick({
    dots: false,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
          autoplay: true,
          autoplaySpeed: 1000,
          speed: 800,
        },
      },
    ],
  });

  $(".wholesale-brends-slider").slick({
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 1200,
    speed: 800,
  });

  $(".advantages-slider").slick({
    dots: false,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 800,
        },
      },
    ],
  });

  $(".other-slider").slick({
    dots: true,
    arrows: true,
    slidesToShow: 1,
    variableWidth: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    prevArrow: $(".other-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".other-slider-wrap .slider-navigation .slick-next"),
  });

  $(".address-slider").slick({
    dots: false,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          variableWidth: true,
          slidesToScroll: 1,
          slidesToShow: 1,
          autoplay: true,
          dots: false,
          autoplaySpeed: 2000,
          speed: 800,
        },
      },
    ],
  });

  $(".founders-slider").slick({
    dots: false,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          variableWidth: true,
          slidesToScroll: 1,
          slidesToShow: 1,
          autoplay: true,
          dots: true,
          autoplaySpeed: 2000,
          speed: 800,
        },
      },
    ],
  });
  $(".official-slider").slick({
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
  });

  $(".expertise-slider").slick({
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    prevArrow: $(".expertise-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".expertise-slider-wrap .slider-navigation .slick-next"),
  });

  $(".services-slider").slick({
    dots: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    responsive: [
      {
        breakpoint: 1601,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
        },
      },
    ],
  });

  function initializeSlider11() {
    if (window.innerWidth <= 768) {
      // На мобильных (768px и меньше)
      if (!$(".franchise-slider").hasClass("slick-initialized")) {
        $(".franchise-slider").slick({
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          variableWidth: true,
          adaptiveHeight: true,
        });
      }
    } else {
      // На десктопе (больше 768px)
      if ($(".franchise-slider").hasClass("slick-initialized")) {
        $(".franchise-slider").slick("unslick"); // Убираем слайдер
      }
    }
  }

  // Инициализация при загрузке
  initializeSlider11();

  // Реинициализация при изменении размера окна
  $(window).on("resize", function () {
    initializeSlider11();
  });

  function initializeSlider8() {
    if (window.innerWidth <= 1701) {
      // На мобильных (768px и меньше)
      if (!$(".branded-slider").hasClass("slick-initialized")) {
        $(".branded-slider").slick({
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          variableWidth: true,
          adaptiveHeight: true,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                variableWidth: false,
              },
            },
          ],
        });
      }
    } else {
      // На десктопе (больше 768px)
      if ($(".branded-slider").hasClass("slick-initialized")) {
        $(".branded-slider").slick("unslick"); // Убираем слайдер
      }
    }
  }

  // Инициализация при загрузке
  initializeSlider8();

  // Реинициализация при изменении размера окна
  $(window).on("resize", function () {
    initializeSlider8();
  });

  function initializeSlider9() {
    if (window.innerWidth <= 1701) {
      // На мобильных (768px и меньше)
      if (!$(".branded-slider2").hasClass("slick-initialized")) {
        $(".branded-slider2").slick({
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          variableWidth: true,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                variableWidth: false,
              },
            },
          ],
        });
      }
    } else {
      // На десктопе (больше 768px)
      if ($(".branded-slider2").hasClass("slick-initialized")) {
        $(".branded-slider2").slick("unslick"); // Убираем слайдер
      }
    }
  }

  // Инициализация при загрузке
  initializeSlider9();

  // Реинициализация при изменении размера окна
  $(window).on("resize", function () {
    initializeSlider9();
  });

  function initializeSlider10() {
    if (window.innerWidth <= 1701) {
      // На мобильных (768px и меньше)
      if (!$(".branded-slider3").hasClass("slick-initialized")) {
        $(".branded-slider3").slick({
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          variableWidth: true,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                variableWidth: false,
              },
            },
          ],
        });
      }
    } else {
      // На десктопе (больше 768px)
      if ($(".branded-slider3").hasClass("slick-initialized")) {
        $(".branded-slider3").slick("unslick"); // Убираем слайдер
      }
    }
  }

  // Инициализация при загрузке
  initializeSlider10();

  // Реинициализация при изменении размера окна
  $(window).on("resize", function () {
    initializeSlider10();
  });

  $(".services-show-all").on("click", function () {
    $(".services-items .services-item").removeClass("hide");
  });

  $(".show-all").on("click", function () {
    $(".key-shares-item").removeClass("hide");
  });

  function slickInit() {
    if ($(window).width() < 1024) {
      // Если ширина экрана меньше 1024px
      if (!$(".expertise-info-slider").hasClass("slick-initialized")) {
        $(".expertise-info-slider").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                speed: 800,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              },
            },
          ],
        });
      }
    } else {
      if ($(".expertise-info-slider").hasClass("slick-initialized")) {
        $(".expertise-info-slider").slick("unslick"); // Отключить слайдер на больших экранах
      }
    }
  }

  slickInit(); // Запускаем функцию при загрузке страницы
  $(window).resize(function () {
    // Запускаем функцию при изменении размера экрана
    slickInit();
  });

  function slickInit2() {
    if ($(window).width() < 1024) {
      // Если ширина экрана меньше 1024px
      if (!$(".news-slider").hasClass("slick-initialized")) {
        $(".news-slider").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
          variableWidth: true,
          responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              },
            },
          ],
        });
      }
    } else {
      if ($(".news-slider").hasClass("slick-initialized")) {
        $(".news-slider").slick("unslick"); // Отключить слайдер на больших экранах
      }
    }
  }

  slickInit2(); // Запускаем функцию при загрузке страницы
  $(window).resize(function () {
    // Запускаем функцию при изменении размера экрана
    slickInit2();
  });

  $(".reviews-slider").slick({
    dots: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $(".reviews-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".reviews-slider-wrap .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 1451,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 651,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 800,
        },
      },
    ],
  });

  $(".workshops-slider").slick({
    dots: true,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: $(".workshops-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".workshops-slider-wrap .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 1451,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  const typewriterElement = document.getElementById("typewriter");
  const typewriterElement2 = document.getElementById("typewriter2");

  if (!typewriterElement || !typewriterElement2) {
    console.error("Элементы с id 'typewriter' и/или 'typewriter2' не найдены.");
  } else {
    // Массив слов для печатания
    const textsToType = ["агрегаторов", "стартеров", "турбин"];
    const typingSpeed = 150; // Скорость печати (в миллисекундах)
    const deletingSpeed = 100; // Скорость удаления (если нужен повторяющийся эффект)
    const pauseBetween = 2000; // Пауза между циклами

    let textIndex = 0; // Индекс текущего слова
    let charIndex = 0; // Текущая позиция текста
    let isDeleting = false; // Флаг для удаления текста

    function typeEffect() {
      const currentText = textsToType[textIndex];
      const displayedText = isDeleting
        ? currentText.substring(0, charIndex--)
        : currentText.substring(0, charIndex++);

      typewriterElement.textContent = displayedText;
      typewriterElement2.textContent = displayedText;

      if (!isDeleting && charIndex === currentText.length) {
        // Если текст полностью напечатан, сделать паузу
        setTimeout(() => (isDeleting = true), pauseBetween);
      } else if (isDeleting && charIndex === 0) {
        // Если текст полностью удалён, переключиться на следующее слово
        isDeleting = false;
        textIndex = (textIndex + 1) % textsToType.length; // Переход к следующему слову
      }

      const delay = isDeleting ? deletingSpeed : typingSpeed;
      setTimeout(typeEffect, delay);
    }

    typeEffect(); // Запуск эффекта
  }

  $(".popup").magnificPopup({
    type: "inline",
    mainClass: "mfp-fade",
  });

  // Инициализация валидации
  $("#request-popup-form").validate({
    errorPlacement: function (error, element) {
      // Не отображаем стандартное сообщение об ошибке
    },
  });

  // Обработчик отправки формы
  $(".request-popup-form").on("submit", function (e) {
    e.preventDefault(); // Отмена стандартного действия (перезагрузка страницы)

    if ($(this).valid()) {
      // Закрыть текущий попап
      $.magnificPopup.close();

      // Открыть Thank-popup
      $.magnificPopup.open({
        items: {
          src: "#thank-popup", // ID попапа
        },
        type: "inline",
      });
    }
  });

  $(".franchise-info-slider").slick({
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
        },
      },
    ],
  });

  $(".franchise-info-slider2").slick({
    dots: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 800,
        },
      },
    ],
  });

  function initializeSlidersInTabs() {
    $(".tab-content .trust-slider").each(function () {
      const $slider = $(this);

      // Проверяем, был ли уже инициализирован слайдер
      if (!$slider.hasClass("slick-initialized")) {
        $slider.slick({
          dots: true,
          arrows: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          prevArrow: $slider.closest(".trust-slider-wrap").find(".slick-prev"),
          nextArrow: $slider.closest(".trust-slider-wrap").find(".slick-next"),
          responsive: [
            {
              breakpoint: 1451,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 1201,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 651,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
      }
    });
  }

  // Инициализируем слайдеры при загрузке страницы
  initializeSlidersInTabs();

  // Обновляем слайдеры при переключении вкладок
  $(".tabs").on("click", "li", function () {
    setTimeout(function () {
      initializeSlidersInTabs();
    }, 100); // Небольшая задержка для корректного отображения
  });

  $(".see-all").on("click", function () {
    $(this).closest(".by-brand").find(".info-items").toggleClass("show");
    $(this).find("img").toggleClass("rotate");
    if (!$(".info-items").hasClass("show")) {
      $(".see-all span").text("Смотреть все");
    } else {
      $(".see-all span").text("Скрыть все");
    }
  });

  $(".header .catalog-btn").on("click", function (e) {
    e.preventDefault();
    $(".menu-wrap").addClass("open");
    $("body, html").addClass("overflow");
  });

  $(".menu-wrap .close").on("click", function (e) {
    e.preventDefault();
    $(".menu-wrap").removeClass("open");
    $("body, html").removeClass("overflow");
  });

  $(".catalog-products .show").on("click", function () {
    $(this).hide();
    $(this).closest(".info").find(".products-stock-item").removeClass("hide");
  });

  $(".select-wrap select").select2({
    minimumResultsForSearch: 6,
  });

  $(".filter-info .info-top").on("click", function () {
    $(this).closest(".filter-info").find(".info-bottom").toggleClass("hide");
    $(this).find("img").toggleClass("rotate");
  });

  $(".filter-mob-btn").on("click", function (e) {
    e.preventDefault();
    $(".filter-wrap").addClass("open");
    $("body, html").addClass("overflow");
  });
  $(".top-mobile .close").on("click", function (e) {
    e.preventDefault();
    $(".filter-wrap").removeClass("open");
    $("body, html").removeClass("overflow");
  });

  $(".read-btn").on("click", function () {
    $(this).closest(".information").find(".texts").toggleClass("visible");
    $(this).closest(".information").find(".list").toggleClass("visible");
    $(this).find("img").toggleClass("rotate");
  });

  $(".popup-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
  });

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    asNavFor: ".slider-nav",
    prevArrow: $(".big-slider .slider-navigation .slick-prev"),
    nextArrow: $(".big-slider .slider-navigation .slick-next"),
  });
  $(".slider-nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    arrows: true,
    focusOnSelect: true,
    vertical: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          focusOnSelect: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          vertical: false,
          centerMode: true,
          slidesToShow: 2,
          focusOnSelect: true,
        },
      },
      {
        breakpoint: 475,
        settings: {
          vertical: false,
          centerMode: true,
          slidesToShow: 1,
          focusOnSelect: true,
        },
      },
    ],
  });

  $(".catalog-in-info-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1601,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
          autoplay: true,
          autoplaySpeed: 1000,
          speed: 800,
        },
      },
    ],
  });
});
