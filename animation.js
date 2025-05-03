window.addEventListener('scroll', function() {
    var infCaption = document.querySelector('.inf-caption');
    var infOffsetTop = infCaption.offsetTop;
    var windowHeight = window.innerHeight;
    var scrollTop = window.scrollY;
    
    if (scrollTop > infOffsetTop - windowHeight) {
    infCaption.classList.add('animate-slidein');
    } 
    else {
    infCaption.classList.remove('animate-slidein');
    }
});

window.addEventListener('scroll', function() {
    var aboutusSection = document.querySelector('.aboutus');
    var aboutusOffsetTop = aboutusSection.offsetTop;
    var windowHeight = window.innerHeight;
    var scrollTop = window.scrollY;
    
    if (scrollTop > aboutusOffsetTop - windowHeight) {
    document.querySelector('.aboutus-image').classList.add('animate-slideleft');
    document.querySelector('.aboutus-text').classList.add('animate-slideright');
    } 
    else {
    document.querySelector('.aboutus-image').classList.remove('animate-slideleft');
    document.querySelector('.aboutus-text').classList.remove('animate-slideright');
    }
});


window.addEventListener('scroll', function() {
    var stuffSection = document.querySelector('.stuff-list');
    var stuffOffsetTop = stuffSection.offsetTop;
    var windowHeight = window.innerHeight;
    var scrollTop = window.scrollY;
    
    if (scrollTop > stuffOffsetTop - windowHeight) {
    document.querySelector('.stuff-list-caption').classList.add('animate-appeir');
    } 
    else {
    document.querySelector('.stuff-list-caption').classList.remove('animate-appeir');
    }
});

document.addEventListener('scroll', function() {
    var stuffSection = document.querySelector('.stuff-list-container');
    var windowHeight = window.innerHeight;
    var stuffOffsetTop = stuffSection.offsetTop;
    var scrollTop = window.scrollY;

    if (scrollTop > stuffOffsetTop - windowHeight) {
        stuffSection.classList.add('animate-appeir');
    } else {
        stuffSection.classList.remove('animate-appeir');
    }
});

document.addEventListener('scroll', function() {
    var footer = document.querySelector('.footer');
    var windowHeight = window.innerHeight;
    var footerOffsetTop = footer.offsetTop;
    var scrollTop = window.scrollY;

    if (scrollTop > footerOffsetTop - windowHeight) {
        footer.classList.add('animate-appeir-footer');
    } else {
        footer.classList.remove('animate-appeir-footer');
    }
});

document.addEventListener('scroll', function() {
    var socialContainer = document.querySelector('.social-container');
    var windowHeight = window.innerHeight;
    var socialContainerOffsetTop = socialContainer.offsetTop;
    var scrollTop = window.scrollY;

    if (scrollTop > socialContainerOffsetTop - windowHeight) {
        socialContainer.classList.add('animate-appeir3');
    } else {
        socialContainer.classList.remove('animate-appeir3');
    }
});

const newPageButton = document.getElementById('newPageButton');

newPageButton.addEventListener('click', function() {
    window.open('blog.html');
});



