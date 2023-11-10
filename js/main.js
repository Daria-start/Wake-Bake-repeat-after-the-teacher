(function() {

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon');
        const burgerNavLink = e.target.closest('.nav__link');

        if(!burgerIcon && !burgerNavLink) return
        if(document.documentElement.clientWidth < 901);

        if(document.body.classList.contains('body--opened-burger')) {
            document.body.classList.remove('body--opened-burger')
        } else {
            document.body.classList.add('body--opened-burger')
        }
        
    }

})()