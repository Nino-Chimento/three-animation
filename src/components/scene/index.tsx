import { FC } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const MyScene: FC = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const loader = new GLTFLoader();

  loader.load(
    "models/nobile/scene.gltf",

    function (gltf) {
      console.log(gltf);
      const root = gltf.scene;
      root.scale.set(0.5, 0.5, 0.5);
      root.position.x = 1;
      scene.add(root);
    },
    function (xhr) {
      console.log(xhr, "xhr");
    },
    function (error) {
      console.error(error);
    }
  );
  loader.load(
    "models/car/scene.gltf",
    function (gltf) {
      const root = gltf.scene;
      root.scale.set(0.1, 0.1, 0.1);
      scene.add(root);
    },
    function (xhr) {
      console.log(xhr, "xhr");
    },
    function (error) {
      console.error(error);
    }
  );
  const loaderText = new FontLoader();

  // loaderText.load(
  //   "fonts/helvetiker_regular.typeface.json",
  //   function (font: any) {
  //     const geometry = new TextGeometry("Hello three.js!", {
  //       font: font,
  //       size: 80,
  //       height: 5,
  //       curveSegments: 12,
  //       bevelEnabled: true,
  //       bevelThickness: 10,
  //       bevelSize: 8,
  //       bevelOffset: 0,
  //       bevelSegments: 5,
  //     });
  //   }
  // );

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(1, 2, 5);
  scene.add(light);

  camera.position.set(0, 1, 2);
  scene.add(camera);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  async function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
  return <></>;
};
