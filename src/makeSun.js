import * as THREE from "three";

function getSun() {
  const sunMat = new THREE.MeshStandardMaterial({
    emissive: 0xFF7000,
  });
  const geo = new THREE.IcosahedronGeometry(1, 16);
  const sun = new THREE.Mesh(geo, sunMat);

  const sunLight = new THREE.PointLight(0xFFF2CC, 50);
  sun.add(sunLight);

  return sun;
}

export default getSun;
