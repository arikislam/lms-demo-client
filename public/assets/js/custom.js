
$(document).ready(function() {
    'use strict'

    // $('.sidebar__menu .submenu__toggler').on('click', function(e) {
    //     e.preventDefault();
    //     var thisSubmenu = $(this).siblings('.sidebar__submenu');
    //     $('.sidebar__menu .submenu__toggler').not($(this)).removeClass('show');
    //     $(this).toggleClass('show');

    //     if(thisSubmenu.hasClass('show')) {
    //         thisSubmenu.removeClass('show');
    //     } else {
    //         $('.sidebar__submenu').removeClass('show');
    //         $(this).siblings('.sidebar__submenu').addClass('show');
    //     }
    // })

    $('.sidebar__header .sidebar__toggler').on('click', function(e) {
        e.preventDefault();
        $('.sidebar__submenu').removeClass('show');
        $('.submenu__toggler').removeClass('show');
        $('.sidebar__wrap').toggleClass('show');
    })

    $('.header__search .icon i').on('click', function(event) {
        $('.header__search__wrap').addClass('show');
    })

    if($(window).width() < 576) {
        $(document).on('click', function(event) {
            var clickover = $(event.target);
            var _opened = $('.header__search__wrap').hasClass('show');
            if(_opened === true && !(clickover.is('.header__search__wrap .form__control, .header__search .icon i'))) {
                $('.header__search__wrap').removeClass('show');
            }
        });
    }


    $('.header__user__top').on('click', function(e) {
        e.preventDefault();
        $('.user__options').fadeToggle();
    })

    $('.header__notification .notification__toggler').on('click', function(e) {
        e.preventDefault();
        $('.notification__box').fadeToggle();
    })

})


