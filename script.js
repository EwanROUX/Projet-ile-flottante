import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Creation of the scene
const scene = new THREE.Scene();

//Raycaster Creation
const raycaster = new THREE.Raycaster(
    new THREE.Vector3(),
    new THREE.Vector3(0, -1, 0),
    0,
    10
)

const objects = [];
// const onObject = intersections.length > 0;


// Creating the camera (Zoomed out)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 2, 2);

// Creating the render
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls( camera, renderer.domElement );

// Load the image for the background
const textureLoader = new THREE.TextureLoader();
textureLoader.load('assets/IMG_7335.JPG', (texture) => {
    scene.background = texture;  
    console.log('Background image added!');
});

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(4, 1, 5);
scene.add(directionalLight);

// Load the GLB model for the main island (floating_island.glb)
const loader = new GLTFLoader();
loader.load('assets/floating_island.glb', (gltf) => {
    const islandModel = gltf.scene;
    islandModel.scale.set(0.02, 0.02, 0.02);  
    islandModel.position.set(0, 0, 0);
    scene.add(islandModel);
    objects.push(islandModel)
    console.log('Island successfully loaded!');

// Duplicate the island by changing its position
    const islandModelClone = islandModel.clone();
    islandModelClone.position.set(2.5, -0.2, 0.7);  
    islandModelClone.rotation.y = THREE.MathUtils.degToRad(-45); 
    scene.add(islandModelClone);  

    console.log('Island successfully duplicated and added!');
}, undefined, (error) => {
    console.error('Island loading error:', error);
});

// Load the GLB model for the fantasy house
loader.load('assets/fantasy_floating_island.glb', (gltf) => {
    const houseModel = gltf.scene;
    // houseModel.scale.set(0.1, 0.4, 0.4);  
    houseModel.position.set(-30.5, 0, -4.5);
    scene.add(houseModel);
    console.log('Fantasy Island successfully loaded!');
}, undefined, (error) => {
    console.error('Fantasy Island loading error:', error);
});

// Load the GLB model for the abandoned house (abandoned_house.glb)
loader.load('assets/abandoned_house.glb', (gltf) => {
    const houseModel = gltf.scene;
    houseModel.scale.set(0.1, 0.1, 0.1);  
    houseModel.position.set(0.4, 0.3, 0);
    scene.add(houseModel);
    console.log('Abandoned house successfully loaded!');
}, undefined, (error) => {
    console.error('Error loading abandoned house:', error);
});

// Load the GLB model for the Viking house (viking_house.glb)
loader.load('assets/viking_house.glb', (gltf) => {
    const houseModel = gltf.scene;
    houseModel.scale.set(0.04, 0.04, 0.04); 
    houseModel.position.set(2.9, 0.07, 1.1);  
    houseModel.rotation.y = THREE.MathUtils.degToRad(150); 
    scene.add(houseModel);
    console.log('Viking House successfully loaded!');
}, undefined, (error) => {
    console.error('Error loading abandoned house:', error);
});

// Load the GLB model for boat 1 (boat.glb)
loader.load('assets/boat.glb', (gltf) => {
    const houseModel = gltf.scene;
    houseModel.scale.set(0.02, 0.02, 0.02);
    houseModel.position.set(1.8, 0.08, 2.08);
    houseModel.rotation.y = THREE.MathUtils.degToRad(-45);
    scene.add(houseModel);
    console.log('Boat 1 successfully loaded!');
}, undefined, (error) => {
    console.error('Error loading boat 1:', error);
});
    
// Load the GLB model for boat 2 (boat.glb)
loader.load('assets/fishing_boat.glb', (gltf) => {
    const houseModel = gltf.scene;
    houseModel.scale.set(0.1, 0.1, 0.1);
    houseModel.position.set(0.5, 0.34, 1.45);
    houseModel.rotation.y = THREE.MathUtils.degToRad(0);
    scene.add(houseModel);
    console.log('Boat 2 successfully loaded!');
}, undefined, (error) => {
    console.error('Error loading boat 2:', error);
});

let zombie;
 // Load the GLB model for the Zombie (boat.glb)
loader.load('assets/zombie_redesigned.glb', (gltf) => {
    zombie = gltf.scene;
    console.log(gltf)
    zombie.scale.set(0.1, 0.1, 0.1);
    zombie.position.set(0.5, 1, 0.4);
    zombie.rotation.y = THREE.MathUtils.degToRad(0);
    scene.add(zombie);
    console.log('Zombie successfully loaded!');
}, undefined, (error) => {
    console.error('Error loading Zombie:', error);
});
    
// Load the GLB model for boat3 (boat.glb)
loader.load('assets/boat_with_oars.glb', (gltf) => {
    const houseModel = gltf.scene;
    houseModel.scale.set(0.0005, 0.0005, 0.0005);
    houseModel.position.set(-0.7, 0.34, 1.45);
    houseModel.rotation.y = THREE.MathUtils.degToRad(75);
    scene.add(houseModel);
    console.log('Abandoned house successfully loaded!');
}, undefined, (error) => {
    console.error('Error loading boat 2:', error);
});    

// Load the GLB model for the cloud
loader.load('assets/cloud_ring.glb', (gltf) => {
    const houseModel = gltf.scene;
    houseModel.scale.set(3, 3, 3);
    houseModel.position.set(1, 0.7, 0.45);
    houseModel.rotation.y = THREE.MathUtils.degToRad(-130);
    scene.add(houseModel);
    console.log('Cloud successfully loaded!');
 }, undefined, (error) => {
    console.error('Error loading Cloud:', error);
});
    
    // Load the GLB model for the portal (boat.glb)
    loader.load('assets/portal_vaduum.glb', (gltf) => {
    const houseModel = gltf.scene;
    houseModel.scale.set(0.0015, 0.0005, 0.0005);
    houseModel.position.set(-1.5, 0.4, 0.45);
    houseModel.rotation.y = THREE.MathUtils.degToRad(-0);
    scene.add(houseModel);
    console.log('Portal successfully loaded!');
    }, undefined, (error) => {
    console.error('Error loading Portal:', error);
    });

// Load the GLB model for the pirateship (pirateship.glb)
loader.load('assets/pirateship.glb', (gltf) => {
    const houseModel = gltf.scene;
    houseModel.scale.set(0.1, 0.1, 0.1);
    houseModel.position.set(0.6, 1, -2.5);
    houseModel.rotation.y = THREE.MathUtils.degToRad(-30);
    scene.add(houseModel);
    console.log('Pirateship successfully loaded!');
}, undefined, (error) => {
    console.error('Error loading Pirateship:', error);
});
    
// Load the GLB model for the dead tree (dead_tree.glb)
loader.load('assets/dead_tree.glb', (gltf) => {
    const deadTree = gltf.scene;
    deadTree.scale.set(0.5, 0.5, 0.5);
    deadTree.position.set(1.2, 0.2, -0.6);
    scene.add(deadTree);
    console.log('Dead tree successfully loaded!');
}, undefined, (error) => {
    console.error('Error loading dead tree:', error);
});
    
// Load the GLB model for the gravestone (low_poly_grave_stone.glb)
loader.load('assets/low_poly_grave_stone.glb', (gltf) => {
    const graveStone = gltf.scene;
    graveStone.scale.set(0.03, 0.03, 0.03);
    graveStone.position.set(-0.2, 0.35, -0.3);
    graveStone.rotation.y = THREE.MathUtils.degToRad(15);
    scene.add(graveStone);
    console.log('Gravestone successfully loaded!');
}, undefined, (error) => {
    console.error('Error loading gravestone:', error);
});

// Load the GLB model for Skeleton 1 (low_poly_grave_stone.glb)
loader.load('assets/minecraft_sad_skeleton_sitting.glb', (gltf) => {
    const graveStone = gltf.scene;
    graveStone.scale.set(0.1,0.1, 0.1);
    graveStone.position.set(0.35, 0.35, 0.38);
    graveStone.rotation.y = THREE.MathUtils.degToRad(15);
    scene.add(graveStone);
    console.log('Skeleton successfully loaded!');
}, undefined, (error) => {
    console.error('Error loading Skeleton:', error);
});
    
// Load the GLB model for Skeleton 2 (low_poly_grave_stone.glb)
loader.load('assets/minecraft_skeleton_skull_and_bones.glb', (gltf) => {
    const graveStone = gltf.scene;
    graveStone.scale.set(0.08,0.08, 0.08);
    graveStone.position.set(-1.3, 0.4, 0.8);
    graveStone.rotation.y = THREE.MathUtils.degToRad(80);
    scene.add(graveStone);
    console.log('Skeleton 2 successfully loaded!');
}, undefined, (error) => {
    console.error('Error loading Skeleton 2:', error);
});
    
// Load the GLB model for the graves (low_poly_grave_stone.glb)
loader.load('assets/grave_house_and_tombs.glb', (gltf) => {
    const graveStone = gltf.scene;
    graveStone.scale.set(0.02,0.02, 0.02);
    graveStone.position.set(2.7, 0.13, 1.6);
    graveStone.rotation.y = THREE.MathUtils.degToRad(0);
    scene.add(graveStone);
    console.log('House and Tombs successfully loaded!');
}, undefined, (error) => {
    console.error('Error loading House and Tombs:', error);
});

// Load the GLB model for the graves (low_poly_grave_stone.glb)
loader.load('assets/graves.glb', (gltf) => {
    const graveStone = gltf.scene;
    graveStone.scale.set(0.001,0.001, 0.001);
    graveStone.position.set(2.7, 0.14, 1.6);
    graveStone.rotation.y = THREE.MathUtils.degToRad(0);
    scene.add(graveStone);
    console.log('Graves successfully loaded!');
}, undefined, (error) => {
    console.error('Error loading graves:', error);
});
    
// Load the GLB model for the diorama (diorama_floating_islands__shrine.glb)
loader.load('assets/diorama_floating_islands__shrine.glb', (gltf) => {
    const dioramaModel = gltf.scene;
    dioramaModel.scale.set(2.5, 2.5, 2.5);  
    dioramaModel.position.set(3.7, -0.7, -1.0);  
    dioramaModel.rotation.y = THREE.MathUtils.degToRad(10); 
    scene.add(dioramaModel);
    console.log('Diorama added successfully!');
}, undefined, (error) => {
    console.error('Error loading diorama:', error);
});

// Motion variables
let moveX = 0, moveY = 0;
let rotateY = 0, rotateX = 0;

// Variables to manage the zombie's movements
let zombieSpeed = 0.1; 
let moveZombieX = 0, moveZombieZ = 0; 
let zombieRotationSpeed = 0.05; 

// Manage movements with the directional keys
window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowLeft':
            moveZombieX = -zombieSpeed; 
            break;
        case 'ArrowRight':
            moveZombieX = zombieSpeed; 
            break;
        case 'ArrowUp':
            moveZombieZ = zombieSpeed; 
            break;
        case 'ArrowDown':
            moveZombieZ = -zombieSpeed; 
            break;
    }
});

// Reset movement when key is released
window.addEventListener('keyup', () => {
    moveZombieX = 0;
    moveZombieZ = 0;
});

// Trackpad inversion (camera movement)
window.addEventListener('wheel', (event) => {
    moveX += event.deltaX * 0.01;
    moveY -= event.deltaY * 0.01;
});

// Rotate with arrows
window.addEventListener('keydown', (event) => {
    const rotationSpeed = 0.05;
    switch (event.key) {
        case 'ArrowLeft': rotateY -= rotationSpeed; break;
        case 'ArrowRight': rotateY += rotationSpeed; break;
        case 'ArrowUp': rotateX -= rotationSpeed; break;
        case 'ArrowDown': rotateX += rotationSpeed; break;
    }
});

// Animation
const animate = () => {
    requestAnimationFrame(animate);

    // Update camera position
    camera.position.x = moveX;
    camera.position.y = 2 + moveY;
    controls.update();

    if (zombie != undefined) {
    // Move the zombie according to the directional keys
        zombie.position.x += moveZombieX;
        zombie.position.z += moveZombieZ;

        // Spin the zombie (optional)
        if (moveZombieX !== 0 || moveZombieZ !== 0) {
            const angle = Math.atan2(moveZombieZ, moveZombieX); 
            zombie.rotation.y = angle + Math.PI / 2; 
        }

        // Raycasting to check the surface under the zombie
        raycaster.ray.origin.copy(zombie.position);
        raycaster.ray.origin.y += 10; 

        // The ray goes downwards (negative Y direction)
        raycaster.ray.direction.set(0, -1, 0);

        const intersections = raycaster.intersectObjects(objects, false); // Détecter la surface sous le zombie

        if (intersections.length > 0) {
            const intersection = intersections[0];
            zombie.position.y = intersection.point.y + 0.1; // Positionne le zombie juste au-dessus de la surface détectée
        } else {
            // If no ground detected (zombie falls)
            zombie.position.y -= 0.05; 
        }
    }

    // Apply rotation to the scene
    scene.rotation.y = rotateY;
    scene.rotation.x = rotateX;

    // Rendering the scene
    renderer.render(scene, camera);
};

animate();
