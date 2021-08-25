import {
  Mesh,
  MeshStandardMaterial,
  SphereGeometry,
  TextureLoader,
  MathUtils,
} from "three";

function createSphere() {
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load("/assets/textures/mercury.jpg");

  const geometry = new SphereGeometry(2, 32, 16);
  const material = new MeshStandardMaterial({
    map: texture,
  });
  const sphere = new Mesh(geometry, material);
  sphere.position.set(10, 5, -10);

  const radiansPerSecond = MathUtils.degToRad(30);
  sphere.tick = (delta) => {
    sphere.rotation.y += radiansPerSecond * delta;
  };

  return sphere;
}

export { createSphere };
