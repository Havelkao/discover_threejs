import { createCamera } from "./components/camera.js";
import { createCube } from "./components/shapes/cube.js";
import { createScene } from "./components/scene.js";
import { createLights } from "./components/lights.js";
import { loadBirds } from "./components/birds/birds.js";

import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { Loop } from "./systems/Loop.js";
import { createControls } from "./systems/controls.js";
import { GridHelper, PointLightHelper } from "three";
import { createCurve } from "./components/shapes/curve.js";
import { createText } from "./components/shapes/text.js";
import { createSphere } from "./components/shapes/sphere.js";

let camera;
let renderer;
let scene;
let loop;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();

    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    const controls = createControls(camera, renderer.domElement);
    loop.updatables.push(controls);

    const gridHelper = new GridHelper(30, 30);
    // scene.add(gridHelper);

    const cube = createCube(-10, 5, -10);
    scene.add(cube);
    loop.updatables.push(cube);

    const { hemisphereLight, mainLight } = createLights();
    scene.add(mainLight, hemisphereLight);
    const mainLightHelper = new PointLightHelper(mainLight);
    const hemisphereLightHelper = new PointLightHelper(hemisphereLight);
    scene.add(mainLightHelper, hemisphereLightHelper);

    const sphere = createSphere();
    scene.add(sphere);
    loop.updatables.push(sphere);

    new Resizer(container, camera, renderer);
  }
  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }

  async init() {
    const text = await createText();
    scene.add(text);

    const { parrot, flamingo, stork } = await loadBirds();
    loop.updatables.push(parrot, flamingo, stork);
    scene.add(parrot, flamingo, stork);
  }
}

export { World };
