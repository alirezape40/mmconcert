let imgs = document.querySelectorAll(".slide");

function sliderimg(e) {
    imgs.forEach(img => {
        let = slideinAt = (window.scrollY + window.innerHeight) - (img.height / 2);
        let imgbottom = (img.offsetTop + img.height);
        let isHalfRevealed = slideinAt > img.offsetTop;
        let imageNotPassed = window.scrollY < imgbottom;
        console.log(isHalfRevealed, imageNotPassed);
        if (isHalfRevealed && imageNotPassed) {
            img.classList.add('reveal');
        } else {
            img.classList.remove('reveal');
        }
    })
}
window.addEventListener('scroll', sliderimg);