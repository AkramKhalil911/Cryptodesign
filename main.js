const navSlide = () => {
    const mobileBar = document.querySelector(".mobileBar");
    const navLinks = document.querySelector(".navLinks");
    const navLinksLi = document.querySelectorAll(".navLinks li");
    const navBar = document.querySelector(".navBar");

    mobileBar.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');

        navLinksLi.forEach((link, index) => {
            console.log(index);
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navFade 0.5s ease forwards ${index / 10 + 0.5}s`
            }
        });
        mobileBar.classList.toggle("toggle");
        navBar.classList.toggle("toggleBar");
        navLinks.classList.toggle("navFadeActive");
    });
}

navSlide();

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector(".navBar").style.height = "4em";
        document.querySelector(".navLogoIMG").style.width = "40px";
        document.querySelector(".navLinks").style.top = "4em";
        document.querySelector(".navBar").style.boxShadow = "0px 0px 4px 4px #888888";
    } else {
        document.querySelector(".navBar").style.height = "7.4em";
        document.querySelector(".navLogoIMG").style.width = "80px";
        document.querySelector(".navLinks").style.top = "7.5em";
        document.querySelector(".navBar").style.boxShadow = "none";
    }

    if (document.body.scrollTop > 1050 || document.documentElement.scrollTop > 1050) {
        document.querySelector(".person").classList.add("ssLeft");
        document.querySelector(".person2").classList.add("ssBottom");
        document.querySelector(".person3").classList.add("ssRight");
    }

    if (window.screen.height <= 690 && document.body.scrollTop > 80){
        document.querySelector(".navLinks").style.height = "95vh";
    } else if (window.screen.height <= 690 && document.body.scrollTop < 80) {
        document.querySelector(".navLinks").style.height = "85vh";
    } else if (window.screen.height >= 690 && window.screen.height <= 1000 && document.body.scrollTop < 80) {
        document.querySelector(".navLinks").style.height = "85vh";
    }
}