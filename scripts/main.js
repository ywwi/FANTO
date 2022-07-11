document.documentElement.classList.toggle('menu-active')

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

import * as THREE from 'three'
import { GLTFLoader } from 'https://unpkg.com/three@0.142.0/examples/jsm/loaders/GLTFLoader.js'
import { EffectComposer } from 'https://unpkg.com/three@0.142.0/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'https://unpkg.com/three@0.142.0/examples/jsm/postprocessing/RenderPass.js'
import { ShaderPass } from 'https://unpkg.com/three@0.142.0/examples/jsm/postprocessing/ShaderPass.js'
import { DotScreenShader } from 'https://unpkg.com/three@0.142.0/examples/jsm/shaders/DotScreenShader.js'

const canvas = document.querySelector('canvas.webgl')
const scene = new THREE.Scene()
const gltfLoader = new GLTFLoader()
let fanto
gltfLoader.load('./scripts/nft.glb', (glb) =>
{
    fanto = glb.scene
    fanto.scale.set(0.25, 0.25, 0.25)
    fanto.rotation.set(-0.3, -Math.PI * 0.1, 0)
    scene.add(fanto)
})

const sizes = { width: screen.availWidth, height: screen.availHeight }
const camera = new THREE.PerspectiveCamera(40, sizes.width / sizes.height, 0.1, 15)
camera.position.z = 3
scene.add(camera)

const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.position.set(-2, 0, 0)
scene.add(ambientLight, directionalLight) 

const renderer = new THREE.WebGLRenderer(
{
    canvas,
    antialias: true,
    alpha: true
})
renderer.outputEncoding = THREE.sRGBEncoding
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setSize(sizes.width, sizes.height)

const composer = new EffectComposer(renderer)
const renderPass = new RenderPass(scene, camera)
composer.addPass(renderPass)

const dotScreen = new ShaderPass(DotScreenShader)
dotScreen.uniforms['scale'].value = 4

let flag = false
const easterTrigger = document.getElementById('trigger')
easterTrigger.onclick = () =>
{
    flag === false ? (composer.addPass(dotScreen), flag = !flag) : (composer.removePass(dotScreen), flag = !flag)
}

window.onresize = () =>
{
    sizes.width = screen.availWidth
    sizes.height = screen.availHeight
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(sizes.width, sizes.height)
    composer.setSize(sizes.width, sizes.height)
}

const clock = new THREE.Clock()
const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    if(fanto)
    {
        fanto.rotation.y = Math.cos(elapsedTime * 0.8) * 0.2 - 0.4
        fanto.position.y = Math.sin(elapsedTime * 0.8) * 0.05
    }

    composer.render()

    current.x += (destination.x - current.x) * 0.15
    current.y += (destination.y - current.y) * 0.15
    cursor.style.left = current.x + 'px'
    cursor.style.top = current.y + 'px'

    window.requestAnimationFrame(tick)
}
tick()

const faqItem = document.querySelectorAll('.faq-item')
faqItem.forEach(item => { item.onclick = () => { item.classList.toggle('opened') } })

let scrollY = window.scrollY
const tapeLineText = document.querySelectorAll('.tape-line-text')

const tLT = document.createElement('h4')
for(let i = 0; i < 20; i++)
{
    if(i % 2 == 0)
    {
        tLT.textContent = 'FANTOS'
    }
    else
    {
        tLT.textContent = 'ABOUT'
    }
    tapeLineText.forEach(tape =>
    {
        const tTLT = tLT.cloneNode(true)
        tape.appendChild(tTLT)
    })
}

window.addEventListener('scroll', () =>
{
    scrollY = window.scrollY
    tapeLineText[0].style.transform = 'translate('+ ((scrollY / sizes.width) * (sizes.width / 4) - 100) +'px, 0px)'
    tapeLineText[1].style.transform = 'translate('+ -((scrollY / sizes.width) * (sizes.width / 4) - 200) +'px, 0px)'
})

const header = document.getElementsByTagName('header')[0]
const loadingTl = gsap.timeline()
.to('html', { '--intro-bottom': '100%', duration: 1, ease: Power3.easeOut })
.to('.intro-wrapper h1', { letterSpacing: 0, marginRight: 0, color: '#00DB99' })
.to('.intro-wrapper h1', { yPercent: -125, delay: 1 })
.to('.intro-wrapper', { yPercent: -100 }, "<0.5")
.add(() => { document.documentElement.classList.toggle('menu-active') })
.from(canvas, { xPercent: 100, duration: 2, ease: Power3.easeOut }, "<")
.from(header, { yPercent: -500, duration: 2, ease: Power3.easeOut }, "<")
.add(() => { header.style.transform = 'unset' })

console.log('𝐅𝐀𝐍𝐓𝐎')