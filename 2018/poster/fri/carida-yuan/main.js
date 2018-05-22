/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window, Mustache */

define(function (require, exports, module, e) {
    "use strict";

    var AppInit = brackets.getModule("utils/AppInit");

    AppInit.appReady(function () {
        //...
    });
});

var wrap = $("#wrap");

$('wrap').on("scroll", function (e) {

    if (this.scrollTop > 750) {
        wrap.addClass("fix-bar");
    } else {
        wrap.removeClass("fix-bar");
    }

});

var count=$('.count').each(function () {
            $(this).prop('Counter', 2018).animate({
                Counter: $(this).text()
            }, {
                duration: 2000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });


