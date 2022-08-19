
    // navbar effect on scroll
    window.addEventListener("scroll", function() {
        var nav = document.querySelector("nav");
        nav.classList.toggle('sticky', window.scrollY > 0);
    });

    // responsive nav sidebar menu
    var menu = document.querySelector('.menu');
    var menuBtn = document.querySelector('.menu-btn');
    var closeBtn = document.querySelector('.close-btn');

    menuBtn.addEventListener("click", () =>{
        menu.classList.add('active');  
    });

    
    closeBtn.addEventListener("click", () =>{
        menu.classList.remove('active');  
    });