"use strict";

(function (ready) {
    document.addEventListener("DOMContentLoaded", ready);
})(function () {
    const sliders = document.getElementsByTagName("ax-slider");

    for (const slider of sliders) {
        handleSlider(slider);
    }

    function handleSlider(sliderElement) {

        const sliderInfo = {
            linksUrl: [],
            width: "width" in sliderElement.dataset ? sliderElement.dataset.width : null
        };
        const sliderItems = sliderElement.querySelectorAll("ax-slider-item");
        const sliderState = {
            currentImageIndex: -1
        };

        for (const sliderItem of sliderItems) {
            if ("src" in sliderItem.dataset) {
                sliderInfo.linksUrl.push(sliderItem.dataset.src);
            }
        }

        const parentElement = sliderElement.parentElement;
        const sliderRootObject = constructSlider(sliderInfo);

        if (sliderElement.previousElementSibling === null) {
            parentElement.prepend(sliderRootObject.slider);
        } else {
            sliderElement.previousElementSibling.after(sliderRootObject.slider);
        }

        parentElement.removeChild(sliderElement);

        sliderState.currentImageIndex = 0;
        sliderState.currentImage = sliderRootObject.sliderImages[sliderState.currentImageIndex];
        sliderState.currentDotIndex = 0;
        sliderState.currentDot = sliderRootObject.sliderDots[sliderState.currentDotIndex];

        addSliderListeners(sliderRootObject, sliderState);
    }

    function constructSlider(sliderInfo) {
        const slider = document.createElement("div");
        const sliderImage = document.createElement("div");
        const sliderArrowRight = document.createElement("div");
        const sliderArrowLeft = document.createElement("div");
        const sliderImageContainer = document.createElement("div");
        const sliderNavigation = document.createElement("div");
        const sliderDots = [];
        const sliderImages = [];

        slider.classList.add("slider");
        slider.appendChild(sliderImage);
        slider.appendChild(sliderNavigation);
        sliderImage.classList.add("slider-image");
        sliderImage.appendChild(sliderArrowRight);
        sliderImage.appendChild(sliderArrowLeft);
        sliderImage.appendChild(sliderImageContainer);
        sliderArrowRight.classList.add("slider-arrow-right");
        sliderArrowLeft.classList.add("slider-arrow-left");
        sliderNavigation.classList.add("slider-navigation");
        sliderImageContainer.classList.add("slider-image-container");

        sliderArrowRight.innerText = ">";
        sliderArrowLeft.innerText = "<";

        if (sliderInfo.width !== null) {
            slider.style.width = sliderInfo.width;
        }

        for (let i = 0; i < sliderInfo.linksUrl.length; i++) {
            const sliderDot = document.createElement("div");
            const image = document.createElement("img");

            sliderDots.push(sliderDot);
            sliderDot.classList.add("slider-dot");
            image.src = sliderInfo.linksUrl[i];
            image.draggable = false;
            sliderNavigation.appendChild(sliderDot);
            sliderImageContainer.appendChild(image);

            if (i === 0) {
                image.classList.add("active");
                sliderDot.classList.add("active");
            }

            sliderImages.push(image);
        }

        return {
            slider,
            sliderArrowRight,
            sliderArrowLeft,
            sliderDots,
            sliderImages
        };
    }

    function addSliderListeners(sliderRootObject, sliderState) {

        sliderRootObject.sliderArrowRight.addEventListener("click", function (event) {
            clearActiveClass();
            moveRight();
        });

        sliderRootObject.sliderArrowLeft.addEventListener("click", function (event) {
            clearActiveClass();
            moveLeft();
        });

        function clearActiveClass() {
            for (const sliderImage of sliderRootObject.sliderImages) {
                sliderImage.classList.remove("active");
            }

            for (const sliderDot of sliderRootObject.sliderDots) {
                sliderDot.classList.remove("active");
            }
        }

        function moveRight() {
            sliderState.currentImageIndex = (sliderState.currentImageIndex + 1) % sliderRootObject.sliderImages.length;

            sliderRootObject.sliderImages[sliderState.currentImageIndex].classList.add("active");
            sliderRootObject.sliderDots[sliderState.currentImageIndex].classList.add("active");
        }

        function moveLeft() {
            sliderState.currentImageIndex = sliderState.currentImageIndex === 0 ? sliderRootObject.sliderImages.length - 1 : sliderState.currentImageIndex - 1;

            sliderRootObject.sliderImages[sliderState.currentImageIndex].classList.add("active");
            sliderRootObject.sliderDots[sliderState.currentImageIndex].classList.add("active");
        }
    }
});