import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
import { gsap } from 'https://cdn.skypack.dev/gsap';

const camera = new THREE.PerspectiveCamera(
    10,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 13;

const scene = new THREE.Scene();
let bee;
let mixer;
const modelTarget = { x: 0, y: 0, z: 0 };
const updateModelScale = () => {
    if (bee) {
        bee.scale.setScalar(window.innerWidth <= 767 ? 0.5 : 1);
    }
};
const loader = new GLTFLoader();
loader.load('./demon_bee_full_texture.glb',
    function (gltf) {
        bee = gltf.scene;
        scene.add(bee);
        updateModelScale();

        mixer = new THREE.AnimationMixer(bee);
        mixer.clipAction(gltf.animations[0]).play();
        setModelPosition('banner', false);
    },
    function (xhr) {},
    function (error) {}
);
const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container3D').appendChild(renderer.domElement);

// light
const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
scene.add(ambientLight);

const topLight = new THREE.DirectionalLight(0xffffff, 1);
topLight.position.set(500, 500, 500);
scene.add(topLight);


const reRender3D = () => {
    requestAnimationFrame(reRender3D);
    if (bee) {
        const time = performance.now();
        bee.position.x = modelTarget.x + Math.sin(time * 0.0017) * 0.08;
        bee.position.y = modelTarget.y + Math.sin(time * 0.0025) * 0.12;
        bee.position.z = modelTarget.z;
    }
    renderer.render(scene, camera);
    if(mixer) mixer.update(0.02);
};
reRender3D();

let arrPositionModel = [
    {
        id: 'banner',
        position: {x: 0, y: -1, z: 0},
        rotation: {x: 0, y: 1.5, z: 0}
    },
    {
        id: "intro",
        position: { x: 1, y: -1, z: -5 },
        rotation: { x: 0.5, y: -0.5, z: 0 },
    },
    {
        id: "description",
        position: { x: -1, y: -1, z: -5 },
        rotation: { x: 0, y: 0.5, z: 0 },
    },
    {
        id: "contact",
        position: { x: 0.8, y: -1, z: 0 },
        rotation: { x: 0.3, y: -0.5, z: 0 },
    },
];
const setModelPosition = (sectionId, animate = true) => {
    const position_active = arrPositionModel.findIndex(
        (val) => val.id === sectionId
    );
    if (position_active < 0) {
        return;
    }

    const new_coordinates = arrPositionModel[position_active];
    const isMobile = window.innerWidth <= 767;
    const position = isMobile
        ? sectionId === 'banner'
            ? { x: 0, y: -1, z: 0.5 }
            : {
                x: new_coordinates.position.x * 0.15,
                y: new_coordinates.position.y,
                z: new_coordinates.position.z + 2,
            }
        : new_coordinates.position;
    const tweenOptions = {
        duration: animate ? 3 : 0,
        ease: "power1.out"
    };

    gsap.to(modelTarget, {
        x: position.x,
        y: position.y,
        z: position.z,
        ...tweenOptions
    });
    gsap.to(bee.rotation, {
        x: new_coordinates.rotation.x,
        y: new_coordinates.rotation.y,
        z: new_coordinates.rotation.z,
        ...tweenOptions
    });
};

const modelMove = () => {
    const sections = document.querySelectorAll('.section');
    let currentSection = 'banner';
    if (window.scrollY > 5) {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 3) {
                currentSection = section.id;
            }
        });
    }
    setModelPosition(currentSection);
};
window.addEventListener('scroll', () => {
    if (bee) {
        modelMove();
    }
})
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    updateModelScale();
})

const menuButton = document.querySelector('.hamburger');
const navLinks = document.querySelector('#navLinks');

menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
});

navLinks.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
        navLinks.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
    }
});