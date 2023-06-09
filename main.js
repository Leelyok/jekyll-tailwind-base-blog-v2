
const burgerMenu = document.querySelector('.mobile-menu')
const burgerButton = document.querySelector('.hamburger-button')


burgerButton.addEventListener('click',(e) => {
    e.defaultPrevented
    e.target.classList.toggle('active')
    let menuHeight =  e.target.classList.contains('active') ? '100vh':'0vh'

    if (e.target.classList.contains('active')){
        gsap.to(burgerMenu, {
            height: '100vh',
            padding: "5%",
        })
    } else {
        gsap.to(burgerMenu, {
            height: '0vh',
            padding: '0',
        })
    }
})


