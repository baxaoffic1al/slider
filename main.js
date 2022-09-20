(function () {
    "use strict";
    // vertical slider object

    const vertical__slider = {
        slider__class: ".slider",
        show__slider:function (slide__id, context__item) {
            const slide__container = context__item.closest(this.slider__class).querySelector(".slides");

            if (slide__container) {
                const slides = slide__container.querySelectorAll(".slide");
                if(slides && slides[slide__id]){

                    // scroll to active slide

                    slide__container.scrollTo({
                        top: slides[slide__id].offsetTop,
                        behavior: "smooth"
                    });

                    // Set active content item

                    const active_content_item = context__item.closest(".slider__navigation").querySelector(".active");

                    if(active_content_item){
                        active_content_item.classList.remove("active");
                    }

                    context__item.classList.add("active");
                }
            }
        },


        // Initialize slide

        init_slider: function (slider) {
            const navigation__items = slider.querySelectorAll(".slider__navigation a");

            if(navigation__items){
                Object.keys(navigation__items).forEach(function(key){
                    navigation__items[key].onclick = function (e) {
                        e.preventDefault();

                        vertical__slider.show__slider(key, navigation__items[key]);
                    };
                });
            }
        },


        // Initialize Sliders



        init: function () {
            

            document.querySelectorAll(this.slider__class).forEach((slider)=> this.init_slider(slider));
        }
    };

    vertical__slider.init();
}());