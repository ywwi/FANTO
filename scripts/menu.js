const nav = document.querySelector('.nav')
const closeNav = document.querySelector('.close')
const menu = document.querySelector('.menu-m')
const tl = gsap.timeline()
nav.onclick = () =>
{
    tl.to(nav, { clipPath: 'circle(0px at center)' })
    .add(menuFunc, "<0.5")
    .from('.menu-m', { y: '-100%' }, "<")
    .to('.menu-m', { y: '0%', ease: Power3.easeOut, duration: 1 }, "<")
    .to('.close', { clipPath: 'circle(50px at center)' }, "<")
    .to('.upper-header', { y: 40 }, '<')
}
const menuFunc = () =>
{
    closeNav.classList.toggle('close-opened')
    menu.classList.toggle('opened-menu')
    nav.classList.toggle('closed')
    document.documentElement.classList.toggle('menu-active')
}
const leaveNav = () =>
{
    tl.to('.close', { clipPath: 'circle(0px at center)' })
    .to('.menu-m', { y: '-100%', ease: Power3.easeOut, duration: 1 }, "<")
    .add(menuFunc, "<0.7")
    .to(nav, { clipPath: 'circle(50px at center)' }, "<")
    .to('.upper-header', { y: 0 }, '<')
}
closeNav.onclick = () => leaveNav()

const links = document.querySelectorAll('.link')
links.forEach(link => { link.onclick = () => leaveNav() })