import { FC } from "react";
import * as THREE from "three";

export const MyScene: FC = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  // function setupModel(data: any) {
  //   const model = data.scene.children[0];

  //   return model;
  // }

  // async function loadNobile() {
  //   const loader = new GLTFLoader();

  //   const nobile = await loader.loadAsync("models/nobile/scene.gltf");

  //   console.log("Squaaawk!", nobile);
  //   const nobileModel = setupModel(nobile);

  //   return { nobileModel };
  // }

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);

  scene.add(cube);

  camera.position.z = 5;

  async function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    // await loadNobile();
    renderer.render(scene, camera);
  }
  animate();
  return <></>;
};
