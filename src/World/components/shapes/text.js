import { FontLoader, Mesh, MeshStandardMaterial, TextGeometry } from "three";

async function createText() {
  const fontLoader = new FontLoader();

  const font = await fontLoader.loadAsync(
    "assets/fonts/helvetiker_regular.typeface.json"
  );

  const geometry = new TextGeometry("There is literally everything in space", {
    font: font,
    size: 1,
    height: 1,
  });
  const material = new MeshStandardMaterial({ color: "#5d5d5d" });

  const text = new Mesh(geometry, material);
  text.position.set(-15, 10, 10);
  text.rotation.y = Math.PI / 2;

  return text;
}

export { createText };
