/*
    $(document).ready(function () {
        let a = document.querySelector("button.btn-nav");
        a.addEventListener("click", (b) => {
            a.classList.toggle("open");
        }),
            $(".btn-nav").click(function () {
                $(".mob-header").toggleClass("active");
                $(".search-show").removeClass("active");
                $("body").toggleClass("active-hide");
            });
        $(".mob-header li a").click(function () {
            $(this).siblings().slideToggle();
            $(this).toggleClass("active");
        });

        $(".search-show .search-close").click(function () {
            $(".search-show").removeClass("active");
            $("body").removeClass("overflow-hidden");
        });
        $(function () {
            $(".header-icons li .fa-search").on("click", function (e) {
                $(".search-show").addClass("active");
                $("body").addClass("overflow-hidden");
                e.stopPropagation()
                $(document).on("click", function (e) {
                    if ($(e.target).is(".search-show ,.search-show *") === false) {
                        $(".search-show").removeClass("active");
                        $("body").removeClass("overflow-hidden");
                    }
                });
            });
        });
        $("button.three-grid").click(function () {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            $(".vessel.items ul li").addClass("column-md-4");
        });
        $("button.four-grid").click(function () {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            $(".vessel.items ul li").removeClass("column-md-4");

        }); $("button.one-grid").click(function () {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            $(".vessel.items ul li").addClass("column-12");

        }); $("button.two-grid").click(function () {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            $(".vessel.items ul li").removeClass("column-12");

        });

        $(".accord-content button").click(function () {
            $(this).toggleClass('active');
            $(this).siblings('p').slideToggle();
        });
        
        // ab-code-start
        $('.ss-paginate-container .paginate').click(function () {
            $('.ss-paginate-container .ss-prev-arrow').addClass('active');
            $('.ss-paginate-container').toggleClass('active');
            $(this).addClass('active');
            $(this).prev().removeClass('active');
            $(this).next().removeClass('active');
        });
        $('.em-support-02 .accord-head').click(function () {
            $(this).children().toggleClass('active');
            $(this).siblings().slideToggle('active');
        });
        // ab-code-end
    });

    $(".slider-testimonial").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        mobileFirst: true,
        arrows: true,
        autoplay: false,

        prevArrow: '<button class="slick-prev arrow-testi"><i class="fa-solid fa-arrow-left"></i></button>',
        nextArrow: '<button class="slick-next arrow-testi"><i class="fa-solid fa-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 2
                },
            },
            {
                breakpoint: 1199.98,
                settings: {
                    slidesToShow: 3
                },
            },
        ],
    });

    $(".reviews-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        mobileFirst: true,
        arrows: true,
        autoplay: false,

        prevArrow: '<button class="slick-prev arrow-testi"><i class="fa-solid fa-arrow-left"></i></button>',
        nextArrow: '<button class="slick-next arrow-testi"><i class="fa-solid fa-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 2
                },
            }, {
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 3
                },
            },
            {
                breakpoint: 1199.98,
                settings: {
                    slidesToShow: 4
                },
            },
        ],
    });


    var height2 = document.getElementById('header').offsetHeight;
    $("#search-page").css('height', "calc(100vh - " + height2 + "px)");
    var height3 = document.getElementById('topbar').offsetHeight;
    $(".mob-header").css('height', "calc(100vh - " + height3 + "px)");


    $(function () {
        $(".vessel.items li").slice(0, 4).show();
        $("#loadMore").on('click', function (e) {
            e.preventDefault();
            $(".vessel.items li:hidden").slice(0, 4).slideDown();
            if ($(".vessel.items li:hidden").length == 0) {
                $("#loadMore").fadeOut('slow');
            }

        });
    });
*/