import { PerspectiveCamera } from "three";

function createCamera() {
  // fov, aspect ratio (dummy), near, far
  const camera = new PerspectiveCamera(30, 1, 0.1, 150);

  camera.position.set(40, 30, 30);

  return camera;
}

export { createCamera };
