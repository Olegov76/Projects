const element = document.querySelector('.filter');
const choices = new Choices(element, { searchEnabled: false });

// $(document).ready(function () {
//     $('.click1').click(function () {
//         $('.castomscroll-box').slideToggle(300);
//         return false;
//     });
// });
// $(document).ready(function () {
//     $('.click2').click(function () {
//         $('.castomscroll-box2').slideToggle(300);
//         return false;
//     });
// });
// $(document).ready(function () {
//     $('.click3').click(function () {
//         $('.castomscroll-box3').slideToggle(300);
//         return false;
//     });
// });
// $(document).ready(function () {
//     $('.click4').click(function () {
//         $('.castomscroll-box4').slideToggle(300);
//         return false;
//     });
// });
// $(document).ready(function () {
//     $('.click5').click(function () {
//         $('.castomscroll-box5').slideToggle(300);
//         return false;
//     });
// });
const slider=document.querySelector('swiper-container');
const slider1=document.querySelector('swiper-container1');
var Swiper = new Swiper('.swiper1',
    {
        effect: 'fade',
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        loop: true, pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }, on: {
            init() {
                this.el.addEventListener('mouseenter', () => {
                    this.autoplay.stop();
                });

                this.el.addEventListener('mouseleave', () => {
                    this.autoplay.start();
                });
            }
        },
    })

$(document).ready(function () {
    $('#accordeon .acc-head').on('click', f_acc);
});
ymaps.ready(init);
function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.75846306898368, 37.601079499999905],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 15
    }); var myPlacemark = new ymaps.Placemark([55.75846306898368, 37.601079499999905], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/mark.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [-10, -10]
    });

    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myPlacemark);
}

function f_acc() {
    //$('#accordeon .ac-body').slideUp(1000);
    $('#accordeon .acc-body').not($(this).next()).slideUp(1000);
    $(this).next().slideToggle(300);
}
$(document).ready(function () {
    $('.event-btn').on("click", function () {
        $('.hidden-event').slideToggle(300);
    });
});
$(function () {
    $('a[href^="#"]').on('click', function (event) {
        // отменяем стандартное действие
        event.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        /*
        * sc - в переменную заносим информацию о том, к какому блоку надо перейти
        * dn - определяем положение блока на странице
        */

        $('html, body').animate({ scrollTop: dn }, 1200);

        /*
        * 1000 скорость перехода в миллисекундах
        */
    });
});
$("#flag").on("click", ".flag-box", function () {
    $("#flag .flag-box").removeClass("flag-box-activ"); //удаляем класс во всех вкладках
    $(this).addClass("flag-box-activ"); //добавляем класс текущей (нажатой)
});
$('.event-btn').click(function () { $(this).hide().next().show(); });


document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.nav2').forEach(function (tabBtn) {
        console.log(tabBtn);
        tabBtn.addEventListener('click', function (event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.tabs__content').forEach(function (tabsContent) {
                tabsContent.classList.remove('tabs__content-activ')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('tabs__content-activ')
        })
    })
})