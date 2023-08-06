import * as THREE from 'three';

//scene
const scene = new THREE.Scene()

//Create sphere
const geometry = new THREE.SphereGeometry(3,70,70)
const material = new THREE.MeshStandardMaterial({
    color:"#00ff83",
})
const mesh = new THREE.Mesh(geometry,material);
scene.add(mesh)