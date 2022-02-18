import { FC } from "react";
import { useSelector } from "react-redux";
import * as THREE from "three";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const MyScene: FC = () => {
  const { user } = useSelector((state: { user: any }) => state.user);
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
      const root = gltf.scene;
      root.scale.set(0.5, 0.5, 0.5);
      root.position.x = 1;
      scene.add(root);
    },
    undefined,
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
    undefined,
    function (error) {
      console.error(error);
    }
  );
  const loaderText = new FontLoader();
  loaderText.load(
    "fonts/helvetiker_regular.typeface.json",
    function (font: any) {
      const geometry = new TextGeometry(user, {
        font: font,
        size: 2,
        height: 2,
      });

      const textGeometry = new THREE.Mesh(geometry, [
        new THREE.MeshPhongMaterial({ color: 0xad4000 }),
        new THREE.MeshPhongMaterial({ color: 0x5c2301 }),
      ]);
      textGeometry.position.y += 1;
      textGeometry.position.z -= 40;
      textGeometry.position.x = 12;
      scene.add(textGeometry);
    }
  );

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(1, 3, 5);
  scene.add(light);

  camera.position.set(0, 1, 3);
  scene.add(camera);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);
  scene.background = new THREE.Color(0xffffff);
  async function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
  return <></>;
};
