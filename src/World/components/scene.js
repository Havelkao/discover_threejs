import { Scene, Color, TextureLoader } from "three";

function createScene() {
  const scene = new Scene();
  // scene.background = new Color("skyblue");
  scene.background = new TextureLoader().load("assets/textures/space.jpg");

  return scene;
}

export { createScene };
