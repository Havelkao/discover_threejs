import { DirectionalLight, AmbientLight, HemisphereLight } from "three";

function createLights() {
  // const ambientLight = new AmbientLight('white', 2);

  const hemisphereLight = new HemisphereLight(
    "white", // bright sky color
    "darkslategrey", // dim ground color
    3 // intensity
  );
  hemisphereLight.position.set(0, 10, 0);

  const mainLight = new DirectionalLight("white", 3);
  mainLight.position.set(0, 10, 0);

  return { hemisphereLight, mainLight };
}

export { createLights };
