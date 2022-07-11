import * as THREE from 'three'
import { ParametricGeometry } from 'https://unpkg.com/three@0.142.0/examples/jsm/geometries/ParametricGeometry.js'

const canvas = document.querySelector('canvas.webgl')
const scene = new THREE.Scene()

const hyperbolic = (u, v, target) =>
{
    let alpha = Math.PI * 2 * (u - 0.5)
    let theta = Math.PI * 2 * (v - 0.5)
    let t = 5
    let bottom = 1 + Math.cosh(alpha) * Math.cosh(theta)

    let x = Math.sinh(alpha) * Math.cos(t * theta) / bottom
    let y = Math.sinh(alpha) * Math.sin(t * theta) / bottom
    let z = Math.cosh(alpha) * Math.sinh(theta) / bottom
    target.set(x, y, z)
}

const material = new THREE.MeshBasicMaterial({ color: 0x00DB99, wireframe: true, side: THREE.DoubleSide })
const hHelicoid = new THREE.Mesh(
    new ParametricGeometry(hyperbolic, 50, 50),
    material
)
hHelicoid.rotation.x = Math.PI * 0.5
scene.add(hHelicoid)

const sine = (u, v, target) =>
{
    let alpha = Math.PI * 2 * (u - 0.5)
    let theta = Math.PI * 2 * (v - 0.5)
    let a = 0.6

    let x = a * Math.sin(alpha)
    let y = a * Math.cos(theta) * Math.sin(theta)
    let z = a * Math.sin(alpha + theta)
    target.set(x, y, z)
}

const sineSurface = new THREE.Mesh(
    new ParametricGeometry(sine, 60, 60),
    material
)
sineSurface.position.set(0, 4, 0)
scene.add(sineSurface)

const container = document.getElementById('container')
const sizes = { width: container.offsetWidth, height: container.offsetHeight }
const camera = new THREE.PerspectiveCamera(40, sizes.width / sizes.height, 0.1, 15)
camera.position.z = 2.5
scene.add(camera)

const renderer = new THREE.WebGLRenderer(
{
    canvas,
    alpha: true,
    antialias: true
})
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setSize(sizes.width, sizes.height)

window.onresize = () =>
{
    sizes.width = container.offsetWidth
    sizes.height = container.offsetHeight
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(sizes.width, sizes.height)
}

let time = Date.now()
const tick = () =>
{
    const currentTime = Date.now()
    const deltaTime = currentTime - time
    time = currentTime

    hHelicoid.rotation.z += deltaTime * 0.0005

    sineSurface.rotation.x += deltaTime * 0.0005
    sineSurface.rotation.y += deltaTime * 0.0005

    current.x += (destination.x - current.x) * 0.15
    current.y += (destination.y - current.y) * 0.15
    cursor.style.left = current.x + 'px'
    cursor.style.top = current.y + 'px'

    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}
tick()

let flag = false
canvas.onclick = () =>
{
    if(flag == false)
    {
        gsap.to(hHelicoid.position, { y: -4, duration: 2, ease: Power3.easeOut })
        gsap.to(sineSurface.position, { y: 0, duration: 2, ease: Power3.easeOut })
        flag = true
    }
    else
    {
        gsap.to(hHelicoid.position, { y: 0, duration: 2, ease: Power3.easeOut })
        gsap.to(sineSurface.position, { y: 4, duration: 2, ease: Power3.easeOut })
        flag = false
    }
}