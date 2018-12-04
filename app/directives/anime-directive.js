"use strict";
function animeDirective() {
    return {
        restrict: "A",
        replace: false,
        link: function ($scope, $element, $attrs) {
            $element.on("click", () => {
                function foodWobble() {
                    $element.toggleClass("food-shake")
                    anime({
                        targets: '.food-shake',
                        rotate: [
                            { value: ['0.8', '-0.8'], duration: 160 },
                            { value: ['1', '-1'], duration: 155 },
                            { value: ['1.2', '-1.2'], duration: 145 },
                            { value: ['1', '-1'], duration: 150 },
                            { value: ['0.8', '-0.8'], duration: 155 }
                        ],
                        translateX: [
                            { value: [0.3, -0.3], duration: 180 },
                            { value: [0.4, -0.4], duration: 180 },
                            { value: [0.7, -0.7], duration: 180 },
                            { value: [0.4, -0.4], duration: 180 },
                            { value: [0.3, -0.3], duration: 180 }
                        ],
                        easing: 'easeInOutCirc'
                    });
                    setTimeout(function() {
                        $element.toggleClass("food-shake"), 5000
                    })
                }
                foodWobble();
                const plate = document.querySelector(".plate");
                plateWobble(plate.attributes[0].value);
                
                function plateWobble(count) {
                    const animations = [
                        {
                            targets: '#item0',
                            rotate: [
                                { value: ['0.5', '-0.5'], duration: 210 },
                                { value: ['0.7', '-0.7'], duration: 205 },
                                { value: ['0.9', '-0.9'], duration: 200 },
                                { value: ['1.1', '-1.1'], duration: 195 },
                                { value: ['1.3', '-1.3'], duration: 185 },
                                { value: ['1.1', '-1.1'], duration: 190 },
                                { value: ['0.9', '-0.9'], duration: 195 },
                                { value: ['0.7', '-0.7'], duration: 200 },
                                { value: ['0.6', '-0.6'], duration: 205 },
                                { value: ['0.3', '-0.3'], duration: 210 }
                            ],
                            translateX: [
                                { value: [0.1, -0.1], duration: 210 },
                                { value: [0.2, -0.2], duration: 210 },
                                { value: [0.3, -0.3], duration: 210 },
                                { value: [0.4, -0.4], duration: 210 },
                                { value: [0.7, -0.7], duration: 210 },
                                { value: [0.4, -0.4], duration: 210 },
                                { value: [0.3, -0.3], duration: 210 },
                                { value: [0.2, -0.2], duration: 210 },
                                { value: [0.1, -0.1], duration: 210 },
                                { value: [0, -0], duration: 210 }
                            ],
                            bottom: "65px",
                            duration: 10,
                            offset: 500,
                            easing: 'easeInOutCirc'
                        },
                        {
                            targets: '#item1',
                            rotate: [
                                { value: ['0.6', '-0.6'], duration: 210 },
                                { value: ['0.8', '-0.8'], duration: 205 },
                                { value: ['1', '-1'], duration: 200 },
                                { value: ['1.2', '-1.2'], duration: 195 },
                                { value: ['1.3', '-1.3'], duration: 185 },
                                { value: ['1.1', '-1.1'], duration: 190 },
                                { value: ['0.9', '-0.9'], duration: 195 },
                                { value: ['0.8', '-0.8'], duration: 200 },
                                { value: ['0.6', '-0.6'], duration: 205 },
                                { value: ['0.4', '-0.4'], duration: 210 }
                            ],
                            translateX: [
                                { value: [0.1, -0.1], duration: 210 },
                                { value: [0.2, -0.2], duration: 210 },
                                { value: [0.3, -0.3], duration: 210 },
                                { value: [0.4, -0.4], duration: 210 },
                                { value: [0.7, -0.7], duration: 210 },
                                { value: [0.4, -0.4], duration: 210 },
                                { value: [0.3, -0.3], duration: 210 },
                                { value: [0.2, -0.2], duration: 210 },
                                { value: [0.1, -0.1], duration: 210 },
                                { value: [0, -0], duration: 210 }
                            ],
                            bottom: "130px",
                            duration: 210,
                            offset: 500,
                            easing: 'easeInOutCirc'
                        },
                        {
                            targets: '#item2',
                            rotate: [
                                { value: ['0.5', '-0.5'], duration: 210 },
                                { value: ['0.7', '-0.7'], duration: 205 },
                                { value: ['1', '-1'], duration: 200 },
                                { value: ['1.2', '-1.2'], duration: 195 },
                                { value: ['1.4', '-1.4'], duration: 185 },
                                { value: ['1.2', '-1.2'], duration: 190 },
                                { value: ['1', '-1'], duration: 195 },
                                { value: ['0.8', '-0.8'], duration: 200 },
                                { value: ['0.6', '-0.6'], duration: 205 },
                                { value: ['0.4', '-0.4'], duration: 210 }
                            ],
                            translateX: [
                                { value: [0.1, -0.1], duration: 210 },
                                { value: [0.2, -0.2], duration: 210 },
                                { value: [0.3, -0.3], duration: 210 },
                                { value: [0.4, -0.4], duration: 210 },
                                { value: [0.7, -0.7], duration: 210 },
                                { value: [0.4, -0.4], duration: 210 },
                                { value: [0.3, -0.3], duration: 210 },
                                { value: [0.2, -0.2], duration: 210 },
                                { value: [0.1, -0.1], duration: 210 },
                                { value: [0, -0], duration: 210 }
                            ],
                            bottom: "195px",
                            duration: 210,
                            offset: 500,
                            easing: 'easeInOutCirc'

                        },
                        {
                            targets: '#item3',
                            rotate: [
                                { value: ['0.5', '-0.5'], duration: 210 },
                                { value: ['0.7', '-0.7'], duration: 205 },
                                { value: ['1', '-1'], duration: 200 },
                                { value: ['1.2', '-1.2'], duration: 195 },
                                { value: ['1.4', '-1.4'], duration: 185 },
                                { value: ['1.2', '-1.2'], duration: 190 },
                                { value: ['1', '-1'], duration: 195 },
                                { value: ['0.8', '-0.8'], duration: 200 },
                                { value: ['0.6', '-0.6'], duration: 205 },
                                { value: ['0.4', '-0.4'], duration: 210 }
                            ],
                            translateX: [
                                { value: [0.1, -0.1], duration: 210 },
                                { value: [0.2, -0.2], duration: 210 },
                                { value: [0.3, -0.3], duration: 210 },
                                { value: [0.4, -0.4], duration: 210 },
                                { value: [0.7, -0.7], duration: 210 },
                                { value: [0.4, -0.4], duration: 210 },
                                { value: [0.3, -0.3], duration: 210 },
                                { value: [0.2, -0.2], duration: 210 },
                                { value: [0.1, -0.1], duration: 210 },
                                { value: [0, -0], duration: 210 }
                            ],
                            bottom: "260px",
                            duration: 210,
                            offset: 500,
                            easing: 'easeInOutCirc'

                        },
                        {
                            targets: '#item4',
                            rotate: [
                                { value: ['0.5', '-0.5'], duration: 210 },
                                { value: ['0.7', '-0.7'], duration: 205 },
                                { value: ['1', '-1'], duration: 200 },
                                { value: ['1.2', '-1.2'], duration: 195 },
                                { value: ['1.4', '-1.4'], duration: 185 },
                                { value: ['1.2', '-1.2'], duration: 190 },
                                { value: ['1', '-1'], duration: 195 },
                                { value: ['0.8', '-0.8'], duration: 200 },
                                { value: ['0.6', '-0.6'], duration: 205 },
                                { value: ['0.4', '-0.4'], duration: 210 }
                            ],
                            translateX: [
                                { value: [0.1, -0.1], duration: 210 },
                                { value: [0.2, -0.2], duration: 210 },
                                { value: [0.3, -0.3], duration: 210 },
                                { value: [0.4, -0.4], duration: 210 },
                                { value: [0.7, -0.7], duration: 210 },
                                { value: [0.4, -0.4], duration: 210 },
                                { value: [0.3, -0.3], duration: 210 },
                                { value: [0.2, -0.2], duration: 210 },
                                { value: [0.1, -0.1], duration: 210 },
                                { value: [0, -0], duration: 210 }
                            ],
                            bottom: "325px",
                            duration: 210,
                            offset: 500,
                            easing: 'easeInOutCirc'

                        },
                        {
                            targets: '#item5',
                            rotate: [
                                { value: ['0.5', '-0.5'], duration: 210 },
                                { value: ['0.7', '-0.7'], duration: 205 },
                                { value: ['1', '-1'], duration: 200 },
                                { value: ['1.2', '-1.2'], duration: 195 },
                                { value: ['1.4', '-1.4'], duration: 185 },
                                { value: ['1.2', '-1.2'], duration: 190 },
                                { value: ['1', '-1'], duration: 195 },
                                { value: ['0.8', '-0.8'], duration: 200 },
                                { value: ['0.6', '-0.6'], duration: 205 },
                                { value: ['0.4', '-0.4'], duration: 210 }
                            ],
                            translateX: [
                                { value: [0.1, -0.1], duration: 210 },
                                { value: [0.2, -0.2], duration: 210 },
                                { value: [0.3, -0.3], duration: 210 },
                                { value: [0.4, -0.4], duration: 210 },
                                { value: [0.7, -0.7], duration: 210 },
                                { value: [0.4, -0.4], duration: 210 },
                                { value: [0.3, -0.3], duration: 210 },
                                { value: [0.2, -0.2], duration: 210 },
                                { value: [0.1, -0.1], duration: 210 },
                                { value: [0, -0], duration: 210 }
                            ],
                            bottom: "390px",
                            duration: 210,
                            offset: 500,
                            easing: 'easeInOutCirc'

                        }
                    ];
                    anime({
                        targets: '.plate',
                        rotate: [
                            { value: ['0.4', '-0.4'], duration: 210 },
                            { value: ['0.6', '-0.6'], duration: 205 },
                            { value: ['0.8', '-0.8'], duration: 200 },
                            { value: ['1', '-1'], duration: 195 },
                            { value: ['1.2', '-1.2'], duration: 185 },
                            { value: ['1', '-1'], duration: 190 },
                            { value: ['0.8', '-0.8'], duration: 195 },
                            { value: ['0.6', '-0.6'], duration: 200 },
                            { value: ['0.4', '-0.4'], duration: 205 },
                            { value: ['0.2', '-0.2'], duration: 210 }
                        ],
                        translateX: [
                            { value: [0.1, -0.1], duration: 210 },
                            { value: [0.2, -0.2], duration: 210 },
                            { value: [0.3, -0.3], duration: 210 },
                            { value: [0.4, -0.4], duration: 210 },
                            { value: [0.7, -0.7], duration: 210 },
                            { value: [0.4, -0.4], duration: 210 },
                            { value: [0.3, -0.3], duration: 210 },
                            { value: [0.2, -0.2], duration: 210 },
                            { value: [0.1, -0.1], duration: 210 },
                            { value: [0, -0], duration: 210 }
                        ],
                        easing: 'easeInOutCirc',
                        delay: 550
                    });
                    anime(animations[count]);
                    plate.attributes[0].value++;
                }
            });
        }
    }

}

angular.module("App").directive("animeDirective", animeDirective);