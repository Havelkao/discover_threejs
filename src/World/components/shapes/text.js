import { FontLoader, Mesh, MeshStandardMaterial, TextGeometry } from "three";

async function createText() {
  const fontLoader = new FontLoader();
  const font = await fontLoader.loadAsync(
    "node_modules/three/examples/fonts/helvetiker_regular.typeface.json"
  );

  const geometry = new TextGeometry("There is literally everything in space", {
    font: font,
    size: 1,
    height: 1,
  });
  const material = new MeshStandardMaterial({ color: "#5d5d5d" });

  const text = new Mesh(geometry, material);
  text.position.set(-10, 10, -15);

  return text;
}

export { createText };
