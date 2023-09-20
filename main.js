const targetDate = new Date("2023-12-31T23:59:59").getTime();
const updateCountdown = () => {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;
    if (timeRemaining <= 0) {
        document.querySelector(".hero__countdown-timer").innerHTML = "00:00:00";
    } else {
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

        document.querySelector(".hero__countdown-timer").innerHTML = formattedTime;
    }
};
const countdownInterval = setInterval(updateCountdown, 1000);
const thumbnailImages = document.querySelectorAll(".product__thumbnail-image");
const previewImage = document.querySelector(".product__preview-img");
thumbnailImages.forEach((thumbnailImage) => {
    thumbnailImage.addEventListener("click", () => {
        const thumbnailSrc = thumbnailImage.querySelector("img").getAttribute("src");
        setTimeout(() => {
            previewImage.classList.add("product__preview-img--active");
        }, 300);

        setTimeout(() => {
            previewImage.setAttribute("src", thumbnailSrc);
        }, 800);
        setTimeout(() => {
            previewImage.classList.remove("product__preview-img--active");
        }, 900);
        thumbnailImages.forEach((image) => {
            image.classList.remove("product__thumbnail-image--active");
        });
        thumbnailImage.classList.add("product__thumbnail-image--active");
    });
});
