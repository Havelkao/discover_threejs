import {
  CatmullRomCurve3,
  Vector3,
  BufferGeometry,
  LineBasicMaterial,
  Line,
} from "three";

function createMaterial() {
  const material = new LineBasicMaterial({ color: 0xff0000 });

  return material;
}

function createCurve() {
  const curve = new CatmullRomCurve3([
    new Vector3(-10, 0, 10),
    new Vector3(-5, 5, 5),
    new Vector3(0, 0, 0),
    new Vector3(5, -5, 5),
    new Vector3(-10, 0, 10),
  ]);

  const points = curve.getPoints(20);
  const material = createMaterial();
  const geometry = new BufferGeometry().setFromPoints(points);
  const curveObject = new Line(geometry, material);

  return curveObject;
}

export { createCurve };
