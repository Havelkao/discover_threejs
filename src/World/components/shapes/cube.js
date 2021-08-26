import {
  MeshStandardMaterial,
  Mesh,
  BoxBufferGeometry,
  TextureLoader,
} from "three";
import { MathUtils } from "three";

function createMaterial() {
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load("assets/textures/birb.svg");

  const material = new MeshStandardMaterial({
    map: texture,
    transparent: true,
  });

  return material;
}

function createCube(x, y, z) {
  const geometry = new BoxBufferGeometry(2, 2, 2);
  const material = createMaterial();
  const cube = new Mesh(geometry, material);

  cube.rotation.set(-0.5, -0.1, 0.8);
  cube.position.set(x, y, z);

  const radiansPerSecond = MathUtils.degToRad(30);

  cube.tick = (delta) => {
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
    // cube.position.x += 0.01;
    // cube.position.x = cube.position.x % 10;
  };

  return cube;
}

export { createCube };
