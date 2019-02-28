"use strict";
const home = {
    template: `<section landing-animation class="landing--container">
    <!-- <section ng-show="$ctrl.showTitle" class="title">BURGER BURNER</section> -->
    <section id="home--title">BURGER BURNER</section>
    <section class="intro--container--container">
        <section class="intro--container">
            <section class="intro intro--are">are</section>
            <section class="intro intro--u">u</section>
            <section class="intro intro--ready">ready</section>
            <section class="intro intro--to">to</section>
            <section class="intro intro--burn">burn</section>
            <section class="intro intro--qs">???</section>
        </section>
    </section>
    <section class="instructions">
            <!-- <h2 class="instructions-heading">Are you ready to burn??</h2> -->
            <p class="instructions__text">Want a guilt-free meal? Find out how far away you need to park in order to burn off those calories you're about to eat!</p>
            <button class="instructions__btn" ng-click="$ctrl.go();">Burn Those Burgers!!</button>
    </section>
    <?xml version="1.0" standalone="no"?><svg class="flame--upper" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 375 812" preserveAspectRatio="none" width="375" height="812"><defs><clipPath id="_clipPath_oyAhxijvcyQw9XHLW2oajDuHLX0lvUF0"><rect width="375" height="812"/></clipPath></defs><g clip-path="url(#_clipPath_oyAhxijvcyQw9XHLW2oajDuHLX0lvUF0)"><g style="isolation:isolate"><path class="flame flame--upper__path" d=" M 156.36 600 C 148.238 525.839 80.667 479.333 120 440 C 80.667 441.333 51.333 540 81.36 600 C 75.256 574.584 32 571.333 44.52 540.64 C 26 551.333 12.667 561.333 0 600 L 0 812.25 L 375 811.875 L 375 600 C 341.272 596.781 326.322 576.844 330.12 540.16 C 300.667 571.333 301.333 580 293.4 600 C 284.244 525.906 218.667 530 256.44 441.92 C 234.679 486.601 205.333 472.667 217.68 600 C 187.333 481.333 240 375 187.5 350 C 213.333 411.333 100.667 419.333 156.36 600 Z " fill="#DD1A08" vector-effect="non-scaling-stroke" stroke-width="1" stroke="#DD1A08" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3"/></g></g></svg>
    <?xml version="1.0" standalone="no"?><svg class="flame--lower" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 375 812" preserveAspectRatio="none" width="375" height="812"><defs><clipPath id="_clipPath_oyAhxijvcyQw9XHLW2oajDuHLX0lvUF0"><rect width="375" height="812"/></clipPath></defs><g clip-path="url(#_clipPath_oyAhxijvcyQw9XHLW2oajDuHLX0lvUF0)"><g style="isolation:isolate"><path class="flame flame--lower__path" d=" M 156.36 600 C 148.238 525.839 80.667 479.333 120 440 C 80.667 441.333 51.333 540 81.36 600 C 75.256 574.584 32 571.333 44.52 540.64 C 26 551.333 12.667 561.333 0 600 L 0 812.25 L 375 811.875 L 375 600 C 341.272 596.781 326.322 576.844 330.12 540.16 C 300.667 571.333 301.333 580 293.4 600 C 284.244 525.906 218.667 530 256.44 441.92 C 234.679 486.601 205.333 472.667 217.68 600 C 187.333 481.333 240 375 187.5 350 C 213.333 411.333 100.667 419.333 156.36 600 Z " fill="#ff0000" vector-effect="non-scaling-stroke" stroke-width="1" stroke="#ff0000" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3"/></g></g></svg>
</section>`,
    controller: ["Service", "$location", function (Service, $location) {
        const vm = this;
        vm.go = () => {
            $location.path("/food-selection"); 
        };
    }]
};

angular
    .module("App")
    .component("home", home);